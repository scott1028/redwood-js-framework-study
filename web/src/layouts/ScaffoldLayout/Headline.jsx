import Button from '@mui/material/Button'

import { useLocation, Link, routes } from '@redwoodjs/router'

import { useScaffoldContext } from './contexts/optionContext'

const DATA_KEY = 'x1'
const TITLE = 'People'
const TITLE_TO = 'people'
const HOME_BUTTON_LABEL = 'TreeView'
const HOME_BUTTON_TO = 'root'
const PEOPLE_MEMORIAL_TABLET_LABEL = 'Memorial Tablet'
const PEOPLE_MEMORIAL_TABLET_LABEL_TO = 'peopleMemorialTablet'

const Headline = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const [options] = useScaffoldContext()
  const dataKeyValue = queryParams.get(DATA_KEY) || options.register1
  return (
    <>
      <Link to={routes[HOME_BUTTON_TO]()}>
        <Button>{HOME_BUTTON_LABEL}</Button>
      </Link>
      <Link to={routes[TITLE_TO]()}>
        <Button>{TITLE}</Button>
      </Link>
      {dataKeyValue && (
        <Link
          to={routes.personTree({ x1: dataKeyValue })}
          title={`Show person ${dataKeyValue} detail`}
          style={{ marginLeft: 8 }}
        >
          <Button>
            節點索引:
            {dataKeyValue}
          </Button>
        </Link>
      )}
      <Link to={routes[PEOPLE_MEMORIAL_TABLET_LABEL_TO]()}>
        <Button>{PEOPLE_MEMORIAL_TABLET_LABEL}</Button>
      </Link>
    </>
  )
}

export default Headline
