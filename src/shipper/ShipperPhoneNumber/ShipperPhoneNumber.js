import React, { useState } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number'
import PropTypes from 'prop-types'
import withStyles from '@mui/styles/withStyles'
import { isValidPhoneNumber } from 'libphonenumber-js'

const styles = () => ({
  flagButton: {
    marginTop: 0,
    marginBottom: 0,
    '& .margin': {
      width: '16px'
    }
  }
})

function PhoneNumber({
  helperText,
  enableValidation,
  label,
  onChange,
  name = 'phoneNumber',
  value,
  ...props
}) {
  const [error, setError] = useState(false)
  const [countryCode, setCountryCode] = useState('fr')

  return (
    <MuiPhoneNumber
      {...props}
      disableAreaCodes
      onChange={(value, country) => {
        const event = {
          target: {
            value: value,
            name: name
          }
        }
        setCountryCode(country.countryCode)
        onChange(event)
      }}
      onBlur={(event) => {
        setError(!isValidPhoneNumber(event.target.value))
      }}
      enablesearchfield='true'
      value={value}
      defaultCountry={countryCode}
      countryCodeEditable
      preferredCountries={defaultPreferredCountries}
      error={enableValidation && error}
      label={label}
      helperText={enableValidation && error && helperText}
    />
  )
}

PhoneNumber.proptypes = {
  enableValidation: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired
}

PhoneNumber.defaultProps = {
  enableValidation: false,
  helperText: '',
  name: 'phoneNumber',
  onChange: () => null
}

export default withStyles(styles)(PhoneNumber)

export const defaultPreferredCountries = [
  'at',
  'be',
  'bg',
  'cy',
  'cz',
  'de',
  'dk',
  'ee',
  'es',
  'fi',
  'fr',
  'gb',
  'gr',
  'hu',
  'hr',
  'ie',
  'it',
  'lt',
  'lu',
  'lv',
  'mt',
  'nl',
  'pl',
  'pt',
  'ro',
  'se',
  'si',
  'sk'
]
