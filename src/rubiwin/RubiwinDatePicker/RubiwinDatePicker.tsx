import { useState } from 'react';
import { TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker';

import DatePickerIcon from '../../icons/Rubiwin/DatePickerIcon';

interface IrubiwinDatePicker
  extends Omit<DesktopDatePickerProps<any, any>, 'renderInput'> {
  dateFormat?: string;
  hasError?: boolean;
  showErrors?: boolean;
  helperText?: string;
  name?: string;
  locale?: string | object;
  id?: string;
}

/**
 * This is a Mui DesktopDatePicker branded for Rubiwin
 *
 * Demos:
 * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
 *
 * API:
 * - [DesktopDatePicker API](https://mui.com/x/api/date-pickers/desktop-date-picker/)
 */
const RubiwinDatePicker = ({
  open = false,
  dateFormat = 'dd/MM/yyyy',
  id,
  showErrors,
  hasError,
  helperText,
  name,
  locale,
  ...props
}: IrubiwinDatePicker) => {
  const [openLocal, setOpen] = useState(open);
  return (
    <LocalizationProvider adapterLocale={locale} dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        open={openLocal}
        inputFormat={dateFormat}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
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
  );
};

export default RubiwinDatePicker;
