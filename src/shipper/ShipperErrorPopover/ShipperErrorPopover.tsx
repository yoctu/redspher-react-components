import React from 'react';
import { FormHelperText, Popover } from '@mui/material';
import { PopoverProps } from '@mui/material/Popover/Popover';
import WarningIcon from '../../icons/Shipper/WarningIcon';
import themeConstants from '../theme/themeConstants';

interface IshipperErrorPopover extends Omit<PopoverProps, 'open'> {
  className?: any;
  open?: any;
  anchorEl?: any;
  handlePopoverClose?: any;
  text?: any;
}

/**
 * This is a Mui Popover branded for Shipper
 *
 * Demos:
 * - [Menus](https://mui.com/components/menus/)
 * - [Popover](https://mui.com/components/popover/)
 *
 * API:
 * - [Popover API](https://mui.com/api/popover/)
 * - inherits [Modal API](https://mui.com/api/modal/)
 */
export default function ShipperErrorPopover({
  className = '',
  open,
  anchorEl,
  handlePopoverClose,
  text,
  ...delegated
}: IshipperErrorPopover) {
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
  );
}
