import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ListItemIcon } from '@material-ui/core'

export default function CustomizedMenus({ startIcon, endIcon, text, action }) {
  return (
    <MenuItem onClick={action}>
      {startIcon ? <ListItemIcon>{startIcon}</ListItemIcon> : ''}
      {text ? <ListItemText primary={text} /> : ''}
      {endIcon ? <ListItemIcon>{endIcon}</ListItemIcon> : ''}
    </MenuItem>
  )
}
