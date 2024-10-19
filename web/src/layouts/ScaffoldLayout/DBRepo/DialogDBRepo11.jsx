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
import { useScaffoldContext } from '../contexts/optionContext'

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
  const peopleX81 = people.filter((person) => (person.x8 !== '') && (+person.x2 > 0 ))

  const [x2, setX2] = useState('');
  const [x3, setX3] = useState('');
  const [x4, setX4] = useState('');
  const [x6, setX6] = useState('');
  const [x7, setX7] = useState('');

  const peopleX2 = peopleX81.filter(person => +person.x2 === +x2 || (x2 === ''));
  const peopleX3 = peopleX2.filter (person => +person.x3 === +x3 || (x3 === ''));
  const peopleX4 = peopleX3.filter (person => +person.x4 === +x4 || (x4 === ''));
  const peopleX6 = peopleX4.filter (person => +person.x6 === +x6 || (x6 === ''));

  peopleX6.sort((currPerson, nextPerson) => {
    if (+x7 === 3) { return currPerson.name.localeCompare(nextPerson.name) ?? ''; }
    if (+x7 === 1) { return currPerson.x8 - nextPerson.x8; }
    if (+x7 === 2) { return nextPerson.x8 - currPerson.x8; }
  });

  const [options] = useScaffoldContext()
  const {
    noGenBranchInReport: x3x4,
    noP1P2InReport: p1p2,
    noM1M2InReport: m1m2,
    noNoteInReport: note,
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
          宗親出生列表( {+peopleX6?.length ?? '-'} )
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

          {'.選項：'}

          <label for="X2">{'　類別 '}</label>
          <select name="X2"
                  id="X2"
                  value={x2}
                  onChange={e => setX2(e.target.value !== '*' ? e.target.value : '')}
          >
            <option value="*">*</option>
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
            <option value="1">{'1 出生年序'}</option>
            <option value="2">{'2 出生反序'}</option>
            <option value="3">{'3 名字排序'}</option>
          </select>

          <table border="1">
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
                <th width="80">出生</th>
                <td width="70">繼承</td>
                <td width="25">屬</td>
                <td width="25">註</td>
                <td width="70">婚主</td>
                <td width="25">屬</td>
                <td width="25">註</td>
                {note ? '' :
                <th width="300">備註</th> }
              </tr>
            </thead>
            <tbody>
              {peopleX6.map((person, idx) => (
                <tr key={person.x1}>
                  <th>{ idx + 1 }</th>
                  <td>{person.x1}</td>
                  <td>{person.x2}</td>
                  <td>{person.x3}</td>
                  <td>{person.x4}</td>
                  <td>{person.x5}</td>
                  <td>{person.x6}</td>
                  <th>{person.name}</th>
                  <th>{person.x8}</th>
                  <td>{(person.p0 > 1) ? peopleMap[person.p0]?.name : ''}</td>
                  <td>{ person.q1 }</td>
                  <td>{ person.q2 }</td>
                  <td>{(person.m0 > 1) ? peopleMap[person.m0]?.name : ''}</td>
                  <td>{ person.n1 }</td>
                  <td>{ person.n2 }</td>
                  {note ? '' :
                  <th align='left'>{person.note}</th> }
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
