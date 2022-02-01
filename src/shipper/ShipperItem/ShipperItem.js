import React from 'react'
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material'

export default function CustomizedMenus({ startIcon, endIcon, text, action }) {
  return (
    <MenuItem onClick={action}>
      {startIcon ? <ListItemIcon>{startIcon}</ListItemIcon> : ''}
      {text ? <ListItemText primary={text} /> : ''}
      {endIcon ? <ListItemIcon>{endIcon}</ListItemIcon> : ''}
    </MenuItem>
  )
}
