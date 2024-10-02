import { useState, useMemo } from 'react'

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

import { routes, navigate } from '@redwoodjs/router'

import { useScaffoldContext, OPTIONS } from './contexts/optionContext'
import Dialog1 from './DBRepo/DialogDBRepo1'
import Dialog2 from './DBRepo/DialogDBRepo2'
import Dialog3 from './DBRepo/DialogDBRepo3'
import Dialog6 from './DBRepo/DialogDBRepo6'
import Dialog9 from './DBRepo/DialogDBRepo9'

const StyledFormControlLabel = styled(FormControlLabel)({
  pointerEvents: 'none',
})

const DBRepoItems = () => {
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

  const [isDialogOpened, setIsDialogOpened] = useState('')

  const openDialog = (dialogKey) => {
    setIsDialogOpened(dialogKey)
    handleClose()
  }
  const closeDialog = () => {
    setIsDialogOpened('')
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
        報表
      </Button>
      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            navigate(routes.peopleReport1())
            handleClose()
          }}
        >
          宗親索引總表
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routes.peopleReport2())
            handleClose()
          }}
        >
          宗親娶嫁總表
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routes.peopleReport3())
            handleClose()
          }}
        >
          同名宗親總表
        </MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo1')}>
          D宗親索引總表
        </MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo2')}>
          D宗親娶嫁總表
        </MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo3')}>
          D同名宗親總表
        </MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo6')}>
          D入嗣宗親總表
        </MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo9')}>
          D名字集合
        </MenuItem>
        {OPTIONS.filter((option) => option.category === 'dbInfoReporter').map(
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
      <Dialog1
        open={isDialogOpened === 'DialogDBRepo1'}
        handleClose={closeDialog}
      />
      <Dialog2
        open={isDialogOpened === 'DialogDBRepo2'}
        handleClose={closeDialog}
      />
      <Dialog3
        open={isDialogOpened === 'DialogDBRepo3'}
        handleClose={closeDialog}
      />
      <Dialog6
        open={isDialogOpened === 'DialogDBRepo6'}
        handleClose={closeDialog}
      />
      <Dialog9
        open={isDialogOpened === 'DialogDBRepo9'}
        handleClose={closeDialog}
      />
    </>
  )
}

export default DBRepoItems
