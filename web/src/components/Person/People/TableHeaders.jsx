import { SORTED_COLUMN_SETTING_MAP } from '../../../../../api/src/lib/constants'

const columnKeys = Object.keys(SORTED_COLUMN_SETTING_MAP)

const TableHeaders = () => (
  <>
    {columnKeys.map((columnKey) => (
      <th key={columnKey}>{SORTED_COLUMN_SETTING_MAP[columnKey]}</th>
    ))}
  </>
)

export default TableHeaders
