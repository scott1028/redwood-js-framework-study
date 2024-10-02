import xlsx from 'sheetjs-ce-unofficial'

const [_interpreter, _mainFilePath, inputFilePath] = process.argv

const VALID_CATEGORIES: Array<number> = [1, 2]

const getValidColumnIdx = (limit = 0) => {
  const output: Array<number> = []
  if (!limit) {
    return output
  }
  let idx = 2
  while (idx <= limit) {
    output.push(idx)
    idx += 3
  }
  return output
}

// ref: https://antfu.me/posts/match-chinese-characters
// const getIsValueChineseCharacters = (value: string) => {
//   return Boolean(/^\p{Script=Han}+$/u.exec(value ?? ''))
// }

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
      if (startIdx < 0) {
        break
      }
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
  const validColumIdxes = getValidColumnIdx(headers.length)
  const getGeneration = getCheckGenerationFactory(headers)
  const getValueByData = getValueByDataFactory(rows)
  const output: Array<any> = []
  output.push(`x1,x2,x3,x4,x5,x6,name,x8,x9,m1,p0,m0,note,z1,z2,z3,label`)
  output.push(
    `索引,類別,世代,房序,排行,性別,姓名,出生,享年,婚配,繼承,婚主,備註,塔號,列號,座號,稱謂`
  )
  output.push(`1,,,,,,嚴氏族譜,,,,,,,,,,`)
  const descendantMap: Record<string, number | null> = {
    0: 1,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
  }
  let mx4 = '6'
  rows.forEach((row, rowIdx) => {
    const categoryIdx = +row[0]
    if (!VALID_CATEGORIES.includes(categoryIdx)) {
      return
    }
    row.forEach((value, cellIdx) => {
      if (!validColumIdxes.includes(cellIdx)) {
        return
      }
      const getValueBy = getValueByData(cellIdx, rowIdx)
      const isValueChineseCharacters = Boolean(value)
      if (isValueChineseCharacters) {
        const generation = getGeneration(cellIdx)
        const upValue = getValueBy.up() ?? ''
        const downValue = getValueBy.down() ?? ''
        const leftValue = getValueBy.left() ?? ''
        const rightValue = getValueBy.right() ?? ''
        // output.push({
        //   rowIdx,
        //   cellIdx,
        //   value,
        //   generation,
        //   upValue,
        //   downValue,
        //   leftValue,
        //   rightValue,
        // })
        const x2 = categoryIdx
        const x3 = generation
        // 1-3: 0, 4~: mx
        mx4 = row[1] ? row[1] : mx4
        const x4 = +generation >= 4 ? `${row[1] ?? mx4}` : '0'
        const x1 = +generation * 100000 + rowIdx + 2 + +x4 * 10000
        const x5 = categoryIdx === 1 ? leftValue : ''
        const x6 = ''
        const name = value
        let x8 = rightValue ? rightValue : ''
        const x9 = ''
        const p1 = ''
        const p2 = ''
        const m1 = downValue ? x1 + 1 : ''
        //      const m2 = ''
        //      const m3 = ''
        const p0 = categoryIdx === 1 ? descendantMap[+generation - 1] ?? '' : ''
        //      const q1 = ''
        //      const q2 = ''
        const m0 = categoryIdx === 2 ? x1 - 1 : ''
        const n1 = ''
        const noteTmp =
          categoryIdx === 1 ? upValue : categoryIdx === 2 ? downValue : ''
        const note = noteTmp.includes('祿位') ? '' : noteTmp
        // const z1 = ''
        // const z2 = ''
        // const z3 = ''
        // const label = ''
        const b1 = ''

        if (/房$/.exec(name) && +x3 === 1) {
          return
        }

        // case01: +/\((?<year>\d+)\)/.exec('3123')?.groups?.year
        // case02 +/\((?<year>前\d+)\)/.exec('(前3123)')?.groups?.year.replace(/前/, '')
        const _case01Year = x8
          ? /\((?<year>\d+)\)/.exec(x8)?.groups?.year ?? ''
          : ''
        const _case02Year = x8
          ? /\((?<year>前\d+)\)/.exec(x8)?.groups?.year?.replace?.(/前/, '') ??
            ''
          : ''
        const case01Year = _case01Year ? +_case01Year + 1911 : null
        const case02Year = _case02Year ? 1912 - +_case02Year : null
        x8 = `${case01Year || case02Year || x8}`

        const tmp = categoryIdx === 1 ? upValue : downValue
        const [z1 = '', z2 = '', z3 = ''] = tmp.includes('祿位')
          ? tmp?.replace?.('祿位', '')?.split('-') ?? ['', '', '']
          : ['', '', '']

        const label = z1 === '' ? '' : name

        output.push(
          `${x1},${x2},${x3},${x4},${x5},${x6},${name},${x8},${x9},${m1},${p0},${m0},${note},${z1},${z2},${z3},${label}`
        )
        if (categoryIdx === 1) {
          descendantMap[`${generation}`] = x1
          // console.debug('decendantMap:', descendantMap)
        }
      }
    })
  })
  // console.log(JSON.stringify(output, null, 2))
  console.log(output.join('\r\n'))
}

if (require.main === module) {
  main()
}
