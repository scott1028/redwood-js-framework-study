import { useState } from 'react';
import { styled } from '@mui/material/styles'
import { useQuery } from '@redwoodjs/web'
import { QUERY } from 'src/components/Person/PeopleTreeCell'
import { useScaffoldContext } from '../../layouts/ScaffoldLayout/contexts/optionContext'

const Table = styled('table', { shouldForwardProp: () => true })({
  '& td': {
    textAlign: 'center',
  },
})

const PeopleReport4Page = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  const peopleMap = Object.fromEntries(people.map(person => [person.x1, person]));
  const peopleZZ = people.filter((person) => (+person.z1 > 0));

  const [x2, setX2] = useState('');
  const [x3, setX3] = useState('');
  const [x4, setX4] = useState('');
  const [x6, setX6] = useState('');
  const [x7, setX7] = useState('');
  const [z1, setZ1] = useState('');

  const peopleZ1 = peopleZZ.filter(person => +person.z1 === +z1 || z1 === '');
  const peopleX2 = peopleZ1.filter(person => +person.x2 === +x2 || x2 === '');
  const peopleX3 = peopleX2.filter(person => +person.x3 === +x3 || x3 === '');
  const peopleX4 = peopleX3.filter(person => +person.x4 === +x4 || x4 === '');
  const peopleX6 = peopleX4.filter(person => +person.x6 === +x6 || x6 === '');

  peopleX6.sort((currPerson, nextPerson) => {
    if (+x7 !== 0) {
      return currPerson.name.localeCompare(nextPerson.name) ?? '';
    }
  });

  const map = {}
  peopleX6.forEach(person => {
    if (person.name in map) {
      map[person.name] += 1;
    } else {
      map[person.name] = 1;
    }
  });

  const nameKeys = Object.entries(map).filter(([name, count]) => {
    if (+x7 === 2)  return count > 1;
    else            return count > 0;
  }).map(([name]) => name);

  const peoplePP = peopleX6.filter(person => nameKeys.includes(person.name));
  let string = ''

  const [options] = useScaffoldContext()
  const {
    noGenBranchInReport: x3x4,
    noP1P2InReport: p1p2,
    noM1M2InReport: m1m2,
    noNoteInReport: note,
  } = options

  return (
    <>
    {'.選項：'}

    <label for="X2">{'　類別 '}</label>
    <select name="X2"
            id="X2"
            value={x2}
            onChange={e => setX2(e.target.value !== '*' ? e.target.value : '')}
    >
      <option value="*">*</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <label for="X3">{'　世代 '}</label>
    <select name="X3"
            id="X3"
            value={x3}
            onChange={e => setX3(e.target.value !== '*' ? e.target.value : '')}
    >
      <option value="*">*</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>

    <label for="X4">{'　房序 '}</label>
    <select name="X4"
            id="X4"
            value={x4}
            onChange={e => setX4(e.target.value !== '*' ? e.target.value : '')}
    >
      <option value="*">*</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>

    <label for="X6">{'　性別 '}</label>
    <select name="X6"
            id="X6"
            value={x6}
            onChange={e => setX6(e.target.value !== '*' ? e.target.value : '')}
    >
      <option value="*">*</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>

    <label for="X7">{'　處理 '}</label>
    <select name="X7            "
            id="X7"
            value={x7}
            onChange={e => setX7(e.target.value !== '*' ? e.target.value : '')}
    >
      <option value="*">{'0 -無-'}</option>
      <option value="1">{'1 排序'}</option>
      <option value="2">{'2 同名'}</option>
    </select>

    <label for="Z1">{'　塔 '}</label>
    <select name="Z1"
            id="Z1"
            value={z1}
            onChange={e => setZ1(e.target.value !== '*' ? e.target.value : '')}
    >
      <option value="*">*</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>

    {'　　筆數：'}{+peoplePP?.length ?? '-'}

    <Table border="1">
      <thead>
          <tr>
            <th width="45">項次</th>
            <td width="80">索引</td>
            <td width="25">類</td>
            <td width="25">世</td>
            <td width="25">房</td>
            <td width="25">bn</td>
            <td width="25">mf</td>
            <th width="70">名字</th>
            {+x7 !== 2 ? '' :
            <td width="80">群組</td> }
            <td>-</td>
            <td width="70">繼承</td>
            <td width="70">婚主</td>
            <td>-</td>
            <td width="35">塔</td>
            <td width="35">列</td>
            <td width="35">座</td>
            <th width="120">稱謂</th>
            <td width="35">B1</td>
          </tr>
      </thead>
      <tbody>
        {peoplePP.map((person, idx) => (
          <tr key={person.x1}>
            <th>{ idx + 1 }</th>
            <td>{person.x1}</td>
            <td>{person.x2}</td>
            <td>{person.x3}</td>
            <td>{person.x4}</td>
            <td>{person.x5}</td>
            <td>{person.x6}</td>
            <th>{person.name}</th>
            {+x7 !== 2 ? '' :
            <td>{person.name === string ? '"' : (string = person.name)}</td> }
            <td></td>
            <td>{person.p0 > 1 ? peopleMap[person.p0]?.name : ''}</td>
            <td>{person.m0 > 1 ? peopleMap[person.m0]?.name : ''}</td>
            <td></td>
            <td>{person.z1}</td>
            <td>{person.z2}</td>
            <td>{person.z3}</td>
            <th align="left">{person.label}</th>
            <td>{+person.b1 === 1 ? 'O' : '' }</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
  )
}

export default PeopleReport4Page
