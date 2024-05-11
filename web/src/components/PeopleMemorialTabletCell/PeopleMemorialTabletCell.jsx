import { Fragment } from 'react'

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
      b1
      b2
      b3
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

const TableRow = styled(({ pageBreakAfter: _, ...props }) => (
  <div {...props} />
))(({ pageBreakAfter }) => ({
  display: 'table-row',
  // NOTE: keep but no use now
  pageBreakAfter,
}))

const TableCell = styled(
  ({ isEmpty: _, writingModes: _$, color: _$$, ...props }) => <div {...props} />
)(
  ({
    theme,
    writingModes = ['vertical-rl', 'horizontal-tb'],
    color = 'var(--basic-color)',
    isEmpty,
  }) => ({
    '--basic-color': theme.palette.common.black,
    '--occupied-color': theme.palette.info.main,
    '--conflict-color': theme.palette.error.main,
    '--empty-color': theme.palette.grey[500],
    position: 'relative',
    display: 'table-cell',
    padding: theme.spacing(0.5),
    minWidth: '15px',
    minHeight: '25px',
    outline: `${theme.palette.common.black} solid 1px`,
    textAlign: isEmpty ? 'center' : 'start',
    writingMode: writingModes[0],
    verticalAlign: 'middle',
    color,
    '@media print': {
      ...theme.typography.body2,
      color: 'var(--basic-color)',
      writingMode: writingModes[1] ?? writingModes[0],
    },
  })
)

const TableCellDataWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const NameWrapper = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(0.5),
}))

const Divider = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  borderTop: `2px solid ${theme.palette.common.black}`,
}))

const BDataWrapper = styled('div')({
  flexShrink: 0,
  writingMode: 'horizontal-tb',
  textAlign: 'center',
  height: 20,
})

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
        <TableCell />
        {Array.from({ length: MAX_COLUMN }, (_, colIdx) => (
          <TableCell key={colIdx} isEmpty writingModes={['horizontal-tb']}>
            {INDEX_TO_COLUMN_MAP_ROOT[colIdx]}
          </TableCell>
        ))}
      </TableRow>
      {Array.from({ length: MAX_ROWS }, (_, rowIdx) => {
        const rowNum = rowIdx + 1
        const positionMap =
          rowNum === 1 ? INDEX_TO_COLUMN_MAP_ROOT : INDEX_TO_COLUMN_MAP
        return (
          <Fragment key={rowIdx}>
            {rowNum === 2 && (
              <TableRow>
                <TableCell />
                {Array.from({ length: MAX_COLUMN }, (_, colIdx) => (
                  <TableCell
                    key={colIdx}
                    isEmpty
                    writingModes={['horizontal-tb']}
                  >
                    {positionMap[colIdx]}
                  </TableCell>
                ))}
              </TableRow>
            )}
            <TableRow>
              <TableCell
                isEmpty
                writingModes={['horizontal-tb', 'vertical-rl']}
              >
                第 {rowNum} 列
              </TableCell>
              {Array.from({ length: MAX_COLUMN }, (_, colIdx) => {
                const people = positionCandidateMap[rowNum]?.[colIdx] ?? []
                const isEmpty = people.length === 0
                const isMulti = people.length > 1
                return (
                  <TableCell
                    key={colIdx}
                    isEmpty={isEmpty}
                    writingModes={isEmpty ? ['horizontal-tb'] : ['vertical-rl']}
                    color={
                      isEmpty
                        ? 'var(--empty-color)'
                        : isMulti
                        ? 'var(--conflict-color)'
                        : 'var(--occupied-color)'
                    }
                  >
                    {isEmpty ? (
                      <NameWrapper>{positionMap[colIdx]}</NameWrapper>
                    ) : (
                      <TableCellDataWrapper>
                        <NameWrapper>
                          {people
                            .map(
                              (item) =>
                                `${item.label}${
                                  options.noHintInMemorialTablet
                                    ? ''
                                    : `(${item.x1})`
                                }`
                            )
                            .join(', ')}
                        </NameWrapper>
                        <BDataWrapper>
                          <Divider />
                          {isMulti ? '' : people[0].b1}
                        </BDataWrapper>
                      </TableCellDataWrapper>
                    )}
                  </TableCell>
                )
              })}
            </TableRow>
          </Fragment>
        )
      })}
    </Table>
  )
}
