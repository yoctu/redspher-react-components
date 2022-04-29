import React from 'react'
import PropTypes from 'prop-types'
import RubiwinCaretBottomIcon from '../../icons/Rubiwin/CaretBottomIcon'
import { Autocomplete, TextField, Typography } from '@mui/material'
import RubiwinCheckbox from '../RubiwinCheckbox'

const RubiwinAutocomplete = ({
  label,
  options,
  showErrors,
  hasError,
  multiple = false,
  ...props
}) => {
  const multipleProps = {}

  if (multiple) {
    multipleProps.renderOption = (props, option, { selected }) => (
      <li {...props}>
        <RubiwinCheckbox sx={{ mr: '10px' }} checked={selected} size='small' />
        <Typography variant='body2'>{option.label}</Typography>
      </li>
    )
  }

  return (
    <Autocomplete
      multiple={multiple}
      options={options}
      disableClearable
      popupIcon={<RubiwinCaretBottomIcon />}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant='standard'
          error={showErrors && hasError}
        />
      )}
      getLimitTagsText={(more) => (
        <Typography variant='body2'>(+{more})</Typography>
      )}
      renderTags={(values, getTagProps) => {
        return values.map((value, index) => (
          <Typography
            key={`${value}-${index}`}
            {...getTagProps({ index })}
            variant='body2'
          >
            {value.label}
            {values.length - 1 !== index && ','}
          </Typography>
        ))
      }}
      {...multipleProps}
      {...props}
    />
  )
}

RubiwinAutocomplete.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  options: PropTypes.array,
  multiple: PropTypes.bool,
  hasError: PropTypes.bool,
  showErrors: PropTypes.bool
}

export default RubiwinAutocomplete
