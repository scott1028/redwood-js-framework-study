import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_PERSON_MUTATION = gql`
  mutation DeletePersonMutation($x1: Int!) {
    deletePerson(x1: $x1) {
      x1
    }
  }
`

const Person = ({ person }) => {
  const [deletePerson] = useMutation(DELETE_PERSON_MUTATION, {
    onCompleted: () => {
      toast.success('Person deleted', { duration: 750 })
      navigate(routes.people())
    },
    onError: (error) => {
      toast.error(error.message, { duration: 750 })
    },
  })

  const onDeleteClick = (x1) => {
    if (confirm('Are you sure you want to delete person ' + x1 + '?')) {
      deletePerson({ variables: { x1 } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Person {person.x1} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>X1</th>
              <td>{person.x1}</td>
            </tr>
            <tr>
              <th>X2</th>
              <td>{person.x2}</td>
            </tr>
            <tr>
              <th>X3</th>
              <td>{person.x3}</td>
            </tr>
            <tr>
              <th>X4</th>
              <td>{person.x4}</td>
            </tr>
            <tr>
              <th>X5</th>
              <td>{person.x5}</td>
            </tr>
            <tr>
              <th>X6</th>
              <td>{person.x6}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{person.name}</td>
            </tr>
            <tr>
              <th>X8</th>
              <td>{person.x8}</td>
            </tr>
            <tr>
              <th>X9</th>
              <td>{person.x9}</td>
            </tr>
            <tr>
              <th>P1</th>
              <td>{person.p1}</td>
            </tr>
            <tr>
              <th>P2</th>
              <td>{person.p2}</td>
            </tr>
            <tr>
              <th>M1</th>
              <td>{person.m1}</td>
            </tr>
            <tr>
              <th>M2</th>
              <td>{person.m2}</td>
            </tr>
            <tr>
              <th>M3</th>
              <td>{person.m3}</td>
            </tr>
            <tr>
              <th>P0</th>
              <td>{person.p0}</td>
            </tr>
            <tr>
              <th>Q1</th>
              <td>{person.q1}</td>
            </tr>
            <tr>
              <th>Q2</th>
              <td>{person.q2}</td>
            </tr>
            <tr>
              <th>M0</th>
              <td>{person.m0}</td>
            </tr>
            <tr>
              <th>N1</th>
              <td>{person.n1}</td>
            </tr>
            <tr>
              <th>N2</th>
              <td>{person.n2}</td>
            </tr>
            <tr>
              <th>H1</th>
              <td>{person.h1}</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>{person.note}</td>
            </tr>
            <tr>
              <th>Z1</th>
              <td>{person.z1}</td>
            </tr>
            <tr>
              <th>Z2</th>
              <td>{person.z2}</td>
            </tr>
            <tr>
              <th>Z3</th>
              <td>{person.z3}</td>
            </tr>
            <tr>
              <th>LABEL</th>
              <td>{person.label}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPerson({ x1: person.x1 })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(person.x1)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Person
