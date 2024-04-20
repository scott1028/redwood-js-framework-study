import TableHeaders from 'src/components/Person/People/TableHeaders'

import {
  idTOLabel_x2,
  idTOLabel_x3,
  idTOLabel_x4,
  idTOLabel_x6,
  // idTOLabel_q1,
  // idTOLabel_q2,
  // idTOLabel_n1,
  // idTOLabel_n2,
} from '../PersonForm/PersonForm'

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
            <TableHeaders />
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
