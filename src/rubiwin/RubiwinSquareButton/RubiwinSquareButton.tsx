import React from 'react';
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';
import { darken } from '@mui/material/styles';
import { ExtendButtonBase } from '@mui/material/ButtonBase';
import { ButtonTypeMap } from '@mui/material/Button/Button';
import themeConstants from '../theme/themeConstants';

interface IrubiwinSquareButton extends ExtendButtonBase<ButtonTypeMap> {
  text: string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: Element;
  endIcon?: Element;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: themeConstants.primary.main,
      borderRadius: themeConstants.borderRadius.sm,
      fontFamily: themeConstants.typography.fontFamily,
      fontWeight: '700',
      color: 'white',
      boxShadow: themeConstants.boxShadow.main,
      '&:hover': {
        backgroundColor: darken(themeConstants.primary.main, 0.1)
      }
    },
    disabled: {
      backgroundColor: themeConstants.grey.light,
      boxShadow: 'none'
    }
  })
);

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
const RubiwinSquareButton = ({
  text,
  className = '',
  disabled = false,
  fullWidth = false,
  href,
  size = 'medium',
  endIcon,
  startIcon,
  ...props
}: IrubiwinSquareButton) => {
  const classes = useStyles();

  return (
    <Button
      className={`${className}`}
      disabled={disabled}
      fullWidth={fullWidth}
      href={href}
      size={size}
      endIcon={endIcon}
      startIcon={startIcon}
      classes={{ root: classes.root, disabled: classes.disabled }}
      {...props}
    >
      {text}
    </Button>
  );
};

export default RubiwinSquareButton;
