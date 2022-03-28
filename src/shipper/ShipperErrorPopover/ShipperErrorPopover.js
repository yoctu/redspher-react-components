import * as React from 'react'
import { FormHelperText, Popover } from '@mui/material'
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
      sx={{
        '.MuiPopover-paper': {
          padding: '10px',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          '& svg': {
            marginRight: '5px',
            width: '12px',
            height: '12px'
          },
          '& p': {
            marginTop: '0'
          }
        }
      }}
      {...delegated}
    >
      <WarningIcon primarycolor={themeConstants.secondary.main} />
      <FormHelperText>{text}</FormHelperText>
    </Popover>
  )
}
