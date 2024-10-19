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

const Dialog = ({ open, handleClose,}) => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)
    let count_x21_gen = Array(15).fill(0) //1:宗親
    let count_x22_gen = Array(15).fill(0) //2:配偶
    let count_x23_gen = Array(15).fill(0) //3:姻親
    let count_sum_gen = Array(15).fill(0) //::合計
    let count_x21_sum = 0 //1:宗親
    let count_x22_sum = 0 //2:配偶
    let count_x23_sum = 0 //3:姻親
    let count_sum_all = 0 //::合計
    let count_x61_gen = Array(15).fill(0) //1:男性
    let count_x62_gen = Array(15).fill(0) //2:女性
    let count_xm1_gen = Array(15).fill(0) //12婚配
    let count_xm2_gen = Array(15).fill(0) //13婚配
    let count_xm3_gen = Array(15).fill(0) //14婚配
    let count_xm0_gen = Array(15).fill(0) //18婚主
    let count_xp0_gen = Array(15).fill(0) //15繼承
    let count_q12_gen = Array(15).fill(0) //2:過房繼承
    let count_x61_sum = 0 //1:男性
    let count_x62_sum = 0 //2:女性
    let count_xm0_sum = 0 //::嫁娶
    let count_xm1_sum = 0 //::婚配*1
    let count_xm2_sum = 0 //::婚配*2
    let count_xp0_sum = 0 //::傳承
    let count_q12_sum = 0 //2:過房繼承

  people.forEach((person) => {
    if (person.x2 == 1) {
      count_x21_sum += 1
      count_x21_gen[person.x3] += 1
    }
    if (person.x2 == 2) {
      count_x22_sum += 1
      count_x22_gen[person.x3] += 1
    }
    if (person.x2 == 3) {
      count_x23_sum += 1
      count_x23_gen[person.x3] += 1
    }
    if (person.x2) {
      if (person.x6 == 1) count_x61_gen[person.x3] += 1
      if (person.x6 == 2) count_x62_gen[person.x3] += 1
      if (person.m1) count_xm1_gen[person.x3] += 1
      if (person.m2) count_xm2_gen[person.x3] += 1
      if (person.m3) count_xm3_gen[person.x3] += 1
      if (person.m0) count_xm0_gen[person.x3] += 1
      if (person.p0) {
        if (person.q1 >= +2) {
          count_q12_gen[person.x3] += 1
        }
          count_xp0_gen[person.x3] += 1
      }
    }
  })
  count_sum_all =
    count_x21_sum + count_x22_sum + count_x23_sum
  for (let idx = 1; idx <= 12; idx++) {
    count_sum_gen[idx] = count_x21_gen[idx] + count_x22_gen[idx] + count_x23_gen[idx]
    count_x61_sum += count_x61_gen[idx]
    count_x62_sum += count_x62_gen[idx]
    count_xm0_sum += count_xm0_gen[idx]
    count_xm1_sum += count_xm1_gen[idx]
    count_xm2_sum += count_xm2_gen[idx]
    count_xp0_sum += count_xp0_gen[idx]
    count_q12_sum += count_q12_gen[idx]
  }

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          世代屬性統計
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
                <th width="50">世代</th>
                <th width="50">1</th>
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
                <th width="50">12</th>
                <th width="50">13</th>
                <th width="60">合計</th>
              </tr>
              <tr>
                <th></th>
                <th>壽字</th>
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
                <th>登字</th>
                <th>雲字</th>
                <th>{count_sum_all}</th>
              </tr>
              <tr>
                <th>宗親</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <td key={idx}>{count_x21_gen[idx + 1]}</td>
                ))}
                <td>{count_x21_sum}</td>
              </tr>
              <tr>
                <th>配偶</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <td key={idx}>{count_x22_gen[idx + 1]}</td>
                ))}
                <td>{count_x22_sum}</td>
              </tr>
              <tr>
                <th>姻親</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <td key={idx}>{count_x23_gen[idx + 1]}</td>
                ))}
                <td>{count_x23_sum}</td>
              </tr>
              <tr>
                <th>合計</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <th key={idx}>{count_sum_gen[idx + 1]}</th>
                ))}
                <td>-</td>
              </tr>
              <p></p>
              <tr>
                <th>男性</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <td key={idx}>{count_x61_gen[idx + 1]}</td>
                ))}
                <td>{count_x61_sum}</td>
              </tr>
              <tr>
                <th>女性</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <td key={idx}>{count_x62_gen[idx + 1]}</td>
                ))}
                <td>{count_x62_sum}</td>
              </tr>
              <p></p>
              <tr>
                <th>婚配</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <td key={idx}>{count_xm1_gen[idx + 1]}</td>
                ))}
                <td>{count_xm1_sum}</td>
              </tr>
              <tr>
                <th>婚配</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <td key={idx}>{count_xm2_gen[idx + 1]}</td>
                ))}
                <td>{count_xm2_sum}</td>
              </tr>
              <tr>
                <th>嫁娶</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <td key={idx}>{count_xm0_gen[idx + 1]}</td>
                ))}
                <td>{count_xm0_sum}</td>
              </tr>
              <p></p>
              <tr>
                <th>傳承</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <td key={idx}>{count_xp0_gen[idx + 1]}</td>
                ))}
                <td>{count_xp0_sum}</td>
              </tr>
              <tr>
                <th>入嗣</th>
                {Array.from({ length: 13 }).map((_, idx) => (
                <td key={idx}>{count_q12_gen[idx + 1]}</td>
                ))}
                <td>{count_q12_sum}</td>
              </tr>
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
