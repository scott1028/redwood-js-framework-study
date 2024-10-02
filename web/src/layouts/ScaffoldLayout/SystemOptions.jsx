import { useCallback, useState, useRef } from 'react'
import { useMemo } from 'react'

import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
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
  width: '100%',
})

const StyledButton = styled(Button)({
  alignSelf: 'center',
})

const StyledFormControlLabel = styled(FormControlLabel)({
  pointerEvents: 'none',
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
  const inputRef = useRef()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { refetch } = useQuery(QUERY)
  const [options, _dispatch, getOnChange] = useScaffoldContext()
  const handleImport = useCallback(() => {
    const file = event.target.files[0]
    uploadFile(file, 'text/plain', event.target, refetch)
  }, [refetch])

  const handleExport = useCallback(() => {
    // `${location.protocol}//${location.host.split(':')[0]}:8911/api/export`,
    location.href = '/.redwood/functions/api/export'
    handleClose()
  }, [])

  const getOnMenuItemClicked = useMemo(() => {
    const map = new Map()
    return (key) => {
      let fn = map.get(key)
      if (!fn) {
        fn = () => {
          console.debug('!state[key]', [key, !options[key]])
          getOnChange(key)(null, !options[key])
        }
        map.set(key, fn)
      }
      return fn
    }
  }, [getOnChange, options])

  return (
    <StyledMuiFormGroup>
      <Button
        id="options-menu-button"
        aria-controls={open ? 'options-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        選項
      </Button>
      <VisuallyHiddenInput type="file" onChange={handleImport} ref={inputRef} />
      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {OPTIONS.filter((option) => !option.category).map((option) => (
          <MenuItem key={option.key} onClick={getOnMenuItemClicked(option.key)}>
            <StyledFormControlLabel
              control={
                <Checkbox checked={options[option.key]} name={option.key} />
              }
              label={option.label}
            />
          </MenuItem>
        ))}
        <MenuItem
          onClick={(e) => {
            inputRef.current.click()
            handleClose()
            e.stopImmediatePropagation()
          }}
        >
          <ButtonWrapper>
            <StyledButton
              size="small"
              fullWidth
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon size="small" />}
            >
              Import
            </StyledButton>
          </ButtonWrapper>
        </MenuItem>
        <MenuItem onClick={handleExport}>
          <ButtonWrapper>
            <StyledButton
              size="small"
              fullWidth
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudDownloadIcon size="small" />}
            >
              Export
            </StyledButton>
          </ButtonWrapper>
        </MenuItem>
      </Menu>
    </StyledMuiFormGroup>
  )
}

export default SystemOptions
