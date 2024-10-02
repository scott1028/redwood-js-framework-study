// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { PrismaClient } from '@prisma/client'

import { emitLogLevels, handlePrismaLogging } from '@redwoodjs/api/logger'

import { logger } from './logger'

const LOGS = [
  'info',
  'warn',
  'error',
  ...(process.env.NODE_ENV === 'production' ? [] : ['query']),
]

/*
 * Instance of the Prisma Client
 */
export const db = new PrismaClient({
  log: emitLogLevels(LOGS),
})

handlePrismaLogging({
  db,
  logger,
  logLevels: LOGS,
})
