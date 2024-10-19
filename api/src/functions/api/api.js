import { Parser } from 'json2csv'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

import { SORTED_COLUMN_SETTING_MAP } from '../../lib/constants'
import { readCsvFromBuffer } from '../../services/csv'
import { getSchema } from '../../services/schema'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 *
 * [Test]
 * $ curl -H "Content-Type: text/plain" -X POST --data-binary @/home/scott/workspace/yan-sample.csv http://localhost:8911/api/upload -vvv
 */
export const handler = async (event, _context) => {
  logger.info(`${event.httpMethod} ${event.path}: api function`)
  logger.info('event:', event)
  const params = event.queryStringParameters || {};
  const skipDelete = params.skipDelete === '1';

  switch (event.path) {
    case '/api/upload': {
      // no idea how to make it dynamic
      if (!skipDelete) {
        await db.$executeRaw`delete from person`
      }
      const columnSettingMap = await getSchema('person')
      const items = await readCsvFromBuffer(event.body)
      const [headers, _headerComments, ...rows] = items

      // avoid from foreign key constraint restriction by database
      await db.$transaction(
        rows.map((values) => {
          const payloadMap = new Map()
          values.forEach((value, idx) => {
            const columnKey = headers[idx]
            const transformedValue =
              columnSettingMap[columnKey].transform(value)
            payloadMap.set(columnKey, transformedValue)
          })
          const rawRecord = Object.fromEntries(payloadMap)
          return db.person.upsert({
            where: { x1: rawRecord.x1 },
            update: rawRecord,
            create: { dt: null, ...rawRecord },
          })
        })
      )
      if (event.httpMethod !== 'POST') {
        return {
          statusCode: 401,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            msg: 'reject',
          }),
        }
      }
      return {
        statusCode: 201,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        // body: JSON.stringify(resp, null, 2),
      }
    }
    case '/api/export': {
      const people = await db.person.findMany()
      const [firstRow] = people
      const secondaryColumnRow = Object.keys(firstRow)
        .map((columnKey) => ({
          [columnKey]: SORTED_COLUMN_SETTING_MAP[columnKey],
        }))
        .reduce((prev, curr) => ({ ...prev, ...curr }), {})
      const parser = new Parser({ eol: '\r\n' })
      const csvContent = parser.parse([secondaryColumnRow, ...people])
      return {
        statusCode: 201,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/csv',
          'Content-Disposition': `attachment; filename="exported-db-${Date.now()}.csv"`,
        },
        body: csvContent,
      }
    }
    default: {
      return {
        statusCode: 401,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    }
  }
}
