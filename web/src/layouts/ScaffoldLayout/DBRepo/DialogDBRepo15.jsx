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
//const peopleNX = people.filter((person) => person.note !== null)
  const peoplePP = people.filter((person) => person.note?.slice(0,1) === ';')

  let keyM0 = ''

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {'m2LINK '}( {+peoplePP?.length ?? '-'} )
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
          <table border="1">
            <thead>
                <tr>
                  <td width="50">#</td>
                  <td width="80">X1</td>
                  <td width="30">X2</td>
                  <td width="30">X3</td>
                  <td width="30">X4</td>
                  <td width="30">X5</td>
                  <td width="30">X6</td>
                  <td width="70">NAME</td>
                  {/*
                  <td width="50">YYYY</td>
                  <td width="30">YY</td>
                  */}
                  <td width="80">P1</td>
                  <td width="80">P2</td>
                  <td width="80">P0</td>
                  <td width="30">Q1</td>
                  <td width="30">Q2</td>
                  <td width="80">M1</td>
                  <td width="80">M2</td>
                  {/*
                  <td width="80">M0</td>
                  <td width="30">N1</td>
                  <td width="30">N2</td>
                  */}
                  <td>-</td>
                  <td width="*">NOTE</td>
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
                  <td>{person.name}</td>
                  {/*
                  <td>{person.x8}</td>
                  <td>{person.x9}</td>
                  */}
                  <td>{peopleMap[person.p1]?.name}</td>
                  <td>{peopleMap[person.p2]?.name}</td>
                  <td>{peopleMap[person.p0]?.name}</td>
                  <td>{person.q1}</td>
                  <td>{person.q2}</td>
                  <td>{person.m1}</td>
                  <td>{peopleMap[person.m2]?.name}</td>
                  {/*
                  <td>{person.m0}</td>
                  <td>{person.n1}</td>
                  <td>{person.n2}</td>
                  */}
                  <td></td>
                  <td>{person.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table>
            <tbody>
              <p>修正內容：</p>
              {peoplePP.map((person, idx) => (
                <tr key={person.x1}>
                  {person.x1}{','}
                  {person.x2}{','}
                  {person.x3}{','}
                  {person.x4}{','}
                  {person.x5}{','}
                  {person.x6}{',"'}
                  {person.name}{'",'}
                  {','}
                  {','}
                  {','}
                  {','}
                  {','}
                  {','}
                  {','}
                  {','}
                  {person.m2}{','}
                  {','}
                  {','}
                  {',"('}
                  {person.note.slice(1)}{'m2)",'}
                  {','}
                  {','}
                  {','}
                  {','}
                </tr>
              ))}
              <p></p>
              {peoplePP.map((person, idx) => (
                <tr key={person.x1}>
                  {keyM0 = +person.note?.slice(1)}{','}
                  {peopleMap[keyM0]?.x2}{','}
                  {peopleMap[keyM0]?.x3}{','}
                  {peopleMap[keyM0]?.x4}{','}
                  {peopleMap[keyM0]?.x5}{','}
                  {peopleMap[keyM0]?.x6}{',"'}
                  {peopleMap[keyM0]?.name}{'",'}
                  {peopleMap[keyM0]?.x8}{','}
                  {peopleMap[keyM0]?.x9}{','}
                  {peopleMap[keyM0]?.p1}{','}
                  {peopleMap[keyM0]?.p2}{','}
                  {peopleMap[keyM0]?.p0}{','}
                  {peopleMap[keyM0]?.q1}{','}
                  {peopleMap[keyM0]?.q2}{','}
                  {peopleMap[keyM0]?.m1}{','}
                  {person.x1 +1}{','}
                  {','}
                  {','}
                  {','}
                  {peopleMap[keyM0]?.note}{','}
                  {peopleMap[keyM0]?.z1}{','}
                  {peopleMap[keyM0]?.z2}{','}
                  {peopleMap[keyM0]?.z3}{',"'}
                  {peopleMap[keyM0]?.label}{'",'}
                  {peopleMap[keyM0]?.b1}
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

{/*   補 parse-xlsx.ts 轉檔之不足 缺損 m2LINK()   */}

export default Dialog
