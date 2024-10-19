
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

const PeopleReport5Page = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  const peopleMap = Object.fromEntries(people.map(person => [person.x1, person]));
  const peopleDT = people.filter((person) => (person.dt !== null));

//window.people = people
//F12: > windows.people @chrome//

  const [x2, setX2] = useState('');
  const [x3, setX3] = useState('');
  const [x4, setX4] = useState('');
  const [x6, setX6] = useState('');
  const [x7, setX7] = useState('');
{/*
  const [x61, setX61] = useState(false);
  const [x62, setX62] = useState(false);
  const [x71, setX71] = useState(false);
  const [x77, setX77] = useState(false);
  const x6 = x61 & !x62 ? 1 : x62 & !x61 ? 2 : ''

  const [checked, setChecked] = useState(true);
  <input type="checkbox" checked={checked} onClick={() => setChecked(!checked)} />
*/}
  const peopleX2 = peopleDT.filter(person => +person.x2 === +x2 || (x2 === ''));
  const peopleX3 = peopleX2.filter(person => +person.x3 === +x3 || (x3 === ''));
  const peopleX4 = peopleX3.filter(person => +person.x4 === +x4 || (x4 === ''));
  const peopleX6 = peopleX4.filter(person => (+person.x6 === +x6) || (x6 === ''));

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
    if (+x7 === 2) return count > 1;
    else           return count > 0;
  }).map(([name]) => name);

  const outputPeople = peopleX6.filter(person => nameKeys.includes(person.name));
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
{/*
      <table border = "0">
        <tbody>
          <tr>
            <td>類別 [0..3]</td>
            <td>世代 [1..12]</td>
            <td>房序 [1..6]</td>
            <td align = "center">資料 ({peopleX6.length ?? ''})</td>
          </tr>
          <tr>
            <td><input value={x2} onChange={e => setX2(e.target.value)} /></td>
            <td><input value={x3} onChange={e => setX3(e.target.value)} /></td>
            <td><input value={x4} onChange={e => setX4(e.target.value)} /></td>
            <td>{'　'}
              <input type="checkbox" x61 = {setX61} onClick = {() => setX61 (!x61) } /> {'男　'}
              <input type="checkbox" x62 = {setX62} onClick = {() => setX62 (!x62) } /> {'女　'}
              <input type="checkbox" x71 = {setX71} onClick = {() => setX71 (!x71) } /> {'排序'}
            </td>
          </tr>
        </tbody>
      </table>
*/}
      {'.選項：'}

        <label  for="X2">{'　類別 '}</label>
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

        <label  for="X3">{'　世代 '}</label>
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

        <label  for="X4">{'　房序 '}</label>
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

        <label  for="X6">{'　性別 '}</label>
        <select name="X6"
                id="X6"
                value={x6}
                onChange={e => setX6(e.target.value !== '*' ? e.target.value : '')}
        >
          <option value="*">*</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <label  for="X7">{'　處理 '}</label>
        <select name="X7"
                id="X7"
                value={x7}
                onChange={e => setX7(e.target.value !== '*' ? e.target.value : '')}
        >
          <option value="*">{'0 -無-'}</option>
          <option value="1">{'1 排序'}</option>
          <option value="2">{'2 同名'}</option>
        </select>

      {'　　筆數：'}{+outputPeople?.length ?? '-'}

      <Table border = "1">
        <thead>
              <tr>
                <th width="40">項次</th>
                <td width="80">索引</td>
                <td width="25">類</td>
                <td width="25">世</td>
                <td width="25">房</td>
                <td width="25">bn</td>
                <td width="25">mf</td>
                <th width="80">名字</th>
                {+x7 !== 2 ? '' :
                <td width="80">群組</td> }
                <td>-</td>
                {p1p2 ? '' :
                <th width="80">父親</th> }
                {p1p2 ? '' :
                <th width="80">母親</th> }
                <th width="80">繼承</th>
                <td width="25">屬</td>
                <td width="25">註</td>
                <td>-</td>
                {m1m2 ? '' :
                <th width="80">婚配</th> }
                {m1m2 ? '' :
                <th width="80">婚配</th> }
                <th width="80">婚主</th>
                <td width="25">屬</td>
                <td width="25">註</td>
                <td>-</td>
                {note ? '' :
                <th width="350">事件摘要</th> }
                <td width="110">更新日期</td>
              </tr>
    </thead>
    <tbody>
          {outputPeople.map((person, idx) => (
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
                {p1p2 ? '' :
                <td>{peopleMap[person.p1]?.name}</td> }
                {p1p2 ? '' :
                <td>{peopleMap[person.p2]?.name}</td> }
                <td>{(person.p0 > 1) ?
                      peopleMap[person.p0]?.name : ''}</td>
                <td>{person.q1}</td>
                <td>{person.q2}</td>
                <td></td>
                {m1m2 ? '' :
                <td>{peopleMap[person.m1]?.name}</td> }
                {m1m2 ? '' :
                <td>{peopleMap[person.m2]?.name}</td> }
                <td>{peopleMap[person.m0]?.name}</td>
                <td>{person.n1}</td>
                <td>{person.n2}</td>
                <td></td>
                {note ? '' :
                <th align='left'>{person.note}</th> }
                <td>{person.dt !== null ? person.dt.slice(0,10) :''}</td>

                {/*  person.dt ?? ----> 2024-10-10T17:14:01.146Z
                st str = 'The quick brown fox jumps over the lazy dog.';

                sole.log(str.slice(31));
                Expected output: "the lazy dog."

                sole.log(str.slice(4, 19));
                Expected output: "quick brown fox"

                sole.log(str.slice(-4));
                Expected output: "dog."

                sole.log(str.slice(-9, -5));
                Expected output: "lazy"
                */}

              </tr>
            ))
          }
        </tbody>
    </Table>
    </>
  )
}

export default PeopleReport5Page
