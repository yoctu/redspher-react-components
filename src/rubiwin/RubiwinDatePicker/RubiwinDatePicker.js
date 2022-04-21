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
      renderInput={(props) => (
        <TextField
          variant='standard'
          onClick={() => setOpen(true)}
          id={id}
          {...props}
        />
      )}
      PaperProps={{
        sx: {
          mt: '15px',
          borderRadius: '6px',
          boxShadow: '6px 6px 18px 2px rgba(0, 0, 0, 0.08)'
        }
      }}
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
  onChange: PropTypes.func
}

export default RubiwinDatePicker
