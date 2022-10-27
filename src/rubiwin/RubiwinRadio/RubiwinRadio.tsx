import React from 'react';
import { Radio } from '@mui/material';
import { RadioProps } from '@mui/material/Radio/Radio';
import RadioBlankIcon from '../../icons/Rubiwin/RadioBlankIcon';
import RadioIcon from '../../icons/Rubiwin/RadioIcon';

interface IrubiwinRadio extends RadioProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  size?: 'small' | 'medium';
  value?: string | number;
  name?: string;
}

/**
 * This is a Mui Radio branded for Rubiwin
 *
 * Demos:
 * - [Radio Buttons](https://mui.com/components/radio-buttons/)
 *
 * API:
 * - [Radio API](https://mui.com/api/radio/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const RubiwinRadio = ({
  checked = false,
  className = '',
  disabled = false,
  size = 'medium',
  value,
  name,
  ...props
}: IrubiwinRadio) => (
  <Radio
    checked={checked}
    className={className}
    disabled={disabled}
    size={size}
    value={value}
    name={name}
    color='primary'
    icon={<RadioBlankIcon />}
    checkedIcon={<RadioIcon />}
    {...props}
  />
);

export default RubiwinRadio;
