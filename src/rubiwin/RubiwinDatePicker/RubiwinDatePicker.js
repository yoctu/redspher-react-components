import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import DatePickerIcon from '../../icons/Rubiwin/DatePickerIcon'

const RubiwinDatePicker = ({
  open = false,
  dateFormat = 'dd/MM/yyyy',
  label,
  value,
  onChange,
  id,
  showErrors,
  hasError,
  helperText,
  name,
  ...props
}) => {
  const [openLocal, setOpen] = useState(open)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            helperText={helperText}
            name={name}
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
    </LocalizationProvider>
  )
}

RubiwinDatePicker.propTypes = {
  open: PropTypes.bool,
  dateFormat: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  showErrors: PropTypes.bool,
  helperText: PropTypes.string,
  name: PropTypes.string
}

export default RubiwinDatePicker
