import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Person/PeopleCell'
import { truncate } from 'src/lib/formatters'

import TableHeaders from './TableHeaders'

const DELETE_PERSON_MUTATION = gql`
  mutation DeletePersonMutation($x1: Int!) {
    deletePerson(x1: $x1) {
      x1
    }
  }
`

const PeopleList = ({ people }) => {
  const [deletePerson] = useMutation(DELETE_PERSON_MUTATION, {
    onCompleted: () => {
      toast.success('Person deleted')
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

  const onDeleteClick = (x1) => {
    if (confirm('Are you sure you want to delete person ' + x1 + '?')) {
      deletePerson({ variables: { x1 } })
    }
  }

  console.debug('routes:', routes)

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <TableHeaders />
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.x1}>
              <td>
                <Link
                  to={routes.personTree({ x1: person.x1 })}
                  title={`Show person ${person.x1} detail`}
                >
                  {truncate(person.x1)}
                </Link>
              </td>
              <td>{truncate(person.x2)}</td>
              <td>{truncate(person.x3)}</td>
              <td>{truncate(person.x4)}</td>
              <td>{truncate(person.x5)}</td>
              <td>{truncate(person.x6)}</td>
              <td>{truncate(person.name)}</td>
              <td>{truncate(person.x8)}</td>
              <td>{truncate(person.x9)}</td>
              <td>{truncate(person.p1)}</td>
              <td>{truncate(person.p2)}</td>
              <td>{truncate(person.m1)}</td>
              <td>{truncate(person.m2)}</td>
              <td>{truncate(person.m3)}</td>
              <td>{truncate(person.p0)}</td>
              <td>{truncate(person.q1)}</td>
              <td>{truncate(person.q2)}</td>
              <td>{truncate(person.m0)}</td>
              <td>{truncate(person.n1)}</td>
              <td>{truncate(person.n2)}</td>
              <td>{truncate(person.note)}</td>
              <td>{truncate(person.z1)}</td>
              <td>{truncate(person.z2)}</td>
              <td>{truncate(person.z3)}</td>
              <td>{truncate(person.label)}</td>
              <td>{truncate(person.b1)}</td>
              <td>{truncate(person.b2)}</td>
              <td>{truncate(person.b3)}</td>
              <td>
                <nav className="rw-table-actions">
                  {/* built-in but no-used page */}
                  {/* <Link
                    to={routes.person({ x1: person.x1 })}
                    title={'Show person ' + person.x1 + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link> */}
                  <Link
                    to={routes.editPerson({ x1: person.x1 })}
                    title={'Edit person ' + person.x1}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete person ' + person.x1}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(person.x1)}
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

export default PeopleList
