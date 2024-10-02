import Button from '@mui/material/Button'

import { useLocation, Link, routes } from '@redwoodjs/router'

import { useScaffoldContext } from './contexts/optionContext'

const DATA_KEY = 'x1'
const HOME_BUTTON_LABEL = '親脈樹'
const HOME_BUTTON_TO = 'root'
const TITLE = '資料元'
const TITLE_TO = 'people'

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
      {dataKeyValue && (
        <Link
          to={routes.personTree({ x1: dataKeyValue })}
          title={`Show person ${dataKeyValue} detail`}
          style={{ marginLeft: 8 }}
        >
          <Button>支脈({dataKeyValue})</Button>
        </Link>
      )}
      <Link to={routes[TITLE_TO]()}>
        <Button>{TITLE}</Button>
      </Link>
    </>
  )
}

export default Headline
