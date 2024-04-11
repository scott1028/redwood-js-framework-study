import { Children } from 'react'

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

const idTOLabel_x2 = {
  0: '刪除',
  1: '宗親',
  2: '配偶',
}

const idTOLabel_x3 = {
  0: null,
  1: '廣一',
  2: '廣二',
  3: '廣三',
  4: '廣四',
  5: '廣五',
  6: '良房',
}

const idTOLabel_x4 = {
  0: null,
  1: '壽字輩',
  2: '仕字輩',
  3: '添字輩',
  4: '江字輩',
  5: '乾字輩',
  6: '坤字輩',
  7: '寬字輩',
  8: '盛字輩',
  9: '永字輩',
  10: '和字輩',
  11: '發字輩',
  12: '登字輩',
  13: '雲字輩',
  14: '朝字輩',
  15: '富字輩',
  16: '貴字輩',
  17: '創字輩',
  18: '新字輩',
  19: '傳字輩',
  20: '康字輩',
  21: '祥字輩',
}

const idTOLabel_x5 = {
  0: null,
  1: '男',
  2: '女',
}

const idTOLabel_q1 = {
  0: null,
  1: '嫡生',
  2: '入嗣',
  3: '承鼎',
  4: '收養',
  5: '託養',
}

const idTOLabel_q2 = {
  0: null,
  1: '失婚',
  2: '出嗣',
  3: '失蹤',
  4: '幼亡',
}

const idTOLabel_n1 = {
  0: null,
  1: '入嫁',
  2: '出嫁',
  3: '入贅',
  4: '出贅',
  5: '平婚',
}

const idTOLabel_n2 = {
  0: null,
  1: '離婚',
  2: '改嫁',
  3: '失蹤',
  4: '早逝',
}

const PersonForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.person?.x1)
  }

  return (
    <div className={clsx('rw-form-wrapper', props.className)}>
      <Form onSubmit={onSubmit} error={props.error}>
        {props.children}
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
          (3) 房脈：
        </Label>
        <Select
          name="x3"
          defaultValue={props.person?.x3 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 7 }, (_, idx) => (
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
          (4) 世代：
        </Label>
        <Select
          name="x4"
          defaultValue={props.person?.x4 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 22 }, (_, idx) => (
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
          (5) 性別：
        </Label>
        <Select
          name="x5"
          defaultValue={props.person?.x5 ?? 'null'}
          emptyAs={'null'}
        >
          <MenuItem value={'null'}>-</MenuItem>
          {Array.from({ length: 3 }, (_, idx) => (
            <MenuItem key={idx} value={idx}>
              {idTOLabel_x5[idx]}
            </MenuItem>
          ))}
        </Select>
        <Label
          name="x6"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (6) 排行：
        </Label>
        <NumberField
          name="x6"
          defaultValue={props.person?.x6}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="x6" className="rw-field-error" />
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
          name="h1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (21) 祿位：
        </Label>
        <NumberField
          name="h1"
          defaultValue={props.person?.h1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />
        <FieldError name="h1" className="rw-field-error" />
        <Label
          name="note"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (22) 備註：
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
          name="h1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          (23) Z1：
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
          (24) Z2：
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
          (25) Z3：
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
          (26) LABEL：
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
