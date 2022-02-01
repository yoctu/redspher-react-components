import * as React from 'react'
import { FormHelperText, Popover } from '@mui/material'
import styles from './styles.module.scss'
import WarningIcon from '../../icons/Shipper/WarningIcon'
import themeConstants from '../theme/themeConstants'

export default function ShipperErrorPopover({
  className = '',
  open,
  anchorEl,
  handlePopoverClose,
  text,
  ...delegated
}) {
  return (
    <Popover
      className={className}
      classes={{ paper: styles.paper }}
      open={open}
      onClose={handlePopoverClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      elevation={3}
      disableAutoFocus
      {...delegated}
    >
      <WarningIcon primarycolor={themeConstants.secondary.main} />
      <FormHelperText>{text}</FormHelperText>
    </Popover>
  )
}
