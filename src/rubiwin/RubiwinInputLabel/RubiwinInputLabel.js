import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@mui/material/InputLabel'
import style from './RubiwinInputLabel.module.scss'
import { StylesProvider } from '@mui/styles'

const RubiwinInputLabel = ({
  children,
  disabled,
  error,
  htmlFor,
  className
}) => (
  <StylesProvider injectFirst>
    <InputLabel
      disabled={disabled}
      error={error}
      htmlFor={htmlFor}
      classes={{ root: style.root }}
      className={className}
    >
      {children}
    </InputLabel>
  </StylesProvider>
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
