import { db } from 'src/lib/db'

export const getSchema = async (tableName) => {
  console.log('tableName:', tableName)
  // no idea how to make it dynamic
  await db.$executeRaw`delete from person`
  const schema = await db.$queryRaw`pragma table_info(person)`
  const columnSettingMap = Object.fromEntries(
    schema.map((columnSetting) => {
      const defaultValue = columnSetting.dflt_value
      return [
        columnSetting.name,
        {
          ...columnSetting,
          transform: (value) => {
            switch (columnSetting.type) {
              case 'INTEGER':
                return value.length === 0 ? defaultValue : +value
              case 'TEXT':
                return value.length === 0 ? defaultValue : value
            }
          },
        },
      ]
    })
  )
  return columnSettingMap
}
