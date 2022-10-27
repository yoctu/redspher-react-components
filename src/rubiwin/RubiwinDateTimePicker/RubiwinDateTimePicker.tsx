import * as React from 'react';
import { TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker/DateTimePicker';

interface IrubiwinDateTimePicker
  extends Omit<DateTimePickerProps<any, any>, 'renderInput'>,
    React.RefAttributes<HTMLDivElement> {
  ampm?: boolean;
  className?: string;
  disabled?: boolean;
  disableFuture?: boolean;
  disablePast?: boolean;
  format?: string;
  label?: string;
  maxDate?: Date | string;
  minDate?: Date | string;
  locale?: string | object;
}

/**
 * This is a Mui DateTimePicker branded for Rubiwin
 *
 * Demos:
 * - [Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Pickers](https://mui.com/x/react-date-pickers/)
 *
 * API:
 * - [DateTimePicker API](https://mui.com/x/api/date-pickers/date-time-picker/)
 */
const RubiwinDateTimePicker = ({
  ampm = false,
  disabled = false,
  disableFuture = false,
  disablePast = false,
  format = 'dd/MM/yyyy HH:mm',
  label = '',
  maxDate = new Date('2100-01-01'),
  minDate = new Date('1900-01-01'),
  className = '',
  locale,
  ...props
}: IrubiwinDateTimePicker) => (
  <LocalizationProvider adapterLocale={locale} dateAdapter={AdapterDateFns}>
    <DateTimePicker
      label={label}
      ampm={ampm}
      disabled={disabled}
      disableFuture={disableFuture}
      disablePast={disablePast}
      inputFormat={format}
      className={className}
      minDate={minDate}
      maxDate={maxDate}
      renderInput={(props) => <TextField {...props} variant='standard' />}
      {...props}
    />
  </LocalizationProvider>
);

export default RubiwinDateTimePicker;
