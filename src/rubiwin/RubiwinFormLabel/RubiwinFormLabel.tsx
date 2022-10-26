import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';

interface IrubiwinFormLabel extends FormControlLabelProps {
  checked?: boolean;
  disabled?: boolean;
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top';
  value?: string | number;
  className?: string;
}

/**
 * This is a Mui FormControlLabel branded for Rubiwin
 *
 * Demos:
 * - [Checkboxes](https://mui.com/components/checkboxes/)
 * - [Radio Buttons](https://mui.com/components/radio-buttons/)
 * - [Switches](https://mui.com/components/switches/)
 *
 * API:
 * - [FormControlLabel API](https://mui.com/api/form-control-label/)
 */
const RubiwinFormLabel = ({
  checked,
  disabled,
  labelPlacement,
  value,
  className = '',
  ...props
}: IrubiwinFormLabel) => (
  <FormControlLabel
    checked={checked}
    disabled={disabled}
    labelPlacement={labelPlacement}
    value={value}
    className={`${className}`}
    {...props}
  />
);

export default RubiwinFormLabel;
