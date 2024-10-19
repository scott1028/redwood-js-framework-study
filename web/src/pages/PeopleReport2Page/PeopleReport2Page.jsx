import { styled } from '@mui/material/styles'
import { useQuery } from '@redwoodjs/web'
import { QUERY } from 'src/components/Person/PeopleTreeCell'
import { useScaffoldContext } from '../../layouts/ScaffoldLayout/contexts/optionContext'

const Table = styled('table', { shouldForwardProp: () => true })({
  '& td': {
    textAlign: 'center',
  },
})

const PeopleReport2Page = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  const peopleX21 = people.filter((person) => person.x2 === 2)
  const peopleMap = Object.fromEntries(people.map(person => [person.x1, person]));

  const [options] = useScaffoldContext()
  const {
    noGenBranchInReport: x3x4,
    noP1P2InReport: p1p2,
    noM1M2InReport: m1m2,
    noNoteInReport: note,
  } = options

  return (
    <Table border="1">
      <thead>
          <tr>
            <th width="50">項次</th>
            <td width="80">索引</td>
            {x3x4 ? '' :
            <td width="25">世</td> }
            {x3x4 ? '' :
            <td width="25">房</td> }
            <td width="25">mf</td>
            <th width="70">名字</th>
            <td>-</td>
            <td width="80">索引</td>
            <td width="70">婚主</td>
            <td width="25">屬</td>
            <td width="25">註</td>
            {note ? '' :
            <th width="300">備註</th> }
          </tr>
      </thead>
      <tbody>
        {peopleX21.map((person, idx) => (
          <tr key={person.x1}>
            <th>{ idx + 1 }</th>
            <td>{person.x1}</td>
            {x3x4 ? '' :
            <td>{person.x3}</td> }
            {x3x4 ? '' :
            <td>{person.x4}</td> }
            <td>{person.x6}</td>
            <th>{person.name}</th>
            <td></td>
            <td>{person.m0}</td>
            <td>{peopleMap[person.m0]?.name}</td>
            <td>{person.n1}</td>
            <td>{person.n2}</td>
            {note ? '' :
            <th align='left'>{person.note}</th> }
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default PeopleReport2Page
