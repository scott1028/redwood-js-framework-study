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
  const peopleX21 = people.filter((person) => (+person.x2 === 1))

  const peoplePP = peopleX21.filter((person) => (
    (+person.p1 > 0) && (peopleMap[person.p1]?.x6 !== 1) ||
    (+person.p2 > 0) && (peopleMap[person.p2]?.x6 !== 2) ))

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {'mxfLIST '}( {+peoplePP?.length ?? '-'} )
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
        <table>
            <tbody>
              <tr>
                <td width="65">{'說明 :'}</td>
                <td>{'為了偵別 P1 & P2 之性別對應是否正確;'}</td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </table>
          <table border="1">
            <tbody>
              <tr>
                <th width="45">項次</th>
                <td width="80">索引</td>
                <td width="25">類</td>
                <td width="25">世</td>
                <td width="25">房</td>
                <td width="25">bn</td>
                <td width="25">mf</td>
                <th width="70">名字</th>
                <td>-</td>
                <td width="80">索引</td>
                <td width="25">mf</td>
                <th width="70">父親</th>
                <td>-</td>
                <td width="80">索引</td>
                <td width="25">mf</td>
                <th width="70">母親</th>
                <td>-</td>
                <td width="70">繼承</td>
                <td width="25">屬</td>
                <td width="25">註</td>
              </tr>
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
                  <td></td>
                  <td>{person.p1}</td>
                  <td>{person.p1 > 1 ? peopleMap[person.p1]?.x6 : ''}</td>
                  <th>{person.p1 > 1 ? peopleMap[person.p1]?.name : ''}</th>
                  <td></td>
                  <td>{person.p2}</td>
                  <td>{person.p2 > 1 ? peopleMap[person.p2]?.x6 : ''}</td>
                  <th>{person.p2 > 1 ? peopleMap[person.p2]?.name : ''}</th>
                  <td></td>
                  <td>{person.p0 > 1 ? peopleMap[person.p0]?.name : ''}</td>
                  <td>{person.p0 > 1 ? peopleMap[person.p0]?.q1 : ''}</td>
                  <td>{person.p0 > 1 ? peopleMap[person.p0]?.q2 : ''}</td>
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
