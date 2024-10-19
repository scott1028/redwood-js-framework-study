import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useQuery } from '@redwoodjs/web'
import { QUERY } from 'src/components/Person/PeopleTreeCell'

import Dialog1 from './DBInfo/DialogDBInfo1'
import Dialog2 from './DBInfo/DialogDBInfo2'
import Dialog5 from './DBInfo/DialogDBInfo5'
import Dialog6 from './DBInfo/DialogDBInfo6'
import Dialog10 from './DBInfo/DialogDBInfo10'
import Dialog11 from './DBInfo/DialogDBInfo11'
import Dialog12 from './DBInfo/DialogDBInfo12'
import Dialog21 from './DBInfo/DialogDBInfo21'
import Dialog22 from './DBInfo/DialogDBInfo22'

const SystemOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
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

  const { data: { people } = { people: [] } } = useQuery(QUERY)
    const peopleX2123 = people.filter((person) => +person.x2 > +0)

  return (
    <>
      <Button
        id="options-menu-button"
        aria-controls={open ? 'options-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        資訊({peopleX2123.length})
      </Button>
      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => openDialog('DialogDBInfo1')}>1 名字查詢索引</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBInfo2')}>2 索引查詢細目</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBInfo5')}>5 索引查詢家族五代</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBInfo6')}>6 索引查詢祖輩九代</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBInfo10')}>A0 欄位資料統計</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBInfo11')}>A1 世代屬性統計</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBInfo12')}>A2 世代房別統計</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBInfo21')}>B1 祿位表表徵T1</MenuItem>
        <MenuItem onClick={() => openDialog('DialogDBInfo22')}>B2 祿位表表徵T4</MenuItem>
      </Menu>
      <Dialog1
        open={isDialogOpened === 'DialogDBInfo1'}
        handleClose={closeDialog}
      />
      <Dialog2
        open={isDialogOpened === 'DialogDBInfo2'}
        handleClose={closeDialog}
      />
      <Dialog5
        open={isDialogOpened === 'DialogDBInfo5'}
        handleClose={closeDialog}
      />
      <Dialog6
        open={isDialogOpened === 'DialogDBInfo6'}
        handleClose={closeDialog}
      />
      <Dialog10
        open={isDialogOpened === 'DialogDBInfo10'}
        handleClose={closeDialog}
      />
      <Dialog11
        open={isDialogOpened === 'DialogDBInfo11'}
        handleClose={closeDialog}
      />
      <Dialog12
        open={isDialogOpened === 'DialogDBInfo12'}
        handleClose={closeDialog}
      />
      <Dialog21
        open={isDialogOpened === 'DialogDBInfo21'}
        handleClose={closeDialog}
      />
      <Dialog22
        open={isDialogOpened === 'DialogDBInfo22'}
        handleClose={closeDialog}
      />
    </>
  )
}

export default SystemOptions
