import Button from '@mui/material/Button'

import { Link, routes } from '@redwoodjs/router'

import { useScaffoldContext } from './contexts/optionContext'

const Headline = ({ title, titleTo, homeButtonTo, homeButtonLabel }) => {
  const [options] = useScaffoldContext()
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
      {options.register1 && (
        <Link
          to={routes.peopleTree({ x1: options.register1 })}
          title={'Show person ' + options.register1 + ' detail'}
          style={{ marginLeft: 8 }}
        >
          <Button>
            節點索引:
            {options.register1}
          </Button>
        </Link>
      )}
      <div></div>
    </>
  )
}

export default Headline
