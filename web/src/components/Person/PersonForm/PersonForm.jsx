import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PersonForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.person?.x1)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="x2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          X2
        </Label>

        <NumberField
          name="x2"
          defaultValue={props.person?.x2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />

        <FieldError name="x2" className="rw-field-error" />

        <Label
          name="x3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          X3
        </Label>

        <NumberField
          name="x3"
          defaultValue={props.person?.x3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />

        <FieldError name="x3" className="rw-field-error" />

        <Label
          name="x4"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          X4
        </Label>

        <NumberField
          name="x4"
          defaultValue={props.person?.x4}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />

        <FieldError name="x4" className="rw-field-error" />

        <Label
          name="x5"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          X5
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
          X6
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
          Name
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
          X8
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
          X9
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
          P1
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
          P2
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
          M1
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
          M2
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
          M3
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
          P0
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
          Q1
        </Label>

        <NumberField
          name="q1"
          defaultValue={props.person?.q1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />

        <FieldError name="q1" className="rw-field-error" />

        <Label
          name="q2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Q2
        </Label>

        <NumberField
          name="q2"
          defaultValue={props.person?.q2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />

        <FieldError name="q2" className="rw-field-error" />

        <Label
          name="m0"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          M0
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
          N1
        </Label>

        <NumberField
          name="n1"
          defaultValue={props.person?.n1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />

        <FieldError name="n1" className="rw-field-error" />

        <Label
          name="n2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          N2
        </Label>

        <NumberField
          name="n2"
          defaultValue={props.person?.n2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />

        <FieldError name="n2" className="rw-field-error" />

        <Label
          name="h1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          H1
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
          Note
        </Label>

        <TextField
          name="note"
          defaultValue={props.person?.note}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'null'}
        />

        <FieldError name="note" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PersonForm
