import * as React from 'react'
import { FormHelperText, Popover } from '@mui/material'
import WarningIcon from '../../icons/Shipper/WarningIcon'
import themeConstants from '../theme/themeConstants'
import { withStyles } from '@mui/styles'

const PopoverStyled = withStyles({
  paper: {
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
})(Popover)

export default function ShipperErrorPopover({
  className = '',
  open,
  anchorEl,
  handlePopoverClose,
  text,
  ...delegated
}) {
  return (
    <PopoverStyled
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
      {...delegated}
    >
      <WarningIcon primarycolor={themeConstants.secondary.main} />
      <FormHelperText>{text}</FormHelperText>
    </PopoverStyled>
  )
}
