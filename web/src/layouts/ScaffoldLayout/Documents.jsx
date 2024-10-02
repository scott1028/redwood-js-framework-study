import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

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

  return (
    <>
      <Button
        id="options-menu-button"
        aria-controls={open ? 'options-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        文件
      </Button>
      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={() => (location.href = 'myDocuments.html')}>DocuMenu</MenuItem> */}
        <MenuItem onClick={() => {window.open('/doc1/index.html'); handleClose() }}>DC1祖譜文件</MenuItem>
        <MenuItem onClick={() => {window.open('/doc2/index.html'); handleClose() }}>DC2宗親風采</MenuItem>
        <MenuItem onClick={() => {window.open('/doc3/index.html'); handleClose() }}>DC3祖籍探索</MenuItem>
        <MenuItem onClick={() => {window.open('/doc4/index.html'); handleClose() }}>DC4義民節慶</MenuItem>
      </Menu>
    </>
  )

}

export default SystemOptions
