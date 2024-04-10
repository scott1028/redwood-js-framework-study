import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const PositionForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.position?.id)
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
          name="x10"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          X10
        </Label>

        <NumberField
          name="x10"
          defaultValue={props.position?.x10}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="x10" className="rw-field-error" />

        <Label
          name="x11"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          X11
        </Label>

        <NumberField
          name="x11"
          defaultValue={props.position?.x11}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="x11" className="rw-field-error" />

        <Label
          name="x12"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          X12
        </Label>

        <NumberField
          name="x12"
          defaultValue={props.position?.x12}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="x12" className="rw-field-error" />

        <Label
          name="x3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          X3
        </Label>

        <NumberField
          name="x3"
          defaultValue={props.position?.x3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          defaultValue={props.position?.x4}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          defaultValue={props.position?.x5}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="x5" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.position?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="personal"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Personal
        </Label>

        <NumberField
          name="personal"
          defaultValue={props.position?.personal}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="personal" className="rw-field-error" />

        <Label
          name="checked"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checked
        </Label>

        <CheckboxField
          name="checked"
          defaultChecked={props.position?.checked}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="checked" className="rw-field-error" />

        <Label
          name="deleted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted
        </Label>

        <CheckboxField
          name="deleted"
          defaultChecked={props.position?.deleted}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="deleted" className="rw-field-error" />

        <Label
          name="note"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Note
        </Label>

        <TextField
          name="note"
          defaultValue={props.position?.note}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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

export default PositionForm
