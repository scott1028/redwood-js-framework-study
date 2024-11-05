import xlsx from 'sheetjs-ce-unofficial'

const [_interpreter, _mainFilePath, inputFilePath] = process.argv

const VALID_CATEGORIES: Array<number> = [1, 2]

const colG1 = 5

const getValidColumnIdx = (limit = 0) => {
  const output: Array<number> = []
  if (!limit) {
    return output
  }
  let idx = colG1
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
    const leftUp = (isReset?: boolean) => {
      left(false)
      return up(isReset);
    }
    const leftDown = (isReset?: boolean) => {
      left(false)
      return down(isReset);
    }

    return {
      up,
      down,
      left,
      right,
      leftUp,
      leftDown,
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
    console.log('Input example: yarn run parse-xlsx ./data.xlsx')
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
  output.push(`x1,x2,x3,x4,x5,x6,name,x8,x9,p1,p2,p0,q1,q2,m1,m2,m0,n1,n2,note,z1,z2,z3,label,b1`)
  output.push(`索引,類別,世代,房序,排行,性別,姓名,出生,享年,父親,母親,繼承,Q1,Q2,婚配,婚配,婚主,N1,N2,備註,塔號,列號,座號,稱謂,B1`)
  output.push(`1,,,,,,嚴氏族譜,,,,,,,,,,,,,,,,,,`)

  let nameGEN = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  let p0GEN   = [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1,]
  let p1GEN   = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,]
  let p2GEN   = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,]
  let mx4 = '6'

  rows.forEach((row, rowIdx) => {
    const categoryIdx = +row[colG1-2]
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
        const leftUpValue = getValueBy.leftUp() ?? ''
        const leftDownValue = getValueBy.leftDown() ?? ''

        // output.push({
        //   rowIdx,
        //   cellIdx,
        //   value,
        //   generation,
        //   upValue,
        //   downValue,
        //   leftValue,
        //   rightValue,
        //   leftUp,    //繼承屬性: 出嗣[*], 入嗣[2..5], 空白=1嫡生; ~:改設類別=0
        //   leftDown,  //性別: 空白=男性, 記號=女性 (配偶之性別反之)
        // })

        let x2 = categoryIdx
        const x3 = generation
        // 1-3: 0, 4~: mx

        mx4 = row[colG1-1] ? row[colG1-1] : mx4
        const x4 = +generation >= 4 ? `${row[colG1-1] ?? mx4}` : '0'

        const x1 = +generation * 100000 + rowIdx + 2 + +x4 * 10000
        const x5 = categoryIdx === 1 ? leftValue : ''

        let x6 =0
        if (categoryIdx === 1)
              { (leftDownValue === '') ? x6 = 1 : x6 = 2 }
        else  { (leftValue === '')     ? x6 = 2 : x6 = 1 }

        const name = value
        if (/房$/.exec(name) && +x3 === 1) {
          return
        }

        const m2Yes = (categoryIdx === 1) && (nameGEN[ +generation ] === value) ? 1 : 0
        const noteM2 = (m2Yes === 1) ? p0GEN[+generation + 1] : ''

        const noteTmp =
          categoryIdx === 1 ? upValue : categoryIdx === 2 ? downValue : ''
        let note = noteTmp.includes('祿位') ? '' : noteTmp


        let   x8 = rightValue
        const x9 = ''

        const p0 = categoryIdx === 1 ? p0GEN[ +generation ] ?? '' : ''
        let   p1 = categoryIdx === 1 ? p1GEN[ +generation ] ?? '' : ''
        let   p2 = categoryIdx === 1 ? p2GEN[ +generation ] ?? '' : ''
        let   q1 = ''
        let   q2 = ''

        if   ( categoryIdx ===  1 ) {
          if ( leftUpValue === '*') { note = ':' + note;   x2=0 ; q1='1'; q2='2'; } else
          if ( leftUpValue === '~') { note = ';' + noteM2; x2=0;} else
          if ( leftUpValue === '' ) { q1='1'}
          if (+leftUpValue  >  +1 ) { q1=leftUpValue; p1=''; p2=''; }
          if (+p1 === 0) p1='';
          if (+p2 === 0) p2='';
        }

        const m1 = categoryIdx === 1 ? (downValue !== '') ? !m2Yes ? x1 + 1 : '' : '' : ''
        const m2 = categoryIdx === 1 ? (downValue !== '') ?  m2Yes ? x1 + 1 : '' : '' : ''
        //nst m3 = ''
        const m0 = categoryIdx === 2 ? (name !== '') &&
          (p0GEN[+generation +1] > 1) ? p0GEN[+generation +1] : '' : ''

        const n1 = ''
        const n2 = ''

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

        const mfLabel = x6 === 1 ? '公' : categoryIdx === 2 ? '婆' : '姑婆'
        const label = z1 === '' ? '' :
              categoryIdx === 1 ? name + mfLabel : upValue + mfLabel + name

        const b1 = ''
        const b2 = ''
        const b3 = ''

        output.push(
          `${x1},${x2},${x3},${x4},${x5},${x6},${name},${x8},${x9},${p1},${p2},${p0},${q1},${q2},${m1},${m2},${m0},${n1},${n2},${note},${z1},${z2},${z3},${label},${b1}`
        )
        // (isValueChineseCharacters) //
{/*
        if (categoryIdx === +1) {
          valueP0[+generation] = x1;
          valueP1[+generation] = (+x6 === 1) ? x1 : (downValue !== '') ? x1 + 1 : 0
          valueP2[+generation] = (+x6 === 2) ? x1 : (downValue !== '') ? x1 + 1 : 0
        }
*/}
        if ( categoryIdx === +1 ) {
          if (nameGEN [ +generation    ] !== name) {
                p0GEN [ +generation +1 ] = x1;
                p1GEN [ +generation +1 ] = (+x6 === 1) ? x1 : (downValue !== '') ? x1 + 1 : 0 }
                p2GEN [ +generation +1 ] = (+x6 === 2) ? x1 : (downValue !== '') ? x1 + 1 : 0
              nameGEN [ +generation    ] = name;
        }
      }
    })
  })
  // console.log(JSON.stringify(output, null, 2))
  console.log(output.join('\r\n'))
}

{/*   修改摘要：

  v1: 行定位 @(世代數字) ++3, max = 12,
      列定位 @(col,row) 不為空白且中文 排除{'良房','大房','二房','三房','四房','五房'}
  v2: 新增判斷性別 . @leftDownValue 有記號者為女性 空白為男性
  v3: 新設繼承屬性 * @leftUpValue   有記號者為過房繼承出嗣方 類別改設為0 避免重複統計
      強制設定類別 ~ @leftUpValue,  記號 ~ 類別改設為 0	  記號 3 類別改設為 3
  v4: 推論設定祿位稱呼 + 判別宗親女性祿位標記姑婆
  v5: 判斷配偶空白 下一代尊親配偶欄設0
      判斷女性宗親 子代之[P1,P2] 交換位置
  v6: 判斷二婚 (階段完成 不足部分 由主程式提供修補 m2Link)

*/}
if (require.main === module) {
  main()
}
