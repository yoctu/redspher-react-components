import React, { useState } from 'react';
import MuiPhoneNumber, { MuiPhoneNumberProps } from 'material-ui-phone-number';
import { isValidPhoneNumber } from 'libphonenumber-js';

interface IphoneNumber extends React.FC<MuiPhoneNumberProps> {
  helperText?: string;
  enableValidation?: boolean;
  label: string;
  onChange?: Function;
  name?: string;
  value: string;
  defaultCountry?: string;
}

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

/**
 * This is a MuiPhoneNumber branded for Shipper
 * @param helperText
 * @param enableValidation
 * @param label
 * @param onChange
 * @param name
 * @param value
 * @param defaultCountry
 * @param props
 * @constructor
 */
function PhoneNumber({
  helperText = '',
  enableValidation = false,
  label,
  onChange = () => null,
  name = 'phoneNumber',
  value,
  defaultCountry = 'fr',
  ...props
}: IphoneNumber) {
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
      // @ts-ignore
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

export default PhoneNumber;
