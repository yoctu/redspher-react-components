import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { TimePicker } from '@mui/lab'

import TimerIcon from '../../icons/Rubiwin/TimerIcon'

const RubiwinTimePicker = ({
  label,
  value,
  onChange,
  helperText,
  showErrors,
  hasError,
  id,
  ...props
}) => {
  return (
    <TimePicker
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
        tabindex: -1
      }}
      {...props}
    />
  )
}

RubiwinTimePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.node,
  hasError: PropTypes.bool,
  showErrors: PropTypes.bool
}

export default RubiwinTimePicker
