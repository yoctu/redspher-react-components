import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'
import CheckboxIcon from '../../icons/Rubiwin/CheckboxIcon'
import CheckboxBlankIcon from '../../icons/Rubiwin/CheckboxBlankIcon'
import CheckboxIndeterminateIcon from '../../icons/Rubiwin/CheckboxIndeterminateIcon'

/** this is a Mui Checkbox branded for Rubiwin
 * full dod : https://material-ui.com/api/checkbox/
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
}) => (
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
)

RubiwinCheckbox.propTypes = {
  /** component is checked or not */
  checked: PropTypes.bool,
  /** add a class to overload styles */
  className: PropTypes.string,
  /** disable checkbox */
  disabled: PropTypes.bool,
  /** set id of components */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** on Change */
  onChange: PropTypes.func,
  /** size */
  size: PropTypes.oneOf(['small', 'medium']),
  /** pass a ref to the input element */
  inputRef: PropTypes.string,
  /** value of input */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** name attribute of input */
  name: PropTypes.string
}

export default RubiwinCheckbox
