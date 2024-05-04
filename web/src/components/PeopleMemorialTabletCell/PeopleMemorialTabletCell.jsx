import { styled } from '@mui/material/styles'

import { useScaffoldContext } from '../../layouts/ScaffoldLayout/contexts/optionContext'

export const QUERY = gql`
  query FindPeopleRelationship {
    people {
      x1
      x2
      x3
      x4
      x5
      x6
      name
      x8
      x9
      p1
      p2
      m1
      m2
      m3
      p0
      q1
      q2
      m0
      n1
      n2
      note
      z1
      z2
      z3
      label
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

const MAX_ROWS = 32
const MAX_COLUMN = 25
const MID_COLUMN_INDEX = Math.ceil(MAX_COLUMN / 2) - 1
const MAX_LEFT_INDEX = Math.floor(MAX_COLUMN / 2) * 2

const getColumnMap = (offsetRight = 0) => {
  return Object.fromEntries(
    Array.from({ length: MAX_COLUMN }, (_, idx) => {
      let slotNum
      if (idx < MID_COLUMN_INDEX) {
        slotNum = MAX_LEFT_INDEX - idx * 2
      }
      if (idx === MID_COLUMN_INDEX) {
        slotNum = 1
      }
      if (idx > MID_COLUMN_INDEX) {
        slotNum = 1 + (idx - offsetRight - MID_COLUMN_INDEX) * 2
      }
      return [slotNum, idx]
    })
  )
}

const reverseMap = (simpleKeyValueMap) =>
  Object.fromEntries(
    Object.entries(simpleKeyValueMap).map((item) => [item[1], item[0]])
  )

const COLUMN_TO_INDEX_MAP_ROOT = getColumnMap(0)
const COLUMN_TO_INDEX_MAP = getColumnMap(1)
const INDEX_TO_COLUMN_MAP_ROOT = reverseMap(COLUMN_TO_INDEX_MAP_ROOT)
const INDEX_TO_COLUMN_MAP = reverseMap(COLUMN_TO_INDEX_MAP)

const Table = styled('div')(({ theme }) => ({
  display: 'table',
  border: `2px solid ${theme.palette.common.black}`,
  width: '100%',
  minWidth: theme.spacing(100),
  maxWidth: theme.spacing(150),

  '@media print': {
    minWidth: 'unset',
    maxWidth: 'unset',
    margin: 0,
  },
}))

const TableRow = styled('div')({
  display: 'table-row',
})

const TableCell = styled(
  ({ isEmpty: _, isMulti: _$, isHeader: _$$, ...props }) => <div {...props} />
)(({ theme, isEmpty, isMulti, isHeader }) => ({
  '--basic-color': theme.palette.common.dark,
  display: 'table-cell',
  padding: theme.spacing(0.5),
  minWidth: '15px',
  minHeight: '25px',
  outline: `${theme.palette.common.black} solid 1px`,
  textAlign: isEmpty ? 'center' : 'start',
  writingMode: isEmpty ? 'horizontal-tb' : 'vertical-rl',
  verticalAlign: 'middle',
  color: isEmpty
    ? isHeader
      ? 'var(--basic-color)'
      : theme.palette.grey[500]
    : isMulti
      ? theme.palette.error.main
      : theme.palette.info.main,
  '@media print': {
    ...theme.typography.body2,
    color: 'var(--basic-color)',
    writingMode: isHeader ? 'vertical-rl' : 'horizontal-tb',
  },
}))

export const Success = ({ people, z1 = 1 }) => {
  const [options] = useScaffoldContext()
  const positionCandidateMap = {}
  people
    .filter((item) => item.z1 === z1)
    .forEach((item) => {
      const row = item.z2
      const positionMap =
        row === 1 ? COLUMN_TO_INDEX_MAP_ROOT : COLUMN_TO_INDEX_MAP
      const position = {
        rowNum: item.z2,
        columnIndex: positionMap[item.z3],
      }
      // init slot
      positionCandidateMap[position.rowNum] =
        positionCandidateMap[position.rowNum] || {}
      positionCandidateMap[position.rowNum][position.columnIndex] =
        positionCandidateMap[position.rowNum][position.columnIndex] || []

      // fill person data
      positionCandidateMap[position.rowNum][position.columnIndex].push(item)
    })
  return (
    <Table>
      <TableRow>
        <TableCell isEmpty isHeader />
        {Array.from({ length: MAX_COLUMN }, (_, colIdx) => (
          <TableCell
            key={colIdx}
            isEmpty
          >
            {INDEX_TO_COLUMN_MAP_ROOT[colIdx]}
          </TableCell>
        ))}
      </TableRow>
      {Array.from({ length: MAX_ROWS }, (_, rowIdx) => {
        const rowNum = rowIdx + 1
        const positionMap =
          rowNum === 1 ? INDEX_TO_COLUMN_MAP_ROOT : INDEX_TO_COLUMN_MAP
        return (
          <TableRow key={rowIdx}>
            <TableCell isEmpty isHeader>
              第 {rowNum} 列
            </TableCell>
            {Array.from({ length: MAX_COLUMN }, (_, colIdx) => {
              const people = positionCandidateMap[rowNum]?.[colIdx] ?? []
              const isEmpty = people.length === 0
              return (
                <TableCell
                  key={colIdx}
                  isEmpty={isEmpty}
                  isMulti={positionCandidateMap[rowNum]?.[colIdx]?.length > 1}
                >
                  {isEmpty
                    ? positionMap[colIdx]
                    : people
                      .map(
                        (item) =>
                          `${item.label}${options.noHintInMemorialTablet
                            ? ''
                            : `(${item.x1})`
                          }`
                      )
                      .join(', ')}
                </TableCell>
              )
            })}
          </TableRow>
        )
      })}
    </Table>
  )
}
