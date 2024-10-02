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
  const [x1, setX1] = useState('1');
  const personX1 = people.find(person => person.x1 === +x1) ?? {};
  const personM1 = people.find(person => person.x1 === (personX1.m1)) ?? {};
  const personM2 = people.find(person => person.x1 === (personX1.m2)) ?? {};
  const personM0 = people.find(person => person.x1 === (personX1.m0)) ?? {};
  const personP1 = people.find(person => person.x1 === (personX1.p1)) ?? {};
  const personP2 = people.find(person => person.x1 === (personX1.p2)) ?? {};
  const personP0 = people.find(person => person.x1 === (personX1.p0)) ?? {};
  //2024.09.30//
  const stringX2 = ['','1宗親','2配偶','3姻親','4???','5???','6???']
  const stringX3 = ['','壽',
                    '仕','添','江','乾','坤',
                    '寬','盛','永','和','發',
                    '登','雲','朝','富','貴']
  const stringX4 = ['','1廣一','2廣二','3廣三','4廣四','5廣五','6良房']
  const stringX6 = ['','1男性','2女性','3???','4???','男','女']
  const stringN1 = ['','1入嫁','2出嫁','3入贅','4出贅','5平婚','6???']
  const stringN2 = ['','1離婚','2改嫁','3失蹤','4???','5早逝','6???']
  const stringQ1 = ['','1嫡生','2入嗣','3承鼎','4收養','5託孤','6???']
  const stringQ2 = ['','1失婚','2出嗣','3失蹤','4出養','5幼亡','6???']

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          索引查詢細目
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
            {'查詢索引：'}
          <input
            value={x1}
            onChange={e => setX1(e.target.value)}
          />
          <table border="1">
            <tbody>
              <tr>
                <th width= "70">項目</th>
                <th width="120">內容</th>
                <th width= "80">索引</th>
                <th width= "70">屬性</th>
                <th width= "70">註記</th>
              </tr>
              <tr>
                <th>{'1 名號'}</th>
                <td>{personX1.name}</td>
                <td>{personX1.x1}</td>
                <td>{personX1.x2 ? stringX2[personX1.x2] : ''}</td>
                <td>-</td>
              </tr>
              <tr>
                <th>{'2 出生'}</th>
                <td>{ personX1.x8 ?? '' }</td>
                <td>-</td>
                <td>({personX1.x9 ?? ' ' })</td>
                <td>{ personX1.x9 ?  '(享年)' : '' }</td>
              </tr>
              <tr>
                <th>{'3 排行'}</th>
                <td>{personX1.x5 ?? ''}</td>
                <td>-</td>
                <td>{personX1.x6 ? stringX6[personX1.x6] : ''}</td>
                <td>-</td>
              </tr>
              <tr>
                <th>{'4 世代'}</th>
                <td>{personX1.x3 ?? ''}
                    {personX1.x3 ? stringX3[personX1.x3] : ''}字輩</td>
                <td>-</td>
                <td>{personX1.x4 ? stringX4[personX1.x4] : ''}</td>
                <td>-</td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <th>{'5 婚配'}</th>
                <td>{personM1.name ?? '-'}</td>
                <td>{personX1.m1 ?? ''}</td>
                <td>{personM1.n1 ? stringN1[personM1.n1]:''}</td>
                <td>{personM1.n2 ? stringN2[personM1.n2]:''}</td>
              </tr>
              <tr>
                <th>{'6 婚配'}</th>
                <td>{personM2.name ?? '-'}</td>
                <td>{personX1.m2 ?? ''}</td>
                <td>{personM2.n1 ? stringN1[personM2.n1]:''}</td>
                <td>{personM2.n2 ? stringN2[personM2.n2]:''}</td>
              </tr>
              <tr>
                <th>{'7 婚主'}</th>
                <td>{personM0.name ?? '-'}</td>
                <td>{personM0.x1 ?? ''}</td>
                <td>{personX1.n1 ? stringN1[personX1.n1]:''}</td>
                <td>{personX1.n2 ? stringN2[personX1.n2]:''}</td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <th>{'11父親'}</th>
                <td>{ personP1.name ?? '-'}</td>
                <td>{ personX1.p1 ?? '' }</td>
                <td>{ personX1.p1 ? stringX2[personP1.x2] : ''}</td>
                <td>[{personP1.x5 ?? ' '}]</td>
              </tr>
              <tr>
                <th>{'12母親'}</th>
                <td>{ personP2.name ?? '-'}</td>
                <td>{ personX1.p2 ?? '' }</td>
                <td>{ personX1.p2 ? stringX2[personP2.x2] : ''}</td>
                <td>[{personP2.x5 ?? ' '}]</td>
              </tr>

              <tr>
                <th>{'13繼承'}</th>
                <td>{personP0.name ?? '-'}</td>
                <td>{personX1.p0 ?? ''}</td>
                <td>{personX1.q1 ? stringQ1[personX1.q1]:''}</td>
                <td>{personX1.q2 ? stringQ2[personX1.q2]:''}</td>
              </tr>
              <tr></tr>
              <tr></tr>
              {(personX1.z1) ? (
              <tr>
                <th>{'21祿位'}</th>
                <td>{ personX1.label }</td>
                <td>{ personX1.z1 ?? '' }-
                    { personX1.z2 ?? '' }-
                    { personX1.z3 ?? '' }
                </td>
                <td>{ personX1.b1 ? '◯'   : '' }</td>
                <td>{ personX1.b1 ? '火化' : '' }</td>
              </tr>) : ''}
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <th>{'備註：'}</th>
                <td>{ personX1.note ?? '' }</td>
              </tr>
              <tr>
                <th>{'更新：'}</th>
                <td>{ personX1.dt ?? '' }</td>
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
