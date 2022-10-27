import React from 'react';
import Button from '@mui/material/Button';
import { darken } from '@mui/material/styles';
import { ExtendButtonBase } from '@mui/material/ButtonBase';
import { ButtonTypeMap } from '@mui/material/Button/Button';

interface IrubiwinButton extends ExtendButtonBase<ButtonTypeMap> {
  text: string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
}

/**
 * This is a Mui Button branded for Rubiwin
 *
 * Demos:
 * - [Button Group](https://mui.com/components/button-group/)
 * - [Buttons](https://mui.com/components/buttons/)
 *
 * API:
 * - [Button API](https://mui.com/api/button/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const RubiwinButton = ({
  text,
  className = '',
  disabled = false,
  fullWidth = false,
  href,
  size = 'medium',
  ...props
}: IrubiwinButton) => (
  <Button
    variant='contained'
    className={className}
    disabled={disabled}
    fullWidth={fullWidth}
    href={href}
    size={size}
    sx={{
      fontFamily: (theme) => theme.typography.fontFamily,
      // @ts-ignore
      fontSize: (theme) => theme.typography.smaller,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: (theme) => theme.palette.primary.main,
      borderRadius: (theme) => theme.spacing(4),
      textTransform: 'capitalize',
      ':hover': {
        backgroundColor: (theme) => darken(theme.palette.primary.main, 0.1)
      },
      ':disabled': {
        // @ts-ignore
        backgroundColor: (theme) => theme.palette.grey.light,
        // @ts-ignore
        border: (theme) => `1px solid ${theme.palette.grey.light}`
      },
      a: {
        color: 'white'
      }
    }}
    {...props}
  >
    {text}
  </Button>
);

export default RubiwinButton;
