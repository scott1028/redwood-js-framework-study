import Button from '@mui/material/Button'

import { useLocation } from '@redwoodjs/router'
import { Link, routes } from '@redwoodjs/router'

import { useScaffoldContext } from './contexts/optionContext'

const dataKey = 'x1'

const Headline = ({ title, titleTo, homeButtonTo, homeButtonLabel }) => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const [options] = useScaffoldContext()
  const dataKeyValue = queryParams.get(dataKey) || options.register1
  return (
    <>
      {homeButtonTo && (
        <Link to={routes[homeButtonTo]()}>
          <Button>{homeButtonLabel}</Button>
        </Link>
      )}
      {titleTo && (
        <Link to={routes[titleTo]()}>
          <Button>{title}</Button>
        </Link>
      )}
      {dataKeyValue && (
        <Link
          to={routes.peopleTree({ x1: dataKeyValue })}
          title={'Show person ' + dataKeyValue + ' detail'}
          style={{ marginLeft: 8 }}
        >
          <Button>
            節點索引:
            {dataKeyValue}
          </Button>
        </Link>
      )}
      <div></div>
    </>
  )
}

export default Headline
