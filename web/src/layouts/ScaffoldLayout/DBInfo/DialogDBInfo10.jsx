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
  let countX1 = 0
  let countX2 = Array(10).fill(0)
  let countX3 = Array(20).fill(0)
  let countX4 = Array(10).fill(0)
  let countX5 = Array(30).fill(0)
  let countX6 = Array(10).fill(0)
  let countX7 = 0
  let countX8 = 0
  let countX9 = 0
  let countP1 = 0
  let countP2 = 0
  let countM1 = 0
  let countM2 = 0
  let countP0 = 0
  let countM0 = 0
  let countQ1 = Array(10).fill(0)
  let countQ2 = Array(10).fill(0)
  let countN1 = Array(10).fill(0)
  let countN2 = Array(10).fill(0)
  let countNote = 0
  let countZ1 = Array(10).fill(0)
  let countZ2 = Array(10).fill(0)
  let countZ3 = Array(10).fill(0)
  let countLabel = Array(10).fill(0)
  let countB1 = Array(10).fill(0)
  let countB2 = 0
  let countB3 = 0
  let countDT = 0

  const genWord = ['','壽',
    '仕','添','江','乾','坤',
    '寬','盛','永','和','發',
    '登','雲','朝','富','貴',
    '創','新','傳','康','祥']

    people.forEach((person) => {
    person.x1 ? countX1 += 1 : ''
    person.x2 >= 1 && person.x2 <=3 ? countX2[person.x2] += 1 : countX2[0] += 1
    if (person.x2 < +1) return

    person.x3 >= 1 && person.x3 <=15 ? countX3[person.x3] += 1 : ''
    person.name ?
    person.x4 >= 1 && person.x4 <=6 ? countX4[person.x4] += 1 : countX4[0] += 1 : ''
    person.x5 > 0 && person.x5 < 30 ? countX5[person.x5] += 1 : ''
    person.x6 > 0 && person.x6 < 3  ? countX6[person.x6] += 1 : ''

    person.q1 >= 1 && person.q1 <= 5 ? countQ1[person.q1] += 1 : ''
    person.q2 >= 1 && person.q2 <= 5 ? countQ2[person.q2] += 1 : ''
    person.n1 >= 1 && person.n1 <= 5 ? countN1[person.n1] += 1 : ''
    person.n2 >= 1 && person.n2 <= 5 ? countN2[person.n2] += 1 : ''

    person.name    ? countX7 += 1 : ''
    person.x8 > +1 ? countX8 += 1 : ''
    person.x9 > +1 ? countX9 += 1 : ''
    person.p1 > +1 ? countP1 += 1 : ''
    person.p2 > +1 ? countP2 += 1 : ''
    person.m1 > +1 ? countM1 += 1 : ''
    person.m2 > +1 ? countM2 += 1 : ''
    person.p0 > +1 ? countP0 += 1 : ''
    person.m0 > +1 ? countM0 += 1 : ''
    person.note ? countNote += 1 : ''

    person.z1 >= 1 && person.z1 <= 9 ? countZ1[person.z1] += 1 : countZ1[0] += 1
    !person.z2 ? '' :
    person.z1 >= 1 && person.z1 <= 9 ? countZ2[person.z1] += 1 : countZ2[0] += 1
    !person.z3 ? '' :
    person.z1 >= 1 && person.z1 <= 9 ? countZ3[person.z1] += 1 : countZ3[0] += 1
    person.label === '' ? '' :
    person.z1 >= 1 && person.z1 <= 9 ? countLabel[person.z1] += 1 : ''

    !person.b1 ? '' :
    person.z1 >= 1 && person.z1 <= 9 ? countB1[person.z1] += 1 : countB1[0] += 1

    person.b2 ? countB2 += 1 : ''
    person.b3 ? countB3 += 1 : ''
    person.dt ? countDT += 1 : ''
  })

  let col = 0
  let row = 0

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          欄位資料統計({countX7})
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
                <td>{'類別 0 只有在項次 1 & 2 有列入統計 在其它項次都會被預先排除'}</td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </table>
          <table border="1">
            <tbody>
              <tr>
                <th width="50">項次</th>
                <th width="50">名稱</th>
                <td width="50">-</td>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
                <th width="50">{col+=1}</th>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>索引</th>
                <td>{countX1}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>類別</th>
                <td>{countX2[0] > 0 ? countX2[0] : '-'}</td>
                <td>{countX2[1] > 0 ? countX2[1] : '-'}</td>
                <td>{countX2[2] > 0 ? countX2[2] : '-'}</td>
                <td>{countX2[3] > 0 ? countX2[3] : '-'}</td>
                <td>{countX2[4] > 0 ? countX2[4] : '-'}</td>
                <td>{countX2[5] > 0 ? countX2[5] : '-'}</td>
                <td>{countX2[6] > 0 ? countX2[6] : '-'}</td>
              </tr>
              <tr>
                <td></td>
                <th>字輩</th>
                <td>..</td>
                <td>{genWord[1]}</td>
                <th>{genWord[2]}</th>
                <td>{genWord[3]}</td>
                <td>{genWord[4]}</td>
                <td>{genWord[5]}</td>
                <td>{genWord[6]}</td>
                <th>{genWord[7]}</th>
                <td>{genWord[8]}</td>
                <td>{genWord[9]}</td>
                <td>{genWord[10]}</td>
                <td>{genWord[11]}</td>
                <th>{genWord[12]}</th>
                <td>{genWord[13]}</td>
                <td>{genWord[14]}</td>
                <td>{genWord[15]}</td>
                <td>{genWord[16]}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>世代</th>
                <td>..</td>
                <td>{countX3[1] > 0 ? countX3[1] : '-'}</td>
                <td>{countX3[2] > 0 ? countX3[2] : '-'}</td>
                <td>{countX3[3] > 0 ? countX3[3] : '-'}</td>
                <td>{countX3[4] > 0 ? countX3[4] : '-'}</td>
                <td>{countX3[5] > 0 ? countX3[5] : '-'}</td>
                <td>{countX3[6] > 0 ? countX3[6] : '-'}</td>
                <td>{countX3[7] > 0 ? countX3[7] : '-'}</td>
                <td>{countX3[8] > 0 ? countX3[8] : '-'}</td>
                <td>{countX3[9] > 0 ? countX3[9] : '-'}</td>
                <td>{countX3[10] > 0 ? countX3[10] : '-'}</td>
                <td>{countX3[11] > 0 ? countX3[11] : '-'}</td>
                <td>{countX3[12] > 0 ? countX3[12] : '-'}</td>
                <td>{countX3[13] > 0 ? countX3[13] : '-'}</td>
                <td>{countX3[14] > 0 ? countX3[14] : '-'}</td>
                <td>{countX3[15] > 0 ? countX3[15] : '-'}</td>
                <td>{countX3[16] > 0 ? countX3[16] : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>房序</th>
                <td>-</td>
                <td>{countX4[1]}</td>
                <td>{countX4[2]}</td>
                <td>{countX4[3]}</td>
                <td>{countX4[4]}</td>
                <td>{countX4[5]}</td>
                <td>{countX4[6]}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>排行</th>
                <td>-</td>
                <td>{countX5[1] > 0 ? countX5[1] : '-'}</td>
                <td>{countX5[2] > 0 ? countX5[2] : '-'}</td>
                <td>{countX5[3] > 0 ? countX5[3] : '-'}</td>
                <td>{countX5[4] > 0 ? countX5[4] : '-'}</td>
                <td>{countX5[5] > 0 ? countX5[5] : '-'}</td>
                <td>{countX5[6] > 0 ? countX5[6] : '-'}</td>
                <td>{countX5[7] > 0 ? countX5[7] : '-'}</td>
                <td>{countX5[8] > 0 ? countX5[8] : '-'}</td>
                <td>{countX5[9] > 0 ? countX5[9] : '-'}</td>
                <td>{countX5[10] > 0 ? countX5[10] : '-'}</td>
                <td>{countX5[11] > 0 ? countX5[11] : '-'}</td>
                <td>{countX5[12] > 0 ? countX5[12] : '-'}</td>
                <td>{countX5[13] > 0 ? countX5[13] : '-'}</td>
                <td>{countX5[14] > 0 ? countX5[14] : '-'}</td>
                <td>{countX5[15] > 0 ? countX5[15] : '-'}</td>
                <td>{countX5[16] > 0 ? countX5[16] : '-'}</td>
              </tr>
              <tr>
                <th></th>
                <th>20+</th>
                <td>-</td>
                <td>{countX5[21] > 0 ? countX5[21] : '-'}</td>
                <td>{countX5[22] > 0 ? countX5[22] : '-'}</td>
                <td>{countX5[23] > 0 ? countX5[23] : '-'}</td>
                <td>{countX5[24] > 0 ? countX5[24] : '-'}</td>
                <td>{countX5[25] > 0 ? countX5[25] : '-'}</td>
                <td>{countX5[26] > 0 ? countX5[26] : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>性別</th>
                <td>-</td>
                <td>{countX6[1] > 0 ? countX6[1] : '-'}</td>
                <td>{countX6[2] > 0 ? countX6[2] : '-'}</td>
                <td>{countX6[3] > 0 ? countX6[2] : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>名字</th>
                <td>{countX7}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>出生</th>
                <td>{countX8 > 0 ? countX8 : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>享年</th>
                <td>{countX9 > 0 ? countX9 : '-'}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>-</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>婚配</th>
                <td>{countM1 > 0 ? countM1 : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>婚配</th>
                <td>{countM2 > 0 ? countM2 : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>婚主</th>
                <td>{countM0 > 0 ? countM0 : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>屬性</th>
                <td>-</td>
                <td>{countN1[1] > 0 ? countN1[1] : '-'}</td>
                <td>{countN1[2] > 0 ? countN1[2] : '-'}</td>
                <td>{countN1[3] > 0 ? countN1[3] : '-'}</td>
                <td>{countN1[4] > 0 ? countN1[4] : '-'}</td>
                <td>{countN1[5] > 0 ? countN1[5] : '-'}</td>
                <td>{countN1[6] > 0 ? countN1[6] : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>註記</th>
                <td>-</td>
                <td>{countN2[1] > 0 ? countN2[1] : '-'}</td>
                <td>{countN2[2] > 0 ? countN2[2] : '-'}</td>
                <td>{countN2[3] > 0 ? countN2[3] : '-'}</td>
                <td>{countN2[4] > 0 ? countN2[4] : '-'}</td>
                <td>{countN2[5] > 0 ? countN2[5] : '-'}</td>
                <td>{countN2[6] > 0 ? countN2[6] : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>父親</th>
                <td>{countP1 > 0 ? countP1 : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>母親</th>
                <td>{countP2 > 0 ? countP2 : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>繼承</th>
                <td>{countP0 > 0 ? countP0 : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>屬性</th>
                <td>-</td>
                <td>{countQ1[1] > 0 ? countQ1[1] : '-'}</td>
                <td>{countQ1[2] > 0 ? countQ1[2] : '-'}</td>
                <td>{countQ1[3] > 0 ? countQ1[3] : '-'}</td>
                <td>{countQ1[4] > 0 ? countQ1[4] : '-'}</td>
                <td>{countQ1[5] > 0 ? countQ1[5] : '-'}</td>
                <td>{countQ1[6] > 0 ? countQ1[6] : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>註記</th>
                <td>-</td>
                <td>{countQ2[1] > 0 ? countQ2[1] : '-'}</td>
                <td>{countQ2[2] > 0 ? countQ2[2] : '-'}</td>
                <td>{countQ2[3] > 0 ? countQ2[3] : '-'}</td>
                <td>{countQ2[4] > 0 ? countQ2[4] : '-'}</td>
                <td>{countQ2[5] > 0 ? countQ2[5] : '-'}</td>
                <td>{countQ2[6] > 0 ? countQ2[6] : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>備註</th>
                <td>{countNote > 0 ? countNote : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>更新</th>
                <td>{countDT > 0 ? countDT : '-'}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>-</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>塔號</th>
                <td>{'x'}</td>
                <td>{countZ1[1] > 0 ? countZ1[1] : '-'}</td>
                <td>{countZ1[2] > 0 ? countZ1[2] : '-'}</td>
                <td>{countZ1[3] > 0 ? countZ1[3] : '-'}</td>
                <td>{countZ1[4] > 0 ? countZ1[4] : '-'}</td>
                <td>{countZ1[5] > 0 ? countZ1[5] : '-'}</td>
                <td>{countZ1[6] > 0 ? countZ1[6] : '-'}</td>
                <td>{countZ1[7] > 0 ? countZ1[7] : '-'}</td>
                <td>{countZ1[8] > 0 ? countZ1[8] : '-'}</td>
                <td>{countZ1[9] > 0 ? countZ1[9] : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>列號</th>
                <td>{countZ2[0] > 0 ? countZ2[0] : '-'}</td>
                <td>{countZ2[1] > 0 ? countZ2[1] : '-'}</td>
                <td>{countZ2[2] > 0 ? countZ2[2] : '-'}</td>
                <td>{countZ2[3] > 0 ? countZ2[3] : '-'}</td>
                <td>{countZ2[4] > 0 ? countZ2[4] : '-'}</td>
                <td>{countZ2[5] > 0 ? countZ2[5] : '-'}</td>
                <td>{countZ2[6] > 0 ? countZ2[6] : '-'}</td>
                <td>{countZ2[7] > 0 ? countZ2[7] : '-'}</td>
                <td>{countZ2[8] > 0 ? countZ2[8] : '-'}</td>
                <td>{countZ2[9] > 0 ? countZ2[9] : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>座號</th>
                <td>{countZ3[0] > 0 ? countZ3[0] : '-'}</td>
                <td>{countZ3[1] > 0 ? countZ3[1] : '-'}</td>
                <td>{countZ3[2] > 0 ? countZ3[2] : '-'}</td>
                <td>{countZ3[3] > 0 ? countZ3[3] : '-'}</td>
                <td>{countZ3[4] > 0 ? countZ3[4] : '-'}</td>
                <td>{countZ3[5] > 0 ? countZ3[5] : '-'}</td>
                <td>{countZ3[6] > 0 ? countZ3[6] : '-'}</td>
                <td>{countZ3[7] > 0 ? countZ3[7] : '-'}</td>
                <td>{countZ3[8] > 0 ? countZ3[8] : '-'}</td>
                <td>{countZ3[9] > 0 ? countZ3[9] : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>稱謂</th>
                <td>{'x'}</td>
                <td>{countLabel[1] > 0 ? countLabel[1] : '-'}</td>
                <td>{countLabel[2] > 0 ? countLabel[2] : '-'}</td>
                <td>{countLabel[3] > 0 ? countLabel[3] : '-'}</td>
                <td>{countLabel[4] > 0 ? countLabel[4] : '-'}</td>
                <td>{countLabel[5] > 0 ? countLabel[5] : '-'}</td>
                <td>{countLabel[6] > 0 ? countLabel[6] : '-'}</td>
                <td>{countLabel[7] > 0 ? countLabel[7] : '-'}</td>
                <td>{countLabel[8] > 0 ? countLabel[8] : '-'}</td>
                <td>{countLabel[9] > 0 ? countLabel[9] : '-'}</td>

              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>(B1)</th>
                <td>{'x'}</td>
                <td>{countB1[1] > 0 ? countB1[1] : '-'}</td>
                <td>{countB1[2] > 0 ? countB1[2] : '-'}</td>
                <td>{countB1[3] > 0 ? countB1[3] : '-'}</td>
                <td>{countB1[4] > 0 ? countB1[4] : '-'}</td>
                <td>{countB1[5] > 0 ? countB1[5] : '-'}</td>
                <td>{countB1[6] > 0 ? countB1[6] : '-'}</td>
                <td>{countB1[7] > 0 ? countB1[7] : '-'}</td>
                <td>{countB1[8] > 0 ? countB1[8] : '-'}</td>
                <td>{countB1[9] > 0 ? countB1[9] : '-'}</td>
              </tr>
{/*
              <tr>
                <th>{row+=1}</th>
                <th>(B2)</th>
                <td>{countB2 > 0 ? countB2 : '-'}</td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>(B3)</th>
                <td>{countB3 > 0 ? countB3 : '-'}</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <th>{row+=1}</th>
                <th>更新</th>
                <td>{countDT > 0 ? countDT : '-'}</td>
              </tr>
*/}
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
