import * as React from 'react';
import { TextField } from '@mui/material';
import { DesktopTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopTimePickerProps } from '@mui/x-date-pickers/DesktopTimePicker/DesktopTimePicker';
import TimerIcon from '../../icons/Rubiwin/TimerIcon';

interface IrubiwinTimePicker
  extends Omit<DesktopTimePickerProps<any, any>, 'renderInput'>,
    React.RefAttributes<HTMLDivElement> {
  label?: string;
  helperText?: string | Node;
  hasError?: boolean;
  showErrors?: boolean;
  ampm?: boolean;
  locale?: string | object;
  id?: string;
  name?: string;
}

/**
 * This is a Mui DesktopTimePicker branded for Rubiwin
 *
 * Demos:
 * - [Time Picker](https://mui.com/x/react-date-pickers/time-picker/)
 *
 * API:
 * - [DesktopTimePicker API](https://mui.com/x/api/date-pickers/desktop-time-picker/)
 */
const RubiwinTimePicker = ({
  label,
  helperText,
  showErrors,
  hasError,
  id,
  locale,
  name,
  ampm = false,
  ...props
}: IrubiwinTimePicker) => (
  <LocalizationProvider adapterLocale={locale} dateAdapter={AdapterDateFns}>
    <DesktopTimePicker
      ampm={ampm}
      label={label}
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
      renderInput={({ error, ...params }) => (
        <TextField
          fullWidth
          variant='standard'
          helperText={helperText}
          error={showErrors && (error || hasError)}
          id={id}
          name={name}
          {...params}
        />
      )}
      OpenPickerButtonProps={{
        sx: {
          pointerEvents: 'none',
          p: 0,
          mr: 0,
          '&:hover': {
            backgroundColor: 'transparent'
          }
        },
        tabIndex: -1
      }}
      {...props}
    />
  </LocalizationProvider>
);

export default RubiwinTimePicker;
