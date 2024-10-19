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
  const peopleP02 = people.filter((person) => person.m1 && person.m2)
  const peopleMap = Object.fromEntries(people.map(person => [person.x1, person]));

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
          {'m2LIST '}( {+peopleP02?.length ?? '-'} )
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
            <tbody>
            <tr>
                <th width="45">項次</th>
                <td width="80">索引</td>
                <td width="25">類</td>
                {x3x4 ? '' :
                <td width="25">世</td> }
                {x3x4 ? '' :
                <td width="25">房</td> }
                <td width="25">bn</td>
                <td width="25">mf</td>
                <th width="70">名字</th>
                <td>-</td>
                <td width="80">索引</td>
                <th width="70">婚配</th>
                <td width="80">索引</td>
                <th width="70">婚配</th>
                {note ? '' :
                <th width="300">備註</th> }
              </tr>
              {peopleP02.map((person, idx) => (
                <tr key={person.x1}>
                  <th>{ idx + 1 }</th>
                  <td>{person.x1}</td>
                  <td>{person.x2}</td>
                  {x3x4 ? '' :
                  <td>{person.x3}</td> }
                  {x3x4 ? '' :
                  <td>{person.x4}</td> }
                  <td>{person.x5}</td>
                  <td>{person.x6}</td>
                  <th>{person.name}</th>
                  <td>-</td>
                  <td>{person.m1}</td>
                  <th>{person.m1 > 1 ? peopleMap[person.m1]?.name : ''}</th>
                  <td>{person.m2}</td>
                  <th>{person.m2 > 1 ? peopleMap[person.m2]?.name : ''}</th>
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
