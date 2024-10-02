const SORTED_COLUMN_SETTING_MAP = {
  //  z1: {
  //    label: '塔',
  //    width: 25,
  //  },
  z2: {
    label: '列',
    width: 22,
  },
  z3: {
    label: '號',
    width: 22,
  },
  label: {
    label: '稱謂標註',
    width: 125,
  },
  b1: {
    label: 'B1',
    width: 22,
  },
  x1: {
    label: '索引',
    width: 80,
  },
  x3: {
    label: '世',
    width: 22,
  },
  x4: {
    label: '房',
    width: 22,
  },
  p0: {
    label: '尊親',
    width: 70,
  },
  m0: {
    label: '婚主',
    width: 70,
  },
}

const columnKeys = Object.keys(SORTED_COLUMN_SETTING_MAP)

const TableHeaders = ({
  isReverse,
  blackList,
}: {
  isReverse: boolean
  blackList: Record<string, boolean>
}) => (
  <>
    {(isReverse ? columnKeys.toReversed() : columnKeys)
      .filter((columnKey) => !(blackList[columnKey] ?? false))
      .map((columnKey) => (
        <th
          key={columnKey}
          style={{ width: SORTED_COLUMN_SETTING_MAP[columnKey].width }}
        >
          {SORTED_COLUMN_SETTING_MAP[columnKey].label}
        </th>
      ))}
  </>
)

export default TableHeaders
