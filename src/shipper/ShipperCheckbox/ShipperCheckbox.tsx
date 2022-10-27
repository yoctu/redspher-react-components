import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { CheckBoxOutlineBlankRounded, StopRounded } from '@mui/icons-material';
import { CheckboxProps } from '@mui/material/Checkbox/Checkbox';

interface IiconCheckboxes extends CheckboxProps {
  className?: string;
}

/**
 * This is a Mui Checkbox branded for Shipper
 *
 * Demos:
 * - [Checkboxes](https://mui.com/components/checkboxes/)
 * - [Transfer List](https://mui.com/components/transfer-list/)
 *
 * API:
 * - [Checkbox API](https://mui.com/api/checkbox/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
export default function IconCheckboxes({
  className = '',
  ...delegated
}: IiconCheckboxes) {
  return (
    <Checkbox
      {...delegated}
      className={className}
      color='primary'
      icon={
        <CheckBoxOutlineBlankRounded
          sx={{
            width: (theme) => theme.spacing(2),
            height: (theme) => theme.spacing(2)
          }}
        />
      }
      checkedIcon={
        <React.Fragment>
          <CheckBoxOutlineBlankRounded
            sx={{
              width: (theme) => theme.spacing(2),
              height: (theme) => theme.spacing(2)
            }}
          />
          <StopRounded
            sx={{
              position: 'absolute',
              width: (theme) => `calc(${theme.spacing(2)} - 2px)`,
              height: (theme) => `calc(${theme.spacing(2)} - 2px)`
            }}
          />
        </React.Fragment>
      }
      sx={{
        width: (theme) => theme.spacing(2),
        height: (theme) => theme.spacing(2),
        marginRight: '10px'
      }}
    />
  );
}
