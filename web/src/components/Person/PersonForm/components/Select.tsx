import { useCallback, useMemo } from 'react'

import MuiSelect from '@mui/material/Select'

import { useRegister } from '@redwoodjs/forms'

const TRANSFORMER_MAP = {
  number: (value, emptyAs) => (value === emptyAs ? NaN : +value),
  text: (value, emptyAs) => (value === emptyAs ? NaN : value),
}

const Select = ({
  name,
  validation,
  defaultValue,
  children,
  type,
  emptyAs,
}) => {
  const transformer = useMemo(() => {
    return TRANSFORMER_MAP[type ?? 'text']
  }, [type])
  const register = useRegister({
    name,
    validation: { required: true, valueAsNumber: true, ...validation },
  })

  const onChange = useCallback(
    (e) => {
      register.onChange({
        ...e,
        target: Object.assign(e.target, {
          value: transformer(e.target.value, emptyAs),
        }),
      })
    },
    [register, transformer, emptyAs]
  )

  const onBlur = useCallback(
    (e) => {
      register.onBlur({
        ...e,
        target: Object.assign(e.target, {
          value: transformer(e.target.value, emptyAs),
        }),
      })
    },
    [register, transformer, emptyAs]
  )

  return (
    <>
      <MuiSelect
        {...register}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        style={{ height: 32, marginTop: 8, width: '100%' }}
      >
        {children}
      </MuiSelect>
    </>
  )
}

export default Select
