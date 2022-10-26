import Checkbox from '@mui/material/Checkbox';
import { CheckboxProps } from '@mui/material/Checkbox/Checkbox';

import CheckboxIcon from '../../icons/Rubiwin/CheckboxIcon';
import CheckboxBlankIcon from '../../icons/Rubiwin/CheckboxBlankIcon';
import CheckboxIndeterminateIcon from '../../icons/Rubiwin/CheckboxIndeterminateIcon';

interface IrubiwinCheckbox extends CheckboxProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  size?: 'small' | 'medium';
  value?: string | number;
  name?: string;
}

/**
 * This is a Mui Checkbox branded for Rubiwin
 *
 * Demos:
 *
 * - [Checkboxes](https://mui.com/components/checkboxes/)
 * - [Transfer List](https://mui.com/components/transfer-list/)
 *
 * API:
 *
 * - [Checkbox API](https://mui.com/api/checkbox/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const RubiwinCheckbox = ({
  checked = false,
  className = '',
  disabled = false,
  id,
  onChange,
  size = 'medium',
  inputRef,
  value,
  name,
  ...props
}: IrubiwinCheckbox) => (
  <Checkbox
    checked={checked}
    className={className}
    disabled={disabled}
    id={id}
    onChange={onChange}
    size={size}
    inputRef={inputRef}
    value={value}
    name={name}
    color='primary'
    icon={<CheckboxBlankIcon />}
    checkedIcon={<CheckboxIcon />}
    indeterminateIcon={<CheckboxIndeterminateIcon />}
    {...props}
  />
);

export default RubiwinCheckbox;
