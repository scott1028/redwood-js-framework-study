import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Position/PositionsCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_POSITION_MUTATION = gql`
  mutation DeletePositionMutation($id: Int!) {
    deletePosition(id: $id) {
      id
    }
  }
`

const PositionsList = ({ positions }) => {
  const [deletePosition] = useMutation(DELETE_POSITION_MUTATION, {
    onCompleted: () => {
      toast.success('Position deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete position ' + id + '?')) {
      deletePosition({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>X10</th>
            <th>X11</th>
            <th>X12</th>
            <th>X3</th>
            <th>X4</th>
            <th>X5</th>
            <th>Name</th>
            <th>Personal</th>
            <th>Checked</th>
            <th>Deleted</th>
            <th>Note</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position) => (
            <tr key={position.id}>
              <td>{truncate(position.id)}</td>
              <td>{truncate(position.x10)}</td>
              <td>{truncate(position.x11)}</td>
              <td>{truncate(position.x12)}</td>
              <td>{truncate(position.x3)}</td>
              <td>{truncate(position.x4)}</td>
              <td>{truncate(position.x5)}</td>
              <td>{truncate(position.name)}</td>
              <td>{truncate(position.personal)}</td>
              <td>{checkboxInputTag(position.checked)}</td>
              <td>{checkboxInputTag(position.deleted)}</td>
              <td>{truncate(position.note)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.position({ id: position.id })}
                    title={'Show position ' + position.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPosition({ id: position.id })}
                    title={'Edit position ' + position.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete position ' + position.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(position.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PositionsList
