import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from '@mui/material'
import RadioBlankIcon from '../../icons/Rubiwin/RadioBlankIcon'
import RadioIcon from '../../icons/Rubiwin/RadioIcon'

const RubiwinRadio = ({
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
}: any) => (
  <Radio
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
    icon={<RadioBlankIcon />}
    checkedIcon={<RadioIcon />}
    {...props}
  />
)

RubiwinRadio.propTypes = {
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

export default RubiwinRadio
