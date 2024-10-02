import { useState } from 'react';

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
  const [x1, setX1] = useState('');
  const PersonG0  = people.find(person => person.x1 === +x1) ?? {};
  const PersonG1  = people.find(person => person.x1 === +PersonG0.p0) ?? {};
  const PersonG2  = people.find(person => person.x1 === +PersonG1.p0) ?? {};
  const PersonG3  = people.find(person => person.x1 === +PersonG2.p0) ?? {};
  const PersonG4  = people.find(person => person.x1 === +PersonG3.p0) ?? {};
  const PersonG5  = people.find(person => person.x1 === +PersonG4.p0) ?? {};
  const PersonG6  = people.find(person => person.x1 === +PersonG5.p0) ?? {};
  const PersonG7  = people.find(person => person.x1 === +PersonG6.p0) ?? {};
  const PersonG8  = people.find(person => person.x1 === +PersonG7.p0) ?? {};
  const PersonG9  = people.find(person => person.x1 === +PersonG8.p0) ?? {};
  const PersonP01 = people.find(person => person.x1 === +PersonG0.p1) ?? {};
  const PersonP02 = people.find(person => person.x1 === +PersonG0.p2) ?? {};
  const PersonP11 = people.find(person => person.x1 === +PersonG1.p1) ?? {};
  const PersonP12 = people.find(person => person.x1 === +PersonG1.p2) ?? {};
  const PersonP21 = people.find(person => person.x1 === +PersonG2.p1) ?? {};
  const PersonP22 = people.find(person => person.x1 === +PersonG2.p2) ?? {};
  const PersonP31 = people.find(person => person.x1 === +PersonG3.p1) ?? {};
  const PersonP32 = people.find(person => person.x1 === +PersonG3.p2) ?? {};
  const PersonP41 = people.find(person => person.x1 === +PersonG4.p1) ?? {};
  const PersonP42 = people.find(person => person.x1 === +PersonG4.p2) ?? {};
  const PersonP51 = people.find(person => person.x1 === +PersonG5.p1) ?? {};
  const PersonP52 = people.find(person => person.x1 === +PersonG5.p2) ?? {};
  const PersonP61 = people.find(person => person.x1 === +PersonG6.p1) ?? {};
  const PersonP62 = people.find(person => person.x1 === +PersonG6.p2) ?? {};
  const PersonP71 = people.find(person => person.x1 === +PersonG7.p1) ?? {};
  const PersonP72 = people.find(person => person.x1 === +PersonG7.p2) ?? {};
  const PersonP81 = people.find(person => person.x1 === +PersonG8.p1) ?? {};
  const PersonP82 = people.find(person => person.x1 === +PersonG8.p2) ?? {};
  const PersonP91 = people.find(person => person.x1 === +PersonG9.p1) ?? {};
  const PersonP92 = people.find(person => person.x1 === +PersonG9.p2) ?? {};
  let count_gen = 0
  let x1exists = Array(10).fill(0)
  if (PersonG0.x1 >> +99) {x1exists[0] = 1; count_gen += 1;}
  if (PersonG1.x1 >> +99) {x1exists[1] = 1; count_gen += 1;}
  if (PersonG2.x1 >> +99) {x1exists[2] = 1; count_gen += 1;}
  if (PersonG3.x1 >> +99) {x1exists[3] = 1; count_gen += 1;}
  if (PersonG4.x1 >> +99) {x1exists[4] = 1; count_gen += 1;}
  if (PersonG5.x1 >> +99) {x1exists[5] = 1; count_gen += 1;}
  if (PersonG6.x1 >> +99) {x1exists[6] = 1; count_gen += 1;}
  if (PersonG7.x1 >> +99) {x1exists[7] = 1; count_gen += 1;}
  if (PersonG8.x1 >> +99) {x1exists[8] = 1; count_gen += 1;}
  if (PersonG9.x1 >> +99) {x1exists[9] = 1; count_gen += 1;}
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
                <td>{(x1exists[9]) ? PersonG9.x1    : ''}</td>
                <td>{(x1exists[9]) ? PersonG9.x5    : ''}</td>
                <th>{(x1exists[9]) ? PersonG9.name  : ''}</th>
                <td>{(x1exists[9]) ? string5[PersonG9.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[9]) ? PersonG9.p1    : ''}</td>
                <td>{(x1exists[9]) ? PersonP91.name : ''}</td>
                <td>{(x1exists[9]) ? PersonG9.p2    : ''}</td>
                <td>{(x1exists[9]) ? PersonP92.name : ''}</td>
                <td></td>
                <th>{(x1exists[9]) ? string3[0] : ''}</th>
                <td>{(x1exists[9]) ? string4[0] : ''}</td>
              </tr>
              <tr>
                <td>{string1[8]}</td>
                <th>{string2[8]}</th>
                <td>{(x1exists[8]) ? PersonG8.x1    : ''}</td>
                <td>{(x1exists[8]) ? PersonG8.x5    : ''}</td>
                <th>{(x1exists[8]) ? PersonG8.name  : ''}</th>
                <td>{(x1exists[8]) ? string5[PersonG8.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[8]) ? PersonG8.p1    : ''}</td>
                <td>{(x1exists[8]) ? PersonP81.name : ''}</td>
                <td>{(x1exists[8]) ? PersonG8.p2    : ''}</td>
                <td>{(x1exists[8]) ? PersonP82.name : ''}</td>
                <td></td>
                <th>{(x1exists[8]) ? string3[count_gen-9] : ''}</th>
                <td>{(x1exists[8]) ? string4[count_gen-9] : ''}</td>
              </tr>
              <tr>
                <td>{string1[7]}</td>
                <th>{string2[7]}</th>
                <td>{(x1exists[7]) ? PersonG7.x1    : ''}</td>
                <td>{(x1exists[7]) ? PersonG7.x5    : ''}</td>
                <th>{(x1exists[7]) ? PersonG7.name  : ''}</th>
                <td>{(x1exists[7]) ? string5[PersonG7.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[7]) ? PersonG7.p1    : ''}</td>
                <td>{(x1exists[7]) ? PersonP71.name : ''}</td>
                <td>{(x1exists[7]) ? PersonG7.p2    : ''}</td>
                <td>{(x1exists[7]) ? PersonP72.name : ''}</td>
                <td></td>
                <th>{(x1exists[7]) ? string3[count_gen-8] : ''}</th>
                <td>{(x1exists[7]) ? string4[count_gen-8] : ''}</td>
              </tr>
              <tr>
                <td>{string1[6]}</td>
                <th>{string2[6]}</th>
                <td>{(x1exists[6]) ? PersonG6.x1    : ''}</td>
                <td>{(x1exists[6]) ? PersonG6.x5    : ''}</td>
                <th>{(x1exists[6]) ? PersonG6.name  : ''}</th>
                <td>{(x1exists[6]) ? string5[PersonG6.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[6]) ? PersonG6.p1    : ''}</td>
                <td>{(x1exists[6]) ? PersonP61.name : ''}</td>
                <td>{(x1exists[6]) ? PersonG6.p2    : ''}</td>
                <td>{(x1exists[6]) ? PersonP62.name : ''}</td>
                <td></td>
                <th>{(x1exists[6]) ? string3[count_gen-7] : ''}</th>
                <td>{(x1exists[6]) ? string4[count_gen-7] : ''}</td>
              </tr>
              <tr>
                <td>{string1[5]}</td>
                <th>{string2[5]}</th>
                <td>{(x1exists[5]) ? PersonG5.x1    : ''}</td>
                <td>{(x1exists[5]) ? PersonG5.x5    : ''}</td>
                <th>{(x1exists[5]) ? PersonG5.name  : ''}</th>
                <td>{(x1exists[5]) ? string5[PersonG5.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[5]) ? PersonG5.p1    : ''}</td>
                <td>{(x1exists[5]) ? PersonP51.name : ''}</td>
                <td>{(x1exists[5]) ? PersonG5.p2    : ''}</td>
                <td>{(x1exists[5]) ? PersonP52.name : ''}</td>
                <td></td>
                <th>{(x1exists[5]) ? string3[count_gen-6] : ''}</th>
                <td>{(x1exists[5]) ? string4[count_gen-6] : ''}</td>
              </tr>
              <tr>
                <td>{string1[4]}</td>
                <th>{string2[4]}</th>
                <td>{(x1exists[4]) ? PersonG4.x1    : ''}</td>
                <td>{(x1exists[4]) ? PersonG4.x5    : ''}</td>
                <th>{(x1exists[4]) ? PersonG4.name  : ''}</th>
                <td>{(x1exists[4]) ? string5[PersonG4.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[4]) ? PersonG4.p1    : ''}</td>
                <td>{(x1exists[4]) ? PersonP41.name : ''}</td>
                <td>{(x1exists[4]) ? PersonG4.p2    : ''}</td>
                <td>{(x1exists[4]) ? PersonP42.name : ''}</td>
                <td></td>
                <th>{(x1exists[4]) ? string3[count_gen-5] : ''}</th>
                <td>{(x1exists[4]) ? string4[count_gen-5] : ''}</td>
              </tr>
              <tr>
                <td>{string1[3]}</td>
                <th>{string2[3]}</th>
                <td>{(x1exists[3]) ? PersonG3.x1    : ''}</td>
                <td>{(x1exists[3]) ? PersonG3.x5    : ''}</td>
                <th>{(x1exists[3]) ? PersonG3.name  : ''}</th>
                <td>{(x1exists[3]) ? string5[PersonG3.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[3]) ? PersonG3.p1    : ''}</td>
                <td>{(x1exists[3]) ? PersonP31.name : ''}</td>
                <td>{(x1exists[3]) ? PersonG3.p2    : ''}</td>
                <td>{(x1exists[3]) ? PersonP32.name : ''}</td>
                <td></td>
                <th>{(x1exists[3]) ? string3[count_gen-4] : ''}</th>
                <td>{(x1exists[3]) ? string4[count_gen-4] : ''}</td>
              </tr>
              <tr>
                <td>{string1[2]}</td>
                <th>{string2[2]}</th>
                <td>{(x1exists[2]) ? PersonG2.x1    : ''}</td>
                <td>{(x1exists[2]) ? PersonG2.x5    : ''}</td>
                <th>{(x1exists[2]) ? PersonG2.name  : ''}</th>
                <td>{(x1exists[2]) ? string5[PersonG2.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[2]) ? PersonG2.p1    : ''}</td>
                <td>{(x1exists[2]) ? PersonP21.name : ''}</td>
                <td>{(x1exists[2]) ? PersonG2.p2    : ''}</td>
                <td>{(x1exists[2]) ? PersonP22.name : ''}</td>
                <td></td>
                <th>{(x1exists[2]) ? string3[count_gen-3] : ''}</th>
                <td>{(x1exists[2]) ? string4[count_gen-3] : ''}</td>
              </tr>
              <tr>
                <td>{string1[1]}</td>
                <th>{string2[1]}</th>
                <td>{(x1exists[1]) ? PersonG1.x1    : ''}</td>
                <td>{(x1exists[1]) ? PersonG1.x5    : ''}</td>
                <th>{(x1exists[1]) ? PersonG1.name  : ''}</th>
                <td>{(x1exists[1]) ? string5[PersonG1.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[1]) ? PersonG1.p1    : ''}</td>
                <td>{(x1exists[1]) ? PersonP11.name : ''}</td>
                <td>{(x1exists[1]) ? PersonG1.p2    : ''}</td>
                <td>{(x1exists[1]) ? PersonP12.name : ''}</td>
                <td></td>
                <th>{(x1exists[1]) ? string3[count_gen-2] : ''}</th>
                <td>{(x1exists[1]) ? string4[count_gen-2] : ''}</td>
              </tr>
              <tr>
                <td>{string1[0]}</td>
                <th>{string2[0]}</th>
                <td>{(x1exists[0]) ? PersonG0.x1    : ''}</td>
                <td>{(x1exists[0]) ? PersonG0.x5    : ''}</td>
                <th>{(x1exists[0]) ? PersonG0.name  : ''}</th>
                <td>{(x1exists[0]) ? string5[PersonG0.q1] : ''}</td>
                <td></td>
                <td>{(x1exists[0]) ? PersonG0.p1    : ''}</td>
                <td>{(x1exists[0]) ? PersonP01.name : ''}</td>
                <td>{(x1exists[0]) ? PersonG0.p2    : ''}</td>
                <td>{(x1exists[0]) ? PersonP02.name : ''}</td>
                <td></td>
                <th>{(x1exists[0]) ? string3[count_gen-1] : ''}</th>
                <td>{(x1exists[0]) ? string4[count_gen-1] : ''}</td>
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
