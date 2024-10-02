import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
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
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          同名宗親總表
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
            <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <table border="1">
            <tbody>

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
                <td width="70">父親</td>
                <td width="70">母親</td>
                <td>-</td>
                <td width="80">繼承</td>
                <td width="50">屬性</td>
              </tr>

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
          </table>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>關閉視窗</Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  )
}

export default Dialog
