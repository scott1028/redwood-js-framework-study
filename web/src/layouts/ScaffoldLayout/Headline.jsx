import { Link, routes } from '@redwoodjs/router'

import { useScaffoldContext } from './contexts'

const Headline = ({ title, titleTo, homeButtonTo, homeButtonLabel }) => {
  const [options] = useScaffoldContext()
  return (
    <>
      {titleTo && (
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes[titleTo]()} className="rw-link">
            {title}
          </Link>
        </h1>
      )}
      {homeButtonTo && (
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes[homeButtonTo]()} className="rw-link">
            {homeButtonLabel}
          </Link>
        </h1>
      )}
      <div>
        索引節點:
        {options.register1 && (
          <Link
            to={routes.peopleTree({ x1: options.register1 })}
            title={'Show person ' + options.register1 + ' detail'}
            style={{ marginLeft: 8 }}
          >
            {options.register1}
          </Link>
        )}
      </div>
      <div></div>
    </>
  )
}

export default Headline
