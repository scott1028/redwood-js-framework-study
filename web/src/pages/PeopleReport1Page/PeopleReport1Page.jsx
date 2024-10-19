import { styled } from '@mui/material/styles'
import { useQuery } from '@redwoodjs/web'
import { QUERY } from 'src/components/Person/PeopleTreeCell'
import { useScaffoldContext } from '../../layouts/ScaffoldLayout/contexts/optionContext'

const Table = styled('table', { shouldForwardProp: () => true })({
  '& td': {
    textAlign: 'center',
  },
})

const PeopleReport1Page = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  const peopleX21 = people.filter((person) => person.x2 === 1)
  const peopleMap = Object.fromEntries(people.map(person => [person.x1, person]));

{/*
    {
      key: 'noGenBranchInReport',
      label: '不顯示(世代房序)',
      category: 'dbInfoReporter',
    },
    {
      key: 'noP1P2InReport',
      label: '不顯示(父母欄位)',
      category: 'dbInfoReporter',
    },
    {
      key: 'noM1M2InReport',
      label: '不顯示(婚配欄位)',
      category: 'dbInfoReporter',
    },
    {
      key: 'noNoteInReport',
      label: '不顯示(備註欄位)',
      category: 'dbInfoReporter',
    },
*/}
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
            <td width="25">bn</td>
            <td width="25">mf</td>
            <th width="70">名字</th>
            {p1p2 ? '' :
            <td width="70">父親</td> }
            {p1p2 ? '' :
            <td width="70">母親</td> }
            <td width="70">繼承</td>
            <td width="25">屬</td>
            <td width="25">註</td>
            {note ? '' :
            <th width="300">備註</th> }
          </tr>
        </thead>
      {peopleX21.map((person, idx) => (
        <tbody>
          <tr key={person.x1}>
            <th>{ idx + 1 }</th>
            <td>{person.x1}</td>
            {x3x4 ? '' :
            <td>{person.x3}</td> }
            {x3x4 ? '' :
            <td>{person.x4}</td> }
            <td>{person.x5}</td>
            <td>{person.x6}</td>
            <th>{person.name}</th>
            {p1p2 ? '' :
            <td>{peopleMap[person.p1]?.name}</td> }
            {p1p2 ? '' :
            <td>{peopleMap[person.p2]?.name}</td> }
            {/* (person.p0 > 1) 為了不要印出 (x1=1).name */}
            <td>{(person.p0 > 1) ? peopleMap[person.p0]?.name : ''}</td>
            <td>{person.q1}</td>
            <td>{person.q2}</td>
            {note ? '' :
            <th align='left'>{person.note}</th> }
          </tr>
        </tbody>
      ))}
    </Table>
  )
}

export default PeopleReport1Page
