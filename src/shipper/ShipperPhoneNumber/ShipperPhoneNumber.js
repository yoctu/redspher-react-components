import React from 'react'
import MuiPhoneNumber from 'material-ui-phone-number'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  flagButton: {
    marginTop: 0,
    marginBottom: 0
  }
})

function PhoneNumber({
  helperText,
  isError,
  label,
  onChange,
  name = 'phoneNumber'
}) {
  return (
    <MuiPhoneNumber
      disableAreaCodes
      onChange={(value) => {
        const event = {
          target: {
            value: value,
            name: name
          }
        }
        onChange(event)
      }}
      enablesearchfield='true'
      defaultCountry='fr'
      countryCodeEditable
      preferredCountries={defaultPreferredCountries}
      error={isError}
      label={label}
      helperText={isError && helperText}
    />
  )
}

PhoneNumber.proptypes = {
  allowEmpty: PropTypes.bool,
  helperText: PropTypes.string.isRequired,
  isError: PropTypes.func,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

PhoneNumber.defaultProps = {
  allowEmpty: true,
  isError: () => false,
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
