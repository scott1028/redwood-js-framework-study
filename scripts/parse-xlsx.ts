import xlsx from 'sheetjs-ce-unofficial'

const [_interpreter, _mainFilePath, inputFilePath] = process.argv

// ref: https://antfu.me/posts/match-chinese-characters
const getIsValueChineseCharacters = (value: string) => {
  return Boolean(/^\p{Script=Han}+$/u.exec(value ?? ''))
}

const getValueByDataFactory =
  (rows: Array<Array<string>>) => (cellIdx: number, rowIdx: number) => {
    let cellStartIdx = cellIdx
    let rowStartIdx = rowIdx

    const reset = () => {
      cellStartIdx = cellIdx
      rowStartIdx = rowIdx
    }

    const getMoveTo = (goFunc: () => void, isReset?: boolean) => {
      goFunc()
      const output = rows?.[rowStartIdx]?.[cellStartIdx] ?? null
      if (isReset ?? true) {
        reset()
      }
      return output
    }
    const up = (isReset?: boolean) =>
      getMoveTo(() => (rowStartIdx -= 1), isReset)
    const down = (isReset?: boolean) =>
      getMoveTo(() => (rowStartIdx += 1), isReset)
    const left = (isReset?: boolean) =>
      getMoveTo(() => (cellStartIdx -= 1), isReset)
    const right = (isReset?: boolean) =>
      getMoveTo(() => (cellStartIdx += 1), isReset)

    return {
      up,
      down,
      left,
      right,
      reset,
    }
  }

const getCheckGenerationFactory =
  (headers: Array<string | undefined>) => (rowIdx: number) => {
    let startIdx = rowIdx
    let generation = ''
    while (!generation) {
      generation = headers[startIdx] ?? ''
      startIdx -= 1
    }
    return generation
  }

const main = () => {
  if (!inputFilePath) {
    console.log('Input example: yarn parse-xlsx ./data.xlsx')
    return
  }

  const ws = xlsx.readFile(inputFilePath)
  const firstSheet = Object.values(ws.Sheets)[0]
  const data = xlsx.utils.sheet_to_json<Array<string>>(firstSheet, {
    header: 1,
  })
  const [headers, ...rows] = data
  const getGeneration = getCheckGenerationFactory(headers)
  const getValueByData = getValueByDataFactory(rows)
  const output: Array<any> = []
  rows.forEach((row, rowIdx) =>
    row.forEach((value, cellIdx) => {
      const isValueChineseCharacters = getIsValueChineseCharacters(value)
      const getValueBy = getValueByData(cellIdx, rowIdx)
      if (isValueChineseCharacters) {
        const generation = getGeneration(cellIdx)
        const upValue = getValueBy.up()
        const downValue = getValueBy.down()
        const leftValue = getValueBy.left()
        const rightValue = getValueBy.right()
        output.push({
          rowIdx,
          cellIdx,
          value,
          generation,
          upValue,
          downValue,
          leftValue,
          rightValue,
        })
      }
    })
  )
  console.log(JSON.stringify(output, null, 2))
}

if (require.main === module) {
  main()
}
