import { useState, useMemo } from 'react'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import { routes, navigate } from '@redwoodjs/router'
import { useScaffoldContext, OPTIONS } from './contexts/optionContext'

const PEOPLE_MEMORIAL_TABLET_LABEL_TO = 'peopleMemorialTablet'
const PEOPLE_MEMORIAL_TABLET_LABEL_T1 = '1 祿位表格(T1)'
const PEOPLE_MEMORIAL_TABLET_LABEL_T4 = '2 祿位表格(T4)'
const PEOPLE_MEMORIAL_LIST_LABEL_T1 = '3 祿位清單(T1)'
const PEOPLE_MEMORIAL_LIST_LABEL_T4 = '4 祿位清單(T4)'

const StyledFormControlLabel = styled(FormControlLabel)({
  pointerEvents: 'none',
})

const SystemOptions = () => {
  const [options, _dispatch, getOnChange] = useScaffoldContext()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

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

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id="options-menu-button"
        aria-controls={open ? 'options-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        祿位
      </Button>
      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            navigate(routes[PEOPLE_MEMORIAL_TABLET_LABEL_TO]())
            // navigate(routes.peopleMemorialTablet({ z1:1 }))
            handleClose()
          }}
        >
          {PEOPLE_MEMORIAL_TABLET_LABEL_T1}
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routes.peopleMemorialTablet({ z1:4 }))
            handleClose()
          }}
        >
          {PEOPLE_MEMORIAL_TABLET_LABEL_T4}
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routes.peopleMemorialList())
            // navigate(routes.peopleMemorialList({ z1:1 }))
            handleClose()
          }}
        >
          {PEOPLE_MEMORIAL_LIST_LABEL_T1}
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routes.peopleMemorialList({ z1:4 }))
            handleClose()
          }}
        >
          {PEOPLE_MEMORIAL_LIST_LABEL_T4}
        </MenuItem>

        {OPTIONS.filter((option) => option.category === 'memorialTablet').map(
          (option) => (
            <MenuItem
              key={option.key}
              onClick={getOnMenuItemClicked(option.key)}
            >
              <StyledFormControlLabel
                control={
                  <Checkbox checked={options[option.key]} name={option.key} />
                }
                label={option.label}
              />
            </MenuItem>
          )
        )}
      </Menu>
    </>
  )
}

export default SystemOptions
