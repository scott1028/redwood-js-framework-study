import { db } from 'src/lib/db'

export const getSchema = async () => {
  const schema = await db.$queryRaw`pragma table_info(person)`
  const columnSettingMap = Object.fromEntries(
    schema.map((columnSetting) => {
      const defaultValue = columnSetting.dflt_value
      return [
        columnSetting.name,
        {
          ...columnSetting,
          transform: (value) => {
            console.log('value:', [
              columnSetting.name,
              columnSetting.type,
              value,
              defaultValue,
            ])
            switch (columnSetting.name) {
              case 'dt': {
                return value.length === 0 ? null : new Date(value)
              }
            }
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
