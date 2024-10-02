import { styled } from '@mui/material/styles'

import { useQuery } from '@redwoodjs/web'
import { QUERY } from 'src/components/Person/PeopleTreeCell'

const Table = styled('table', { shouldForwardProp: () => true })({
  '& td': {
    textAlign: 'center',
  },
})

const PeopleReport2Page = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  const peopleX21 = people.filter((person) => person.x2 === 2)
  const peopleMap = Object.fromEntries(people.map(person => [person.x1, person]));

  return (
    <Table border="1">
      <thead>
        <tr>
          <th width="50">項次</th>
          <td width="30">世</td>
          <td width="30">房</td>
          <td width="30">mf</td>
          <th width="80">名字</th>
          <th width="80">索引</th>
          <td>-</td>
          <td width="80">索引</td>
          <td width="80">婚主</td>
          <td width="50">屬性</td>
        </tr>
      </thead>
      <tbody>
        {peopleX21.map((person, idx) => (
          <tr key={person.x1}>
            <th>{ idx + 1 }</th>
            <td>{person.x3}</td>
            <td>{person.x4}</td>
            <td>{person.x6}</td>
            <th>{person.name}</th>
            <th>{person.x1}</th>
            <td></td>
            <td>{person.m0}</td>
            <td>{peopleMap[person.m0]?.name}</td>
            <td>{person.n1}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default PeopleReport2Page
