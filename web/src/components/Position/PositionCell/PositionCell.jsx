import Position from 'src/components/Position/Position'

export const QUERY = gql`
  query FindPositionById($id: Int!) {
    position: position(id: $id) {
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

export const Empty = () => <div>Position not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ position }) => {
  return <Position position={position} />
}
