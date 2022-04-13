import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { TimePicker } from '@mui/lab'

import TimerIcon from '../../icons/Rubiwin/TimerIcon'

const RubiwinTimePicker = ({ label, value, onChange, ...props }) => {
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
      renderInput={(params) => <TextField variant='standard' {...params} />}
      OpenPickerButtonProps={{
        sx: {
          pointerEvents: 'none',
          p: 0,
          mr: 0,
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      }}
      {...props}
    />
  )
}

RubiwinTimePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default RubiwinTimePicker
