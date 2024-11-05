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
//const peoplePP = people.filter((person) => person.note !== null)
  const peoplePP = people.filter((person) => person.note?.slice(0,1) === '#')

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
          {'## LIST ... '}( {+peoplePP?.length ?? '-'} )
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
                  <td>-</td>
                  <td width="70">P0</td>
                  <td width="70">M0</td>
                  <td>-</td>
                  <td width="30">Z1</td>
                  <td width="30">Z2</td>
                  <td width="30">Z3</td>
                  <td width="110">LABEL</td>
                  <td width="30">B1</td>
                  <td>-</td>
                  <th>NOTE</th>
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
                  <td></td>
                  <td>{peopleMap[person.p0]?.name}</td>
                  <td>{peopleMap[person.m0]?.name}</td>
                  <td></td>
                  <td>{person.z1}</td>
                  <td>{person.z2}</td>
                  <td>{person.z3}</td>
                  <td>{person.label}</td>
                  <td>{person.b1}</td>
                  <td></td>
                  <th align="left">{person.note}</th>
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
                  {person.x8}{','}
                  {person.x9}{','}
                  {person.p1}{','}
                  {person.p2}{','}
                  {person.p0}{','}
                  {person.q1}{','}
                  {person.q2}{','}
                  {person.m1}{','}
                  {person.m2}{','}
                  {person.m0}{','}
                  {person.n1}{','}
                  {person.n2}{',"'}
                  {person.note.slice(1)}{'",'}
                  {','}
                  {','}
                  {','}
                  {','}
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

{/*   補 parse-xlsx.ts 轉檔之不足 缺損 ##LIST ...  */}

export default Dialog
