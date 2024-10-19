import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close'
import MuiDialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { useQuery } from '@redwoodjs/web'
import { QUERY } from 'src/components/Person/PeopleTreeCell'
import { useScaffoldContext } from '../../ScaffoldLayout/contexts/optionContext'

const BootstrapDialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& table td': {
    textAlign: 'center',
  },
}))

const Dialog = ({ open, handleClose }) => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
  const peopleMap = Object.fromEntries(people.map(person => [person.x1, person]));

  const [x2, setX2] = useState('1');
  const [x3, setX3] = useState('10');
  const [x4, setX4] = useState('');
  const [x6, setX6] = useState('');
  const [x7, setX7] = useState('');
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
{/*
  const peopleX2 = people.filter(person => +person.x2 === +x2 || (x2 === ''));
  const peopleX3 = peopleX2.filter(person => +person.x3 === +x3 || (x3 === ''));
  const peopleX4 = peopleX3.filter(person => +person.x4 === +x4 || (x4 === ''));
  const peopleX6 = peopleX4.filter(person => (+person.x6 === +x6) || (x6 === ''));
*/}
const peoplePP = people.filter(person => (
  (+person.x2 === +x2 || x2 === '') &&
  (+person.x3 === +x3 || x3 === '') &&
  (+person.x4 === +x4 || x4 === '') &&
  (+person.x6 === +x6 || x6 === '') &&
  (+person.q1 === +q1 || q1 === '') &&
  (+person.q2 === +q2 || q2 === '') &&
  (+person.n1 === +n1 || n1 === '') &&
  (+person.n2 === +n2 || n2 === '')
));

  peoplePP.sort((currPerson, nextPerson) => {
    if (+x7 !== 0) {
      return currPerson.name.localeCompare(nextPerson.name) ?? '';
    }
  });

  const map = {}
  peoplePP.forEach(person => {
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

  const outputPeople = peoplePP.filter(person => nameKeys.includes(person.name));
  let string = ''

  const [options] = useScaffoldContext()
  const {
  //noGenBranchInReport: x3x4,
    noP1P2InReport: p1p2,
    noM1M2InReport: m1m2,
    noNoteInReport: note,
    noUpDTimeInReport: dt,
  } = options

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          資料過濾列表( {+outputPeople?.length ?? '-'} )
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
            })}
          >
            {'close'}
            <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {/*
            {' 類別[1..3] : '}
          <input
            value={x2}
            onChange={e => setX2(e.target.value)}
          />
            {' 世代[1..12] : '}
          <input
            value={x3}
            onChange={e => setX3(e.target.value)}
          />
            {' 房序[1..6] : '}
          <input
            value={x4}
            onChange={e => setX4(e.target.value)}
          />
            {' 性別[1..2] : '}
          <input
            value={x6}
            onChange={e => setX6(e.target.value)}
          />
            {' 排序[1/0] : '}
          <input
            value={x7}
            onChange={e => setX7(e.target.value)}
          />
          {'　' }
          <input type="checkbox" x61 = {setX61}
            onClick = { () => setX61   (  !x61) } /> {'男性　'}
          <input type="checkbox" x62 = {setX62}
            onClick = { () => setX62   (  !x62) } /> {'女性　'}
          <input type="checkbox" x71 = {setX71}
            onClick = { () => setX71   (  !x71) } /> {'排序　'}
          */}

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
          <select name="X7"
                  id="X7"
                  value={x7}
                  onChange={e => setX7(e.target.value !== '*' ? e.target.value : '')}
          >
            <option value="*">{'0 -無-'}</option>
            <option value="1">{'1 排序'}</option>
            <option value="2">{'2 同名'}</option>
          </select>

          <label for="Q1">{'　繼屬 '}</label>
          <select name="Q1"
                  id="Q1"
                  value={q1}
                  onChange={e => setQ1(e.target.value !== '*' ? e.target.value : '')}
          >
            <option value="*">*</option>
            <option value="1">1 嫡生</option>
            <option value="2">2 入嗣</option>
            <option value="3">3 承鼎</option>
            <option value="4">4 託孤</option>
            <option value="5">5 收養</option>
          </select>

          <label for="Q2">{'　繼註 '}</label>
          <select name="Q2"
                  id="Q2"
                  value={q2}
                  onChange={e => setQ2(e.target.value !== '*' ? e.target.value : '')}
          >
            <option value="*">*</option>
            <option value="1">1 失婚</option>
            <option value="2">2 出嗣</option>
            <option value="3">3 失蹤</option>
            <option value="4">4 幼亡</option>
            <option value="5">5 出養</option>
          </select>

          <label for="N1">{'　婚屬 '}</label>
          <select name="N1"
                  id="N1"
                  value={n1}
                  onChange={e => setN1(e.target.value !== '*' ? e.target.value : '')}
          >
            <option value="*">*</option>
            <option value="1">1 入嫁</option>
            <option value="2">2 出嫁</option>
            <option value="3">3 入贅</option>
            <option value="4">4 出贅</option>
            <option value="5">5 平婚</option>
          </select>

          <label for="QN">{'　婚註 '}</label>
          <select name="N2"
                  id="N2"
                  value={n2}
                  onChange={e => setN2(e.target.value !== '*' ? e.target.value : '')}
          >
            <option value="*">*</option>
            <option value="1">1 離婚</option>
            <option value="2">2 改嫁</option>
            <option value="3">3 失蹤</option>
            <option value="4">4 早逝</option>
          </select>

          <table border="1">
            <tbody>
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
                {note ? '' :
                <td>-</td> }
                {note ? '' :
                <th width="350">事件摘要</th> }
                {dt ? '' :
                <td>-</td> }
                {dt ? '' :
                <td width="110">更新日期</td> }
              </tr>
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
                  {note ? '' :
                  <td></td> }
                  {note ? '' :
                  <th align='left'>{person.note}</th> }
                  {dt ? '' :
                  <td></td> }
                  {dt ? '' :
                  <td>{person.dt !== null ? person.dt.slice(0,10) : ''}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
        {/* <Button onClick={handleClose}>關閉視窗</Button> */}
        </DialogActions>
      </BootstrapDialog>
    </>
  )
}

export default Dialog
