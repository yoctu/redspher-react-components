import { MouseEventHandler } from 'react';
import Input from '@mui/material/Input';
import { InputProps } from '@mui/material/Input/Input';

interface IrubiwinInputField extends InputProps {
  className?: string;
  defaultValue?: any;
  disabled?: boolean;
  error?: boolean;
  endAdornment?: Node;
  fullWidth?: boolean;
  inputProps?: object;
  multiline?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  startAdornment?: Node;
  type?: string;
  value?: any;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

/**
 * This is a Mui Input branded for Rubiwin
 *
 * Demos:
 * - [Text Fields](https://mui.com/components/text-fields/)
 *
 * API:
 * - [Input API](https://mui.com/api/input/)
 * - inherits [InputBase API](https://mui.com/api/input-base/)
 */
const RubiwinInputField = ({
  className = '',
  id,
  defaultValue,
  disabled = false,
  endAdornment,
  error = false,
  fullWidth = false,
  inputProps,
  multiline = false,
  name,
  placeholder,
  readOnly,
  required,
  rows,
  startAdornment,
  type,
  value,
  onClick = () => '',
  ...props
}: IrubiwinInputField) => (
  <Input
    className={`${className}`}
    disableUnderline
    endAdornment={endAdornment}
    id={id}
    defaultValue={defaultValue}
    disabled={disabled}
    error={error}
    fullWidth={fullWidth}
    inputProps={inputProps}
    multiline={multiline}
    name={name}
    placeholder={placeholder}
    readOnly={readOnly}
    required={required}
    rows={rows}
    startAdornment={startAdornment}
    type={type}
    value={value}
    onClick={onClick}
    {...props}
  />
);

export default RubiwinInputField;
