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
//const peopleX21 = people.filter((person) => person.x2 === 1)

  const [x1, setX1] = useState('');
  //    const me = people.find(person => person.x1 === +x1) ?? {};
  const personG5 = people.find(person => person.x1 === +x1) ?? {};
  let   gn = personG5.x3

  const personG4 = people.find(person => person.x1 === +personG5.p0) ?? {};
  const personG3 = people.find(person => person.x1 === +personG4.p0) ?? {};
  const personG2 = people.find(person => person.x1 === +personG3.p0) ?? {};
  const personG1 = people.find(person => person.x1 === +personG2.p0) ?? {};

  const stringG = ['高祖','曾祖','祖輩','父輩','==','子輩']
  const childrenG0 = people.filter(person => +person.x1 === +personG1.x1);
  const childrenG1 = people.filter(person => +person.p0 === +personG2.p0);
  const childrenG2 = people.filter(person => +person.p0 === +personG3.p0);
  const childrenG3 = people.filter(person => +person.p0 === +personG4.p0);
  const childrenG4 = people.filter(person => +person.p0 === +personG5.p0);
  const childrenG5 = people.filter(person => +person.p0 === +personG5.x1);

  const output = [
    ...childrenG0,
    ...childrenG1,
    ...childrenG2,
    ...childrenG3,
    ...childrenG4,
    ...childrenG5,
  ];

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          索引查詢直系五代枝葉
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
            {'查詢索引 ----> '}
          <input
            value={x1}
            onChange={e => setX1(e.target.value)}
          />
          <table border="1">
            <tbody>
            <tr>
                <td width="40">項次</td>
                <th width="50">輩份</th>
                <td width="10"></td>
                <td width="75">索引</td>
                <td width="25">bn</td>
                <td width="25">mf</td>
                <th width="75">名字</th>
                <th width="75">婚配</th>
                <th width="75">婚配</th>
                <td>-</td>
                <td width="75">父親</td>
                <td width="75">母親</td>
                <td width="75">繼承</td>
                <td>-</td>
                <td width="*">備註</td>
              </tr>
              {
                output.map((person, idx) => (
                  <tr key={person.x1}>
                    <td>{idx + 1}</td>
                    <th>{stringG[person.x3 - gn + 4]}</th>
                    <td>
                        {personG1.x1 === person.x1 ? '!' : ''}
                        {personG2.x1 === person.x1 ? '!' : ''}
                        {personG3.x1 === person.x1 ? '!' : ''}
                        {personG4.x1 === person.x1 ? '!' : ''}
                        {personG5.x1 === person.x1 ? '!' : ''}
                    </td>
                    <td>{person.x1   ?? ''}</td>
                    <td>{person.x5   ?? ''}</td>
                    <td>{person.x6   ?? ''}</td>
                    <th>{person.name ?? ''}</th>
                    <th>{peopleMap[person.m1]?.name}</th>
                    <th>{peopleMap[person.m2]?.name}</th>
                    <td></td>
                    <td>{peopleMap[person.p1]?.name}</td>
                    <td>{peopleMap[person.p2]?.name}</td>
                    <td>{(person.p0 > 1) ? peopleMap[person.p0]?.name : ''}</td>
                    <td></td>
                    <td>{person.note ?? ''}</td>
                  </tr>
                ))
              }
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
