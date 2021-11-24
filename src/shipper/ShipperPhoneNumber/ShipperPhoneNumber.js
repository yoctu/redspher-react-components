import React, { useEffect, useState, useCallback } from 'react'
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
  allowEmpty,
  helperText,
  // default to there's no error
  isError,
  label,
  onChange: providedOnChange,
  ...delegated
}) {
  const [text, setText] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (allowEmpty && !text) {
      // Empty is always allowed
      setError(false)
      providedOnChange('')
      return
    }

    if (isError(text)) {
      setError(true)
      return
    }
    setError(false)
    providedOnChange(text)
  }, [text, isError, providedOnChange, allowEmpty])

  const onChange = useCallback((value) => {
    setText(value)
  }, [])

  return (
    <MuiPhoneNumber
      disableAreaCodes
      onChange={onChange}
      enableSearchField
      defaultCountry='fr'
      countryCodeEditable
      preferredCountries={defaultPreferredCountries}
      error={error}
      label={label}
      helperText={error && helperText}
      {...delegated}
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
