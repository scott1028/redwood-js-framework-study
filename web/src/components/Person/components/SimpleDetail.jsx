import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Person/PeopleCell'
import { truncate } from 'src/lib/formatters'

import {
  idTOLabel_x2,
  idTOLabel_x3,
  idTOLabel_x4,
  idTOLabel_x6,
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
            <th>1索引</th>
            <th>2類別</th>
            <th>3世代</th>
            <th>4房脈</th>
            <th>5排行</th>
            <th>6性別</th>
            <th>7名號</th>
            <th>8出生</th>
            <th>9享年</th>
            <th>10生父</th>
            <th>11生母</th>
            <th>12婚配</th>
            <th>13婚配</th>
            <th>14婚配</th>
            <th>15繼承</th>
            <th>16屬性</th>
            <th>17註記</th>
            <th>18婚主</th>
            <th>19屬性</th>
            <th>20註記</th>
            <th>21備註</th>
            <th>22塔號</th>
            <th>23列號</th>
            <th>24座號</th>
            <th>25稱謂</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.x1}>
              <td>{person.x1}</td>
              <td>{idTOLabel_x2[person.x2]}</td>
              <td>{idTOLabel_x3[person.x3]}</td>
              <td>{idTOLabel_x4[person.x4]}</td>
              <td>{person.x5}</td>
              <td>{idTOLabel_x6[person.x6]}</td>
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
