import { useCallback } from 'react'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import { styled } from '@mui/material/styles'

import { useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Person/PeopleTreeCell'

import { useScaffoldContext, OPTIONS } from './contexts/optionContext'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const StyledMuiFormGroup = styled(FormGroup)`
  flex-wrap: nowrap;
`

const ButtonWrapper = styled('div')({
  display: 'flex',
})

const StyledButton = styled(Button)({
  alignSelf: 'center',
})

const uploadFile = (file, contentType, target, refetch) => {
  let fr = new FileReader()
  fr.onload = async () => {
    const content = fr.result
    target.value = ''
    return fetch(
      // ref: https://redwoodjs.com/docs/how-to/custom-function#creating-a-function
      // `${location.protocol}//${location.host.split(':')[0]}:8911/api/upload`,
      `/.redwood/functions/api/upload`,
      {
        method: 'POST',
        body: content,
        headers: {
          'Content-Type': contentType,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        if (!(response.status >= 200 && response.status < 300)) {
          throw new Error('Server error')
        }
        return response.text()
      })
      .then((_data) => {
        toast.success('File uploaded successfully.', {
          duration: 1500,
        })
        refetch()
      })
      .catch((error) => {
        console.error('Error uploading file:', error)
        toast.error('File uploaded failure.', { duration: 1500 })
      })
  }
  fr.readAsText(file)
}

const SystemOptions = () => {
  const { refetch } = useQuery(QUERY)
  const [state, _dispatch, getOnChange] = useScaffoldContext()
  console.debug('state:', state)
  const handleFileChange = useCallback(() => {
    const file = event.target.files[0]
    console.debug('file:', file)
    uploadFile(file, 'text/plain', event.target, refetch)
  }, [refetch])
  return (
    <StyledMuiFormGroup row>
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
      <ButtonWrapper>
        <StyledButton
          size="small"
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon size="small" />}
        >
          Upload file
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </StyledButton>
      </ButtonWrapper>
    </StyledMuiFormGroup>
  )
}

export default SystemOptions
