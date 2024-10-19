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
  const [x3, setX3] = useState('9');
  const [x4, setX4] = useState('1');
  const [x6, setX6] = useState('');

  const peopleX2 = people.filter(person => +person.x2 === +x2 || (x2 === ''));
  const peopleX3 = peopleX2.filter(person => +person.x3 === +x3 || (x3 === ''));
  const peopleX4 = peopleX3.filter(person => +person.x4 === +x4 || (x4 === ''));
  const peopleX6 = peopleX4.filter(person => (+person.x6 === +x6) || (x6 === ''));
{/*
  const [x7, setX7] = useState('');
  peopleX6.sort((currPerson, nextPerson) => {
    if (+x7 !== +0) {
      return currPerson.name.localeCompare(nextPerson.name) ?? '';
    }
*/}
  const [checked, setChecked] = useState();
  peopleX6.sort((currPerson, nextPerson) => {
    if (checked) {
      return currPerson.name.localeCompare(nextPerson.name) ?? '';
    }
  });

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          資料過濾列表( {+peopleX6?.length ?? '-'} )
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
{/*
            {' 排序[1/0] : '}
          <input
            value={x7}
            onChange={e => setX7(e.target.value)}
          />
*/}
            {'　'}
          <input type="checkbox"
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
            {' 排序'}

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
                <td>-</td>
                <th width="80">父親</th>
                <th width="80">母親</th>
                <th width="80">繼承</th>
                <td width="25">屬</td>
                <td width="25">註</td>
                <td>-</td>
                <th width="80">婚配</th>
                <th width="80">婚配</th>
                <th width="80">婚主</th>
                <td width="25">屬</td>
                <td width="25">註</td>
                <td>-</td>
                <th width="350">事件摘要</th>
              </tr>
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
                  <td></td>
                  <td>{peopleMap[person.p1]?.name}</td>
                  <td>{peopleMap[person.p2]?.name}</td>
                  <td>{(person.p0 > 1) ?
                        peopleMap[person.p0]?.name : ''}</td>
                  <td>{person.q1}</td>
                  <td>{person.q2}</td>
                  <td></td>
                  <td>{peopleMap[person.m1]?.name}</td>
                  <td>{peopleMap[person.m2]?.name}</td>
                  <td>{peopleMap[person.m0]?.name}</td>
                  <td>{person.n1}</td>
                  <td>{person.n2}</td>
                  <td></td>
                  <th align='left'>{person.note}</th>
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
