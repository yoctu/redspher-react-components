import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { DesktopTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import TimerIcon from '../../icons/Rubiwin/TimerIcon'

const RubiwinTimePicker = ({
  label,
  value,
  onChange,
  helperText,
  showErrors,
  hasError,
  id,
  locale,
  ampm = false,
  ...props
}) => {
  return (
    <LocalizationProvider adapterLocale={locale} dateAdapter={AdapterDateFns}>
      <DesktopTimePicker
        ampm={ampm}
        label={label}
        value={value}
        onChange={onChange}
        InputProps={{
          sx: {
            input: {
              height: 'auto',
              minHeight: '1.4375em'
            }
          }
        }}
        components={{
          OpenPickerIcon: TimerIcon
        }}
        renderInput={({ error, ...params }) => {
          return (
            <TextField
              fullWidth
              variant='standard'
              helperText={helperText}
              error={showErrors && (error || hasError)}
              id={id}
              {...params}
            />
          )
        }}
        OpenPickerButtonProps={{
          sx: {
            pointerEvents: 'none',
            p: 0,
            mr: 0,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          },
          tabIndex: -1
        }}
        {...props}
      />
    </LocalizationProvider>
  )
}

RubiwinTimePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.node,
  hasError: PropTypes.bool,
  showErrors: PropTypes.bool,
  ampm: PropTypes.bool,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default RubiwinTimePicker
