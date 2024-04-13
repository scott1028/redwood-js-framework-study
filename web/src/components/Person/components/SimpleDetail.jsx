import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Person/PeopleCell'
import { truncate } from 'src/lib/formatters'

import {
  idTOLabel_x2,
  idTOLabel_x3,
  idTOLabel_x4,
  idTOLabel_x5,
  idTOLabel_q1,
  idTOLabel_q2,
  idTOLabel_n1,
  idTOLabel_n2,
} from '../PersonForm/PersonForm'

const DELETE_PERSON_MUTATION = gql`
  mutation DeletePersonMutation($x1: Int!) {
    deletePerson(x1: $x1) {
      x1
    }
  }
`

export const SimpleDetail = ({ person }) => {
  const people = [
    person,
    ...(person.maried1 ? [person.maried1] : []),
    ...(person.maried2 ? [person.maried2] : []),
    ...(person.maried3 ? [person.maried3] : []),
    // reindex data below
  ]
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>X2</th>
            <th>X3</th>
            <th>X4</th>
            <th>X5</th>
            <th>X6</th>
            <th>Name</th>
            <th>X8</th>
            <th>X9</th>
            <th>P1</th>
            <th>P2</th>
            <th>M1</th>
            <th>M2</th>
            <th>M3</th>
            <th>P0</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>M0</th>
            <th>N1</th>
            <th>N2</th>
            <th>NOTE</th>
            <th>Z1</th>
            <th>Z2</th>
            <th>Z3</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.x1}>
              <td>{person.x1}</td>
              <td>{idTOLabel_x2[person.x2]}</td>
              <td>{idTOLabel_x3[person.x3]}</td>
              <td>{idTOLabel_x4[person.x4]}</td>
              <td>{idTOLabel_x5[person.x5]}</td>
              <td>{person.x6}</td>
              <td>{person.name}</td>
              <td>{person.x8}</td>
              <td>{person.x9}</td>
              <td>{person.p1}</td>
              <td>{person.p2}</td>
              <td>{person.m1}</td>
              <td>{person.m2}</td>
              <td>{person.m3}</td>
              <td>{person.p0}</td>
              <td>{person.q1}</td>
              <td>{person.q2}</td>
              <td>{person.m0}</td>
              <td>{person.n1}</td>
              <td>{person.n2}</td>
              <td>{person.note}</td>
              <td>{person.z1}</td>
              <td>{person.z2}</td>
              <td>{person.z3}</td>
              <td>{person.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SimpleDetail
