import { styled } from '@mui/material/styles'

import { useQuery } from '@redwoodjs/web'
import { QUERY } from 'src/components/Person/PeopleTreeCell'

const Table = styled('table', { shouldForwardProp: () => true })({
  '& td': {
    textAlign: 'center',
  },
})

const PeopleReport3Page = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  const peopleX21 = people.filter((person) => person.x2 === 1)
  const map = {}
  peopleX21.forEach(person => {
    if (person.name in map) {
      map[person.name] += 1;
    } else {
      map[person.name] = 1;
    }
  });
  const nameKeys = Object.entries(map).filter(([name, count]) => {
    return count > 1;
  }).map(([name]) => name);
  const outputPeople = peopleX21.filter(person => nameKeys.includes(person.name));
  outputPeople.sort((currPerson, nextPerson) => {
    return currPerson.name.localeCompare(nextPerson.name);
  });

  const peopleMap = Object.fromEntries(people.map(person => [person.x1, person]));

  let string = ''

  return (
    <Table border="1">
      <thead>
        <tr>
          <th width="50">項次</th>
          <td width="80">群組</td>
          <td width="30">世</td>
          <td width="30">房</td>
          <td width="30">bn</td>
          <td width="30">mf</td>
          <th width="80">名字</th>
          <th width="80">索引</th>
          <td>-</td>
          <td width="80">父親</td>
          <td width="80">母親</td>
          <td>-</td>
          <td width="80">繼承</td>
          <td width="50">屬性</td>
        </tr>
      </thead>
      <tbody>
        {outputPeople.map((person, idx) => (
          <tr key={person.x1}>
            <th>{ idx + 1 }</th>
            <td>{person.name === string ? '"' : (string = person.name)}</td>
            <td>{person.x3}</td>
            <td>{person.x4}</td>
            <td>{person.x5}</td>
            <td>{person.x6}</td>
            <th>{person.name}</th>
            <th>{person.x1}</th>
            <td></td>
            <td>{peopleMap[person.p1]?.name}</td>
            <td>{peopleMap[person.p2]?.name}</td>
            <td></td>
            <td>{(person.p0 > 1) ? peopleMap[person.p0]?.name : ''}</td>
            <td>{ person.q1 }</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default PeopleReport3Page
