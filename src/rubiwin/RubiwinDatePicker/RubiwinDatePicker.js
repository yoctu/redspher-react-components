import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/lab'

import DatePickerIcon from '../../icons/Rubiwin/DatePickerIcon'

const RubiwinDatePicker = ({
  open = false,
  dateFormat = 'DD/MM/YYYY',
  label,
  value,
  onChange,
  id,
  showErrors,
  hasError,
  ...props
}) => {
  const [openLocal, setOpen] = useState(open)
  return (
    <DesktopDatePicker
      open={openLocal}
      inputFormat={dateFormat}
      label={label}
      value={value}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onChange={onChange}
      renderInput={({ error, ...props }) => (
        <TextField
          fullWidth
          variant='standard'
          onClick={() => setOpen(true)}
          id={id}
          error={showErrors && (error || hasError)}
          {...props}
        />
      )}
      components={{
        OpenPickerIcon: DatePickerIcon
      }}
      OpenPickerButtonProps={{
        sx: {
          p: 0,
          mr: 0,
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      }}
      InputProps={{
        sx: {
          input: {
            height: 'auto',
            minHeight: '1.4375em'
          }
        }
      }}
      InputAdornmentProps={{
        sx: {
          height: 'auto',
          width: '1.5rem'
        }
      }}
      {...props}
    />
  )
}

RubiwinDatePicker.propTypes = {
  open: PropTypes.bool,
  dateFormat: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  showErrors: PropTypes.bool
}

export default RubiwinDatePicker
