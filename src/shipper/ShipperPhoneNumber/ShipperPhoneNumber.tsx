import { useState } from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';
import PropTypes from 'prop-types';
import { isValidPhoneNumber } from 'libphonenumber-js';

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
];

function PhoneNumber({
  helperText,
  enableValidation,
  label,
  onChange,
  name = 'phoneNumber',
  value,
  defaultCountry = 'fr',
  ...props
}: any) {
  const [error, setError] = useState(false);
  const [countryCode, setCountryCode] = useState(defaultCountry);

  return (
    <MuiPhoneNumber
      {...props}
      sx={{
        '.MuiIconButton-root': {
          marginTop: 0,
          marginBottom: 0,
          '& .margin': {
            width: 16
          }
        }
      }}
      disableAreaCodes
      onChange={(value: any, country: any) => {
        const valid = isValidPhoneNumber(value);
        setError(!valid);
        const event = {
          target: {
            value,
            name,
            validity: {
              valid
            }
          }
        };
        setCountryCode(country.countryCode);
        onChange(event);
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
  );
}

PhoneNumber.propTypes = {
  enableValidation: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired
};

PhoneNumber.defaultProps = {
  enableValidation: false,
  helperText: '',
  name: 'phoneNumber',
  onChange: () => null
};

export default PhoneNumber;
