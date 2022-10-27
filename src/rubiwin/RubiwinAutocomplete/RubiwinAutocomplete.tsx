import React from 'react';
import {
  Autocomplete,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';

import {
  AutocompleteProps,
  AutocompleteRenderInputParams
} from '@mui/material/Autocomplete/Autocomplete';
import RubiwinCaretBottomIcon from '../../icons/Rubiwin/CaretBottomIcon';
import RubiwinClearIcon from '../../icons/Rubiwin/ClearIcon';
import RubiwinCheckbox from '../RubiwinCheckbox';
import rubiwinBaseTheme from '../theme/RubiwinBaseTheme';

interface IrubiwinAutocomplete
  extends Omit<
    AutocompleteProps<any, any, any, any>,
    'placeholder' | 'renderInput'
  > {
  label?: string | Node;
  placeholder?: string;
  multiple?: boolean;
  hasError?: boolean;
  showErrors?: boolean;
  withDelete?: boolean;
  helperText?: string;
  name?: string;
  isLoading?: boolean;
  showLoader?: boolean;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

/**
 * This is a Mui Autocomplete branded for Rubiwin
 *
 * Demos:
 * - [Autocomplete](https://mui.com/components/autocomplete/)
 *
 * API:
 * - [Autocomplete API](https://mui.com/api/autocomplete/)
 */
const RubiwinAutocomplete = ({
  label,
  placeholder,
  showErrors,
  hasError,
  helperText,
  name,
  isLoading = false,
  showLoader = false,
  multiple = false,
  withDelete = false,
  ...props
}: IrubiwinAutocomplete) => {
  const multipleProps = {};

  if (multiple) {
    // @ts-ignore
    multipleProps.renderOption = (props, option, { selected }) => (
      <li {...props}>
        {/* @ts-ignore */}
        <RubiwinCheckbox sx={{ mr: '10px' }} checked={selected} size='small' />
        <Typography variant='body2'>{option.label}</Typography>
      </li>
    );
  }

  return (
    <Autocomplete
      multiple={multiple}
      disableClearable
      popupIcon={<RubiwinCaretBottomIcon />}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          name={name}
          variant='standard'
          error={showErrors && hasError}
          helperText={helperText}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position='end'>
                {showLoader && isLoading ? (
                  <CircularProgress color='primary' size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </InputAdornment>
            )
          }}
        />
      )}
      getLimitTagsText={(more) => (
        <Typography variant='body2'>(+{more})</Typography>
      )}
      renderTags={(values, getTagProps) =>
        values.map((value, index) => (
          <Typography
            // @ts-ignore
            key={`${value}-${index}`}
            {...getTagProps({ index })}
            variant='body2'
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {/* @ts-ignore */}
            {value.label}
            {multiple && withDelete && (
              <IconButton
                sx={{
                  p: 0,
                  ml: 1,
                  mr: 3,
                  '&:hover': { backgroundColor: 'transparent' }
                }}
                onClick={getTagProps({ index }).onDelete}
              >
                <RubiwinClearIcon
                  primarycolor={rubiwinBaseTheme.palette.error.main}
                  sx={{
                    width: 16,
                    height: 16
                  }}
                />
              </IconButton>
            )}
            {!withDelete && values.length - 1 !== index && ','}
          </Typography>
        ))
      }
      {...multipleProps}
      {...props}
    />
  );
};

export default RubiwinAutocomplete;
