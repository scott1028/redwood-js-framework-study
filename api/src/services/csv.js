import csv from 'csv'

export const readCsvFromBuffer = async (buffer) => {
  const items = []
  await csv.parse(buffer).forEach((item) => items.push(item))
  return items
}
