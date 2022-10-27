import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { InputLabelProps } from '@mui/material/InputLabel/InputLabel';

interface IrubiwinInputLabel extends InputLabelProps {
  children?: Node;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  htmlFor?: string;
}

/**
 * This is a Mui InputLabel branded for Rubiwin
 *
 * Demos:
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 * - [InputLabel API](https://mui.com/api/input-label/)
 * - inherits [FormLabel API](https://mui.com/api/form-label/)
 */
const RubiwinInputLabel = ({
  children,
  disabled,
  error,
  htmlFor,
  className
}: IrubiwinInputLabel) => (
  <InputLabel
    disabled={disabled}
    error={error}
    htmlFor={htmlFor}
    className={className}
  >
    {children}
  </InputLabel>
);

export default RubiwinInputLabel;
