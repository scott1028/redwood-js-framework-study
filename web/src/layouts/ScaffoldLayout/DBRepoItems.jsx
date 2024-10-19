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
import Dialog4 from './DBRepo/DialogDBRepo4'
import Dialog5 from './DBRepo/DialogDBRepo5'
import Dialog6 from './DBRepo/DialogDBRepo6'
import Dialog10 from './DBRepo/DialogDBRepo10'
import Dialog11 from './DBRepo/DialogDBRepo11'
import Dialog12 from './DBRepo/DialogDBRepo12'
import Dialog13 from './DBRepo/DialogDBRepo13'
import Dialog14 from './DBRepo/DialogDBRepo14'
import Dialog15 from './DBRepo/DialogDBRepo15'
import Dialog16 from './DBRepo/DialogDBRepo16'

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
{/*
        <MenuItem
          onClick={() => {
            navigate(routes.peopleReport1())
            handleClose()
          }}
        >
          1 宗親索引總表
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routes.peopleReport2())
            handleClose()
          }}
        >
          2 宗親嫁娶總表
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routes.peopleReport3())
            handleClose()
          }}
        >
          3 入嗣宗親總表
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routes.peopleReport4())
            handleClose()
          }}
        >
          4 祿位紀錄總表
        </MenuItem>
*/}
        <MenuItem
          onClick={() => {
            navigate(routes.peopleReport5())
            handleClose()
          }}
        >
          5 更新紀錄總表
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routes.peopleReport6())
            handleClose()
          }}
        >
          6 資料過濾列表
        </MenuItem>
{/*
        <MenuItem onClick={() => openDialog('DialogDBRepo1')}>D1 宗親索引總表</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo2')}>D2 宗親嫁娶總表</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo10')}>D10 靜默清單</MenuItem>
*/}
        <MenuItem onClick={() => openDialog('DialogDBRepo3')}>D3 入嗣宗親總表</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo4')}>D4 祿位紀錄總表</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo5')}>D5 更新紀錄總表</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo6')}>D6 資料過濾列表</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo11')}>D11 宗親出生</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo12')}>D12 仙祖享年</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo13')}>D13 m2LIST</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo14')}>D14 mxfLIST</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo15')}>D15 m2LINK</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBRepo16')}>D16 ##LIST</MenuItem>

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
      <Dialog4
        open={isDialogOpened === 'DialogDBRepo4'}
        handleClose={closeDialog}
      />
      <Dialog5
        open={isDialogOpened === 'DialogDBRepo5'}
        handleClose={closeDialog}
      />
      <Dialog6
        open={isDialogOpened === 'DialogDBRepo6'}
        handleClose={closeDialog}
      />
      <Dialog10
        open={isDialogOpened === 'DialogDBRepo10'}
        handleClose={closeDialog}
      />
      <Dialog11
        open={isDialogOpened === 'DialogDBRepo11'}
        handleClose={closeDialog}
      />
      <Dialog12
        open={isDialogOpened === 'DialogDBRepo12'}
        handleClose={closeDialog}
      />
      <Dialog13
        open={isDialogOpened === 'DialogDBRepo13'}
        handleClose={closeDialog}
      />
      <Dialog14
        open={isDialogOpened === 'DialogDBRepo14'}
        handleClose={closeDialog}
      />
      <Dialog15
        open={isDialogOpened === 'DialogDBRepo15'}
        handleClose={closeDialog}
      />
      <Dialog16
        open={isDialogOpened === 'DialogDBRepo16'}
        handleClose={closeDialog}
      />
    </>
  )
}

export default DBRepoItems
