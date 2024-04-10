import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_POSITION_MUTATION = gql`
  mutation DeletePositionMutation($id: Int!) {
    deletePosition(id: $id) {
      id
    }
  }
`

const Position = ({ position }) => {
  const [deletePosition] = useMutation(DELETE_POSITION_MUTATION, {
    onCompleted: () => {
      toast.success('Position deleted')
      navigate(routes.positions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete position ' + id + '?')) {
      deletePosition({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Position {position.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{position.id}</td>
            </tr>
            <tr>
              <th>X10</th>
              <td>{position.x10}</td>
            </tr>
            <tr>
              <th>X11</th>
              <td>{position.x11}</td>
            </tr>
            <tr>
              <th>X12</th>
              <td>{position.x12}</td>
            </tr>
            <tr>
              <th>X3</th>
              <td>{position.x3}</td>
            </tr>
            <tr>
              <th>X4</th>
              <td>{position.x4}</td>
            </tr>
            <tr>
              <th>X5</th>
              <td>{position.x5}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{position.name}</td>
            </tr>
            <tr>
              <th>Personal</th>
              <td>{position.personal}</td>
            </tr>
            <tr>
              <th>Checked</th>
              <td>{checkboxInputTag(position.checked)}</td>
            </tr>
            <tr>
              <th>Deleted</th>
              <td>{checkboxInputTag(position.deleted)}</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>{position.note}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPosition({ id: position.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(position.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Position
