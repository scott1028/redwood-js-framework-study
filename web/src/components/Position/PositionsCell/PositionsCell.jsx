import { Link, routes } from '@redwoodjs/router'

import Positions from 'src/components/Position/Positions'

export const QUERY = gql`
  query FindPositions {
    positions {
      id
      x10
      x11
      x12
      x3
      x4
      x5
      name
      personal
      checked
      deleted
      note
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No positions yet. '}
      <Link to={routes.newPosition()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ positions }) => {
  return <Positions positions={positions} />
}
