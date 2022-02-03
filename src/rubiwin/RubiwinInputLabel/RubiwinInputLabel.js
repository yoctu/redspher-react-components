import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@mui/material/InputLabel'

const RubiwinInputLabel = ({
  children,
  disabled,
  error,
  htmlFor,
  className
}) => (
  <InputLabel
    disabled={disabled}
    error={error}
    htmlFor={htmlFor}
    className={className}
  >
    {children}
  </InputLabel>
)

RubiwinInputLabel.propTypes = {
  /** label text */
  children: PropTypes.node,
  /** add a className */
  className: PropTypes.string,
  /** is disabled */
  disabled: PropTypes.bool,
  /** has error state */
  error: PropTypes.bool,
  /** htmlFor */
  htmlFor: PropTypes.string
}

export default RubiwinInputLabel
