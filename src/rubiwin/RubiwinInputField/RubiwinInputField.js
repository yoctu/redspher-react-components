import React from 'react'
import Input from '@material-ui/core/Input'
import PropTypes from 'prop-types'
import style from './RubiwinInputField.module.scss'

import { StylesProvider } from '@material-ui/core/styles'

/** this is a simple input
 * full doc: https://material-ui.com/api/input/
 * */

const RubiwinInputField = ({
  className = '',
  id,
  defaultValue,
  disabled = false,
  endAdornment,
  error = false,
  fullWidth = false,
  inputProps,
  inputRef,
  multiline = false,
  name,
  onChange,
  placeholder,
  readOnly,
  required,
  rows,
  rowsMax,
  startAdornment,
  type,
  value,
  onClick,
  ...props
}) => (
  <StylesProvider injectFirst>
    <Input
      className={`${className}`}
      classes={{
        root: style.root,
        focused: style.focused,
        disabled: style.disabled,
        error: style.error
      }}
      disableUnderline
      endAdornment={endAdornment}
      id={id}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      inputProps={inputProps}
      inputRef={inputRef}
      multiline={multiline}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      rows={rows}
      rowsMax={rowsMax}
      startAdornment={startAdornment}
      type={type}
      value={value}
      onClick={onClick}
      {...props}
    />
  </StylesProvider>
)

RubiwinInputField.propTypes = {
  /** add a class to field */
  className: PropTypes.string,
  /** add an id to input */
  defaultValue: PropTypes.any,
  /** disable input */
  disabled: PropTypes.bool,
  /** error state */
  error: PropTypes.bool,
  /** add end adornment */
  endAdornment: PropTypes.node,
  /** fullWidth */
  fullWidth: PropTypes.bool,
  /** Attributes applied to the input element */
  inputProps: PropTypes.object,
  /** pass a ref to input element */
  inputRef: PropTypes.string,
  /** If true, a textarea element will be rendered. */
  multiline: PropTypes.bool,
  /** Name attribute of the input element. */
  name: PropTypes.string,
  /** onChange callback */
  onChange: PropTypes.func,
  /** placeholder */
  placeholder: PropTypes.string,
  /** readOnly */
  readOnly: PropTypes.bool,
  /** required */
  required: PropTypes.bool,
  /** Number of rows to display when multiline option is set to true. */
  rows: PropTypes.number,
  /** Maximum number of rows to display when multiline option is set to true. */
  rowsMax: PropTypes.number,
  /** add end adornment */
  startAdornment: PropTypes.node,
  /** Type of the input element. It should be a valid HTML5 input type. */
  type: PropTypes.string,
  /** value */
  value: PropTypes.any,
  /** on click callback */
  onClick: PropTypes.func
}

export default RubiwinInputField
