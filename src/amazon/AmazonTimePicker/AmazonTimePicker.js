import React from 'react'
import PropTypes from 'prop-types'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider, TimePicker } from '@mui/lab'
import { TextField } from '@mui/material'

/** This is a TimePicker branded for Amazon-Webapp
 * full doc : https://material-ui-pickers.dev/api/TimePicker */
const AmazonTimePicker = ({
  value,
  onClick,
  onChange,
  ampm = false,
  className = 'defaultTimePicker',
  disabled = false,
  helperText = '',
  emptyLabel = '--:--',
  KeyboardButtonProps = {}
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <TimePicker
      ampm={ampm}
      value={value}
      disabled={disabled}
      className={className}
      helperText={helperText}
      emptyLabel={emptyLabel}
      onClick={onClick}
      onChange={onChange}
      KeyboardButtonProps={KeyboardButtonProps}
      renderInput={(props) => <TextField {...props} />}
    />
  </LocalizationProvider>
)

AmazonTimePicker.propTypes = {
  /** time value to display **/
  value: PropTypes.string.isRequired,
  /** function to handle Click behavior **/
  onClick: PropTypes.func.isRequired,
  /** function to handle Input behavior **/
  onChange: PropTypes.func.isRequired,
  /** determines if timepicker is 24h based or in AM/PM format **/
  ampm: PropTypes.bool,
  /** additional classname if you want to overload styles */
  className: PropTypes.string,
  /** disabled RubiwinButton */
  disabled: PropTypes.bool,
  /** overrides the defaut error message */
  helperText: PropTypes.string,
  /** overrides the message displayed when field is empty */
  emptyLabel: PropTypes.string,
  /** style properties used to override  */
  KeyboardButtonProps: PropTypes.object
}

export default AmazonTimePicker
