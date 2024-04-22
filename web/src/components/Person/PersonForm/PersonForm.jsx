import { useRef } from 'react'

import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import clsx from 'clsx'

import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  TextAreaField,
} from '@redwoodjs/forms'

import Select from './components/Select'

export const idTOLabel_x2 = {
  0: '0留白',
  1: '1宗親',
  2: '2配偶',
  3: '3姻親',
}

export const idTOLabel_x3 = {
  /*
  1: ' 1壽字輩',
  2: ' 2仕字輩',
  3: ' 3添字輩',
  4: ' 4江字輩',
  5: ' 5乾字輩',
  6: ' 6坤字輩',
  7: ' 7寬字輩',
  8: ' 8盛字輩',
  9: ' 9永字輩',
  10: '10和字輩',
  11: '11發字輩',
  12: '12登字輩',
  13: '13雲字輩',
  14: '14朝字輩',
  15: '15富字輩',
  16: '16貴字輩',
  17: '17創字輩',
  18: '18新字輩',
  19: '19傳字輩',
  20: '20康字輩',
  21: '21祥字輩',
*/
  1: ' 1壽字',
  2: ' 2仕字',
  3: ' 3添字',
  4: ' 4江字',
  5: ' 5乾字',
  6: ' 6坤字',
  7: ' 7寬字',
  8: ' 8盛字',
  9: ' 9永字',
  10: '10和字',
  11: '11發字',
  12: '12登字',
  13: '13雲字',
  14: '14朝字',
  15: '15富字',
  16: '16貴字',
  17: '17創字',
  18: '18新字',
  19: '19傳字',
  20: '20康字',
  21: '21祥字',
}

export const idTOLabel_x4 = {
  1: '1廣大',
  2: '2廣二',
  3: '3廣三',
  4: '4廣四',
  5: '5廣五',
  6: '6良房',
}

/* - '排行' --- x5 */

export const idTOLabel_x6 = {
  1: '子',
  2: '女',
  3: '♂',
  4: '♀',
}

export const idTOLabel_x81 = {
  1: '甲',
  2: '乙',
  3: '丙',
  4: '丁',
  5: '戊',
  6: '己',
  7: '庚',
  8: '辛',
  9: '壬',
  10: '癸',
}

export const idTOLabel_x82 = {
  1: '子',
  2: '丑',
  3: '寅',
  4: '卯',
  5: '辰',
  6: '巳',
  7: '午',
  8: '未',
  9: '申',
  10: '酉',
  11: '戌',
  12: '亥',
}

export const idTOLabel_x83 = {
  1: '鼠',
  2: '牛',
  3: '虎',
  4: '兔',
  5: '龍',
  6: '蛇',
  7: '馬',
  8: '羊',
  9: '猴',
  10: '雞',
  11: '狗',
  12: '豬',
}

export const idTOLabel_q1 = {
  1: '嫡生',
  2: '入嗣',
  3: '承鼎',
  4: '收養',
  5: '託養',
}

export const idTOLabel_q2 = {
  1: '失婚',
  2: '出嗣',
  3: '失蹤',
  4: '幼亡',
}

export const idTOLabel_n1 = {
  1: '入嫁',
  2: '出嫁',
  3: '入贅',
  4: '出贅',
  5: '平婚',
}

export const idTOLabel_n2 = {
  1: '離婚',
  2: '改嫁',
  3: '失蹤',
  4: '早逝',
}

const PersonForm = (props) => {
  const refFrom = useRef(null)

  const onSubmit = (data) => {
    props.onSave(data, props?.person?.x1)
  }

  return (
    <div className={clsx('rw-form-wrapper', props.className)}>
      {props.children?.(refFrom)}
      <Form onSubmit={onSubmit} error={props.error} ref={refFrom}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <Label
          name="x1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (1) 索引：
        </Label>
        <input
          value={props.person?.x1}
          className="rw-input"
          readOnly
          style={{ backgroundColor: '#00000010' }}
        />
        <Label
          name="x2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (2) 類別：
        </Label>
        <Select
          name="x2"
          defaultValue={props.person?.x2 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 3 }, (_, idx) => (
            <MenuItem key={idx} value={idx}>
              {idTOLabel_x2[idx]}
            </MenuItem>
          ))}
        </Select>
        <Label
          name="x3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (3) 世代：
        </Label>
        <Select
          name="x3"
          defaultValue={props.person?.x3 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 22 }, (_, idx) => (
            <MenuItem key={idx} value={idx}>
              {idTOLabel_x3[idx]}
            </MenuItem>
          ))}
        </Select>
        <Label
          name="x4"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (4) 房脈：
        </Label>
        <Select
          name="x4"
          defaultValue={props.person?.x4 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 7 }, (_, idx) => (
            <MenuItem key={idx} value={idx}>
              {idTOLabel_x4[idx]}
            </MenuItem>
          ))}
        </Select>
        <Label
          name="x5"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (5) 排行：
        </Label>
        <NumberField
          name="x5"
          defaultValue={props.person?.x5}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="x5" className="rw-field-error" />
        <Label
          name="x6"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (6) 性別：
        </Label>
        <Select
          name="x6"
          defaultValue={props.person?.x6 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 3 }, (_, idx) => (
            <MenuItem key={idx} value={idx}>
              {idTOLabel_x6[idx]}
            </MenuItem>
          ))}
        </Select>
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (7) 名字：
        </Label>
        <TextField
          name="name"
          defaultValue={props.person?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="name" className="rw-field-error" />
        <Label
          name="x8"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (8) 出生(西元)
        </Label>
        <NumberField
          name="x8"
          defaultValue={props.person?.x8}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="x8" className="rw-field-error" />
        <Label
          name="x9"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (9) 享年：
        </Label>
        <NumberField
          name="x9"
          defaultValue={props.person?.x9}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="x9" className="rw-field-error" />
        <Label
          name="p1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (10) 父親：
        </Label>
        <NumberField
          name="p1"
          defaultValue={props.person?.p1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="p1" className="rw-field-error" />
        <Label
          name="p2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (11) 母親：
        </Label>
        <NumberField
          name="p2"
          defaultValue={props.person?.p2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="p2" className="rw-field-error" />
        <Label
          name="m1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (12) 婚配：
        </Label>
        <NumberField
          name="m1"
          defaultValue={props.person?.m1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="m1" className="rw-field-error" />
        <Label
          name="m2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (13) 婚配：
        </Label>
        <NumberField
          name="m2"
          defaultValue={props.person?.m2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="m2" className="rw-field-error" />
        <Label
          name="m3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (14) 婚配：
        </Label>
        <NumberField
          name="m3"
          defaultValue={props.person?.m3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="m3" className="rw-field-error" />
        <Label
          name="p0"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (15) 繼承：
        </Label>
        <NumberField
          name="p0"
          defaultValue={props.person?.p0}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="p0" className="rw-field-error" />
        <Label
          name="q1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (16) 屬性：
        </Label>
        <Select
          name="q1"
          defaultValue={props.person?.q1 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 6 }, (_, idx) => (
            <MenuItem key={idx} value={idx}>
              {idTOLabel_q1[idx]}
            </MenuItem>
          ))}
        </Select>
        <Label
          name="q2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (17) 註記：
        </Label>
        <Select
          name="q2"
          defaultValue={props.person?.q2 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 5 }, (_, idx) => (
            <MenuItem key={idx} value={idx}>
              {idTOLabel_q2[idx]}
            </MenuItem>
          ))}
        </Select>
        <Label
          name="m0"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (18) 婚主：
        </Label>
        <NumberField
          name="m0"
          defaultValue={props.person?.m0}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="m0" className="rw-field-error" />
        <Label
          name="n1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (19) 屬性：
        </Label>
        <Select
          name="n1"
          defaultValue={props.person?.n1 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 6 }, (_, idx) => (
            <MenuItem key={idx} value={idx}>
              {idTOLabel_n1[idx]}
            </MenuItem>
          ))}
        </Select>
        <Label
          name="n2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (20) 註記：
        </Label>
        <Select
          name="n2"
          defaultValue={props.person?.n2 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 5 }, (_, idx) => (
            <MenuItem key={idx} value={idx}>
              {idTOLabel_n2[idx]}
            </MenuItem>
          ))}
        </Select>
        <Label
          name="note"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (21) 備註：
        </Label>
        <TextAreaField
          name="note"
          multiple
          defaultValue={props.person?.note}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="note" className="rw-field-error" />
        <Label
          name="z1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (22) 塔號：
        </Label>
        <NumberField
          name="z1"
          defaultValue={props.person?.z1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="z1" className="rw-field-error" />
        <Label
          name="z2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (23) 列號：
        </Label>
        <NumberField
          name="z2"
          defaultValue={props.person?.z2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="z2" className="rw-field-error" />
        <Label
          name="z3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (24) 座號：
        </Label>
        <NumberField
          name="z3"
          defaultValue={props.person?.z3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="z3" className="rw-field-error" />
        <Label
          name="note"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (25) 稱謂：
        </Label>
        <TextAreaField
          name="label"
          multiple
          defaultValue={props.person?.label}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="label" className="rw-field-error" />
        {!props.children && (
          <div className="rw-button-group">
            <Button
              color="primary"
              variant="contained"
              disabled={props.loading}
              type="submit"
            >
              Save
            </Button>
          </div>
        )}
      </Form>
    </div>
  )
}

export default PersonForm
