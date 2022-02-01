import React from 'react'
import PropTypes from 'prop-types'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { DateTimePicker, LocalizationProvider } from '@mui/lab'
// import DateFnsUtils from '@date-io/date-fns'
import { createTheme, TextField, ThemeProvider } from '@mui/material'

const defaultMaterialTheme = createTheme({
  palette: {
    primary: { main: '#00c3ff' }
  }
})

/** full documentation : https://material-ui-pickers.dev/api/DateTimePicker */
const RubiwinDateTimePicker = ({
  onChange,
  value,
  allowKeyboardControl = true,
  ampm = false,
  disabled = false,
  disableFuture = false,
  disablePast = false,
  emptyLabel = '',
  format = 'dd/MM/yyyy HH:mm',
  label = '',
  maxDate = new Date('2100-01-01'),
  minDate = new Date('1900-01-01'),
  onClose = () => {},
  onError = () => {},
  className = '',
  variant = 'dialog',
  TextFieldComponent,
  ...props
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <ThemeProvider theme={defaultMaterialTheme}>
      <DateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        allowKeyboardControl={allowKeyboardControl}
        ampm={ampm}
        disabled={disabled}
        disableFuture={disableFuture}
        disablePast={disablePast}
        emptyLabel={emptyLabel}
        format={format}
        className={className}
        minDate={minDate}
        maxDate={maxDate}
        onClose={onClose}
        onError={onError}
        variant={variant}
        TextFieldComponent={TextFieldComponent}
        renderInput={(props) => <TextField {...props} />}
        {...props}
      />
    </ThemeProvider>
  </LocalizationProvider>
)

RubiwinDateTimePicker.propTypes = {
  /** onChange callback */
  onChange: PropTypes.func.isRequired,
  /** parsable date */
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date).isRequired,
    PropTypes.string
  ]),
  /** Enables keyboard listener for moving between days in calendar */
  allowKeyboardControl: PropTypes.bool,
  /** 12h/24h view for hour selection clock */
  ampm: PropTypes.bool,
  /** add a className */
  className: PropTypes.string,
  /** Disable picker and text field */
  disabled: PropTypes.bool,
  /** Disable future dates */
  disableFuture: PropTypes.bool,
  /** Disable past dates */
  disablePast: PropTypes.bool,
  /** Message displaying in text field, if null passed (doesn't work in keyboard mode) */
  emptyLabel: PropTypes.string,
  /** Format string */
  format: PropTypes.string,
  /** label text */
  label: PropTypes.string,
  /** Max selectable date */
  maxDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  /** Min selectable date */
  minDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  /** On close callback */
  onClose: PropTypes.func,
  /** Picker container option */
  variant: PropTypes.string,
  /** on error callback */
  onError: PropTypes.func
}

export default RubiwinDateTimePicker
