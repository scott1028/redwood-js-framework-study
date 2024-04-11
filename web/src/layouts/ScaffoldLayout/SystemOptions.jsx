import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

import { useScaffoldContext, OPTIONS } from './contexts'

const SystemOptions = () => {
  const [state, _dispatch, getOnChange] = useScaffoldContext()
  console.debug('state:', state)
  return (
    <FormGroup row>
      {OPTIONS.map((option) => (
        <FormControlLabel
          key={option.key}
          control={
            <Checkbox
              checked={state[option.key]}
              onChange={getOnChange(option.key)}
              name={option.key}
            />
          }
          label={option.label}
        />
      ))}
    </FormGroup>
  )
}

export default SystemOptions
