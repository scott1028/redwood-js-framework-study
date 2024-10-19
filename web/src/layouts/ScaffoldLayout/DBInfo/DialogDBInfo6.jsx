import { useState } from 'react';
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
  const [x1, setX1] = useState('');
  const personG0  = people.find(person => person.x1 === +x1) ?? {};
  const personG1  = people.find(person => person.x1 === personG0.p0) ?? {};
  const personG2  = people.find(person => person.x1 === personG1.p0) ?? {};
  const personG3  = people.find(person => person.x1 === personG2.p0) ?? {};
  const personG4  = people.find(person => person.x1 === personG3.p0) ?? {};
  const personG5  = people.find(person => person.x1 === personG4.p0) ?? {};
  const personG6  = people.find(person => person.x1 === personG5.p0) ?? {};
  const personG7  = people.find(person => person.x1 === personG6.p0) ?? {};
  const personG8  = people.find(person => person.x1 === personG7.p0) ?? {};
  const personG9  = people.find(person => person.x1 === personG8.p0) ?? {};
  const personP01 = people.find(person => person.x1 === personG0.p1) ?? {};
  const personP02 = people.find(person => person.x1 === personG0.p2) ?? {};
  const personP11 = people.find(person => person.x1 === personG1.p1) ?? {};
  const personP12 = people.find(person => person.x1 === personG1.p2) ?? {};
  const personP21 = people.find(person => person.x1 === personG2.p1) ?? {};
  const personP22 = people.find(person => person.x1 === personG2.p2) ?? {};
  const personP31 = people.find(person => person.x1 === personG3.p1) ?? {};
  const personP32 = people.find(person => person.x1 === personG3.p2) ?? {};
  const personP41 = people.find(person => person.x1 === personG4.p1) ?? {};
  const personP42 = people.find(person => person.x1 === personG4.p2) ?? {};
  const personP51 = people.find(person => person.x1 === personG5.p1) ?? {};
  const personP52 = people.find(person => person.x1 === personG5.p2) ?? {};
  const personP61 = people.find(person => person.x1 === personG6.p1) ?? {};
  const personP62 = people.find(person => person.x1 === personG6.p2) ?? {};
  const personP71 = people.find(person => person.x1 === personG7.p1) ?? {};
  const personP72 = people.find(person => person.x1 === personG7.p2) ?? {};
  const personP81 = people.find(person => person.x1 === personG8.p1) ?? {};
  const personP82 = people.find(person => person.x1 === personG8.p2) ?? {};
  const personP91 = people.find(person => person.x1 === personG9.p1) ?? {};
  const personP92 = people.find(person => person.x1 === personG9.p2) ?? {};
  let count_gen = 0
  let x1exists = Array(10).fill(0)
  if (+personG0.x1 > 9999) {x1exists[0] = 1; count_gen += 1;}
  if (+personG1.x1 > 9999) {x1exists[1] = 1; count_gen += 1;}
  if (+personG2.x1 > 9999) {x1exists[2] = 1; count_gen += 1;}
  if (+personG3.x1 > 9999) {x1exists[3] = 1; count_gen += 1;}
  if (+personG4.x1 > 9999) {x1exists[4] = 1; count_gen += 1;}
  if (+personG5.x1 > 9999) {x1exists[5] = 1; count_gen += 1;}
  if (+personG6.x1 > 9999) {x1exists[6] = 1; count_gen += 1;}
  if (+personG7.x1 > 9999) {x1exists[7] = 1; count_gen += 1;}
  if (+personG8.x1 > 9999) {x1exists[8] = 1; count_gen += 1;}
  if (+personG9.x1 > 9999) {x1exists[9] = 1; count_gen += 1;}
  const string1 = ['@','-1','-2','-3','-4','-5','-6','-7','-8','-9']
  const string2 = ['(本位)','父母','祖父母','曾祖父母','高祖父母','天祖父母','烈祖父母','太祖父母','遠祖父母','鼻祖父母']
  const string3 = ['(虛位)','子女','孫子女','曾孫子女','玄孫子女','來孫子女','昆孫子女','仍孫子女','雲孫子女','鼻孫子女']
  const string4 = ['@','+1','+2','+3','+4','+5','+6','+7','+8','+9']
  const string5 = ['','嫡生','入嗣','承鼎','收養','託孤']
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          索引查詢祖輩九代
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
            {'查詢索引號碼 ---> '}
          <input
            value={x1}
            onChange={e => setX1(e.target.value)}
          />
          <table border="1">
            <tbody>
            <tr>
                <td width="40">世代</td>
                <th width="90">祖輩稱謂</th>
                <td width="75">索引號碼</td>
                <td width="25">bn</td>
                <th width="75">傳承名字</th>
                <td width="50">屬性</td>
                <td>-</td>
                <td width="75">父親索引</td>
                <td width="75">父親名字</td>
                <td width="75">母親索引</td>
                <td width="75">母親名字</td>
                <td>-</td>
                <th width="90">宗輩稱謂</th>
                <td width="40">世代</td>
              </tr>
              <tr>
                <td>{string1[9]}</td>
                <th>{string2[9]}</th>
                <td>{(x1exists[9]) ? personG9.x1    : ''}</td>
                <td>{(x1exists[9]) ? personG9.x5    : ''}</td>
                <th>{(x1exists[9]) ? personG9.name  : ''}</th>
                <td>{(x1exists[9]) ? string5[personG9.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[9]) ? personG9.p1    : ''}</td>
                <td>{(x1exists[9]) ? personP91.name : ''}</td>
                <td>{(x1exists[9]) ? personG9.p2    : ''}</td>
                <td>{(x1exists[9]) ? personP92.name : ''}</td>
                <td></td>
                <th>{(x1exists[9]) ? string3[0] : ''}</th>
                <td>{(x1exists[9]) ? string4[0] : ''}</td>
              </tr>
              <tr>
                <td>{string1[8]}</td>
                <th>{string2[8]}</th>
                <td>{(x1exists[8]) ? personG8.x1    : ''}</td>
                <td>{(x1exists[8]) ? personG8.x5    : ''}</td>
                <th>{(x1exists[8]) ? personG8.name  : ''}</th>
                <td>{(x1exists[8]) ? string5[personG8.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[8]) ? personG8.p1    : ''}</td>
                <td>{(x1exists[8]) ? personP81.name : ''}</td>
                <td>{(x1exists[8]) ? personG8.p2    : ''}</td>
                <td>{(x1exists[8]) ? personP82.name : ''}</td>
                <td></td>
                <th>{(x1exists[8]) ? string3[count_gen-9] : ''}</th>
                <td>{(x1exists[8]) ? string4[count_gen-9] : ''}</td>
              </tr>
              <tr>
                <td>{string1[7]}</td>
                <th>{string2[7]}</th>
                <td>{(x1exists[7]) ? personG7.x1    : ''}</td>
                <td>{(x1exists[7]) ? personG7.x5    : ''}</td>
                <th>{(x1exists[7]) ? personG7.name  : ''}</th>
                <td>{(x1exists[7]) ? string5[personG7.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[7]) ? personG7.p1    : ''}</td>
                <td>{(x1exists[7]) ? personP71.name : ''}</td>
                <td>{(x1exists[7]) ? personG7.p2    : ''}</td>
                <td>{(x1exists[7]) ? personP72.name : ''}</td>
                <td></td>
                <th>{(x1exists[7]) ? string3[count_gen-8] : ''}</th>
                <td>{(x1exists[7]) ? string4[count_gen-8] : ''}</td>
              </tr>
              <tr>
                <td>{string1[6]}</td>
                <th>{string2[6]}</th>
                <td>{(x1exists[6]) ? personG6.x1    : ''}</td>
                <td>{(x1exists[6]) ? personG6.x5    : ''}</td>
                <th>{(x1exists[6]) ? personG6.name  : ''}</th>
                <td>{(x1exists[6]) ? string5[personG6.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[6]) ? personG6.p1    : ''}</td>
                <td>{(x1exists[6]) ? personP61.name : ''}</td>
                <td>{(x1exists[6]) ? personG6.p2    : ''}</td>
                <td>{(x1exists[6]) ? personP62.name : ''}</td>
                <td></td>
                <th>{(x1exists[6]) ? string3[count_gen-7] : ''}</th>
                <td>{(x1exists[6]) ? string4[count_gen-7] : ''}</td>
              </tr>
              <tr>
                <td>{string1[5]}</td>
                <th>{string2[5]}</th>
                <td>{(x1exists[5]) ? personG5.x1    : ''}</td>
                <td>{(x1exists[5]) ? personG5.x5    : ''}</td>
                <th>{(x1exists[5]) ? personG5.name  : ''}</th>
                <td>{(x1exists[5]) ? string5[personG5.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[5]) ? personG5.p1    : ''}</td>
                <td>{(x1exists[5]) ? personP51.name : ''}</td>
                <td>{(x1exists[5]) ? personG5.p2    : ''}</td>
                <td>{(x1exists[5]) ? personP52.name : ''}</td>
                <td></td>
                <th>{(x1exists[5]) ? string3[count_gen-6] : ''}</th>
                <td>{(x1exists[5]) ? string4[count_gen-6] : ''}</td>
              </tr>
              <tr>
                <td>{string1[4]}</td>
                <th>{string2[4]}</th>
                <td>{(x1exists[4]) ? personG4.x1    : ''}</td>
                <td>{(x1exists[4]) ? personG4.x5    : ''}</td>
                <th>{(x1exists[4]) ? personG4.name  : ''}</th>
                <td>{(x1exists[4]) ? string5[personG4.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[4]) ? personG4.p1    : ''}</td>
                <td>{(x1exists[4]) ? personP41.name : ''}</td>
                <td>{(x1exists[4]) ? personG4.p2    : ''}</td>
                <td>{(x1exists[4]) ? personP42.name : ''}</td>
                <td></td>
                <th>{(x1exists[4]) ? string3[count_gen-5] : ''}</th>
                <td>{(x1exists[4]) ? string4[count_gen-5] : ''}</td>
              </tr>
              <tr>
                <td>{string1[3]}</td>
                <th>{string2[3]}</th>
                <td>{(x1exists[3]) ? personG3.x1    : ''}</td>
                <td>{(x1exists[3]) ? personG3.x5    : ''}</td>
                <th>{(x1exists[3]) ? personG3.name  : ''}</th>
                <td>{(x1exists[3]) ? string5[personG3.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[3]) ? personG3.p1    : ''}</td>
                <td>{(x1exists[3]) ? personP31.name : ''}</td>
                <td>{(x1exists[3]) ? personG3.p2    : ''}</td>
                <td>{(x1exists[3]) ? personP32.name : ''}</td>
                <td></td>
                <th>{(x1exists[3]) ? string3[count_gen-4] : ''}</th>
                <td>{(x1exists[3]) ? string4[count_gen-4] : ''}</td>
              </tr>
              <tr>
                <td>{string1[2]}</td>
                <th>{string2[2]}</th>
                <td>{(x1exists[2]) ? personG2.x1    : ''}</td>
                <td>{(x1exists[2]) ? personG2.x5    : ''}</td>
                <th>{(x1exists[2]) ? personG2.name  : ''}</th>
                <td>{(x1exists[2]) ? string5[personG2.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[2]) ? personG2.p1    : ''}</td>
                <td>{(x1exists[2]) ? personP21.name : ''}</td>
                <td>{(x1exists[2]) ? personG2.p2    : ''}</td>
                <td>{(x1exists[2]) ? personP22.name : ''}</td>
                <td></td>
                <th>{(x1exists[2]) ? string3[count_gen-3] : ''}</th>
                <td>{(x1exists[2]) ? string4[count_gen-3] : ''}</td>
              </tr>
              <tr>
                <td>{string1[1]}</td>
                <th>{string2[1]}</th>
                <td>{(x1exists[1]) ? personG1.x1    : ''}</td>
                <td>{(x1exists[1]) ? personG1.x5    : ''}</td>
                <th>{(x1exists[1]) ? personG1.name  : ''}</th>
                <td>{(x1exists[1]) ? string5[personG1.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[1]) ? personG1.p1    : ''}</td>
                <td>{(x1exists[1]) ? personP11.name : ''}</td>
                <td>{(x1exists[1]) ? personG1.p2    : ''}</td>
                <td>{(x1exists[1]) ? personP12.name : ''}</td>
                <td></td>
                <th>{(x1exists[1]) ? string3[count_gen-2] : ''}</th>
                <td>{(x1exists[1]) ? string4[count_gen-2] : ''}</td>
              </tr>
              <tr>
                <td>{string1[0]}</td>
                <th>{string2[0]}</th>
                <td>{(x1exists[0]) ? personG0.x1    : ''}</td>
                <td>{(x1exists[0]) ? personG0.x5    : ''}</td>
                <th>{(x1exists[0]) ? personG0.name  : ''}</th>
                <td>{(x1exists[0]) ? string5[personG0.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[0]) ? personG0.p1    : ''}</td>
                <td>{(x1exists[0]) ? personP01.name : ''}</td>
                <td>{(x1exists[0]) ? personG0.p2    : ''}</td>
                <td>{(x1exists[0]) ? personP02.name : ''}</td>
                <td></td>
                <th>{(x1exists[0]) ? string3[count_gen-1] : ''}</th>
                <td>{(x1exists[0]) ? string4[count_gen-1] : ''}</td>
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
