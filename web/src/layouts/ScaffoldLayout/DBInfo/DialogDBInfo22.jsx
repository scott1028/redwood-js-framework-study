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
  let count_111_gen = Array(15).fill(0)
  let count_112_gen = Array(15).fill(0)
  let count_B10_gen = Array(15).fill(0)
  let count_B11_gen = Array(15).fill(0)
  let count_sum_gen = Array(15).fill(0)
  let count_sum_111 = 0
  let count_sum_112 = 0
  let count_sum_B10 = 0
  let count_sum_B11 = 0
  let count_sum_all = 0
  people.forEach((person) => {
    if (person.z1 == 4)
    {
      if (person.x6 == 1) {
        count_111_gen[person.x3] += 1
        count_sum_gen[person.x3] += 1
        count_sum_111 += 1
      }
      if (person.x6 == 2) {
        count_112_gen[person.x3] += 1
        count_sum_gen[person.x3] += 1
        count_sum_112 += 1
      }
      if (person.b1 == 1) {
        count_B11_gen[person.x3] += 1
        count_sum_B11 += 1
      }
      else {
        count_B10_gen[person.x3] += 1
        count_sum_B10 += 1
      }
    }
  })
  count_sum_all = count_sum_111 + count_sum_112

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          世代祿位表徵T4
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
                <th width="50">世代</th>
                <th width="50">2</th>
                <th width="50">3</th>
                <th width="50">4</th>
                <th width="50">5</th>
                <th width="50">6</th>
                <th width="50">7</th>
                <th width="50">8</th>
                <th width="50">9</th>
                <th width="50">10</th>
                <th width="50">11</th>
                <th width="50">合計</th>
              </tr>
              <tr>
                <th></th>
                <th>仕字</th>
                <th>添字</th>
                <th>江字</th>
                <th>乾字</th>
                <th>坤字</th>
                <th>寬字</th>
                <th>盛字</th>
                <th>永字</th>
                <th>和字</th>
                <th>發字</th>
                <th>{count_sum_all}</th>
              </tr>
              <tr>
                <th>仙公</th>
                {Array.from({ length: 10 }).map((_, idx) => (
                <td key={idx}>{count_111_gen[idx + 2]}</td>
                ))}
                <td>{count_sum_111}</td>
              </tr>
              <tr>
                <th>仙婆</th>
                {Array.from({ length: 10 }).map((_, idx) => (
                <td key={idx}>{count_112_gen[idx + 2]}</td>
                ))}
                <td>{count_sum_112}</td>
              </tr>
              <tr>
                <th>合計</th>
                {Array.from({ length: 10 }).map((_, idx) => (
                <th key={idx}>{count_sum_gen[idx + 2]}</th>
                ))}
                <td>-</td>
              </tr>
              <p></p>
              <tr>
                <th>土</th>
                {Array.from({ length: 10 }).map((_, idx) => (
                <td key={idx}>{count_B10_gen[idx + 2]}</td>
                ))}
                <td>{count_sum_B10}</td>
              </tr>
              <tr>
                <th>火</th>
                {Array.from({ length: 10 }).map((_, idx) => (
                <td key={idx}>{count_B11_gen[idx + 2]}</td>
                ))}
                <td>{count_sum_B11}</td>
              </tr>
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
