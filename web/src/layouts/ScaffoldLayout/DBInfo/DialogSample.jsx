import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import MuiDialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
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
  //window.people = people;
  const map = {}
  people.forEach(person => {
  //if (person.x2 !== 1) return;
    if (person.name in map) {
      map[person.name] += 1;
    } else {
      map[person.name] = 1;
    }
  });

  const nameKeys = Object.keys(map);
  const nameKeySorted = Object.keys(map);
  nameKeySorted.sort();

  //window.map = map;
  //window.nameKeys = nameKeys;
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          名字集合
        </DialogTitle>
        <DialogContent dividers>
          (1)
          <pre>{ JSON.stringify(map) }</pre>
          (2)
          <pre>{ JSON.stringify(nameKeys) }</pre>
          (3)
          <pre>{ JSON.stringify(nameKeySorted) }</pre>
          (&)
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>關閉視窗</Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  )
}

export default Dialog
