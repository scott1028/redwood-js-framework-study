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
  const peopleX21 = people.filter((person) => person.x2 === 1)

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
          宗親索引總表( {+peopleX21?.length ?? '-'} )
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
                {x3x4 ? '' :
                <td width="25">世</td> }
                {x3x4 ? '' :
                <td width="25">房</td> }
                <td width="25">bn</td>
                <td width="25">mf</td>
                <th width="70">名字</th>
                {p1p2 ? '' :
                <td width="70">父親</td> }
                {p1p2 ? '' :
                <td width="70">母親</td> }
                <td width="70">繼承</td>
                <td width="25">屬</td>
                <td width="25">註</td>
                {note ? '' :
                <th width="300">備註</th> }
              </tr>
              {peopleX21.map((person, idx) => (
                <tr key={person.x1}>
                  <th>{ idx + 1 }</th>
                  <td>{person.x1}</td>
                  {x3x4 ? '' :
                  <td>{person.x3}</td> }
                  {x3x4 ? '' :
                  <td>{person.x4}</td> }
                  <td>{person.x5}</td>
                  <td>{person.x6}</td>
                  <th>{person.name}</th>
                  {p1p2 ? '' :
                  <td>{peopleMap[person.p1]?.name}</td> }
                  {p1p2 ? '' :
                  <td>{peopleMap[person.p2]?.name}</td> }
                  <td>{(person.p0 > 1) ? peopleMap[person.p0]?.name : ''}</td>
                  <td>{person.q1}</td>
                  <td>{person.q2}</td>
                  {note ? '' :
                  <th align='left'>{person.note}</th> }
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
        {/*  <Button onClick={handleClose}>關閉視窗</Button> */}
        </DialogActions>
      </BootstrapDialog>
    </>
  )
}

export default Dialog
