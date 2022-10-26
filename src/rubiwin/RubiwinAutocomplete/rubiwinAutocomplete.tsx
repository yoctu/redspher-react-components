import PropTypes from 'prop-types';
import {
  Autocomplete,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';

import RubiwinCaretBottomIcon from '../../icons/Rubiwin/CaretBottomIcon';
import RubiwinClearIcon from '../../icons/Rubiwin/ClearIcon';
import RubiwinCheckbox from '../RubiwinCheckbox';
import rubiwinBaseTheme from '../theme/RubiwinBaseTheme';

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
  options,
  showErrors,
  hasError,
  helperText,
  name,
  isLoading = false,
  showLoader = false,
  multiple = false,
  withDelete = false,
  ...props
}: any) => {
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
      options={options}
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

RubiwinAutocomplete.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  options: PropTypes.array,
  multiple: PropTypes.bool,
  hasError: PropTypes.bool,
  showErrors: PropTypes.bool,
  withDelete: PropTypes.bool,
  helperText: PropTypes.string,
  name: PropTypes.string,
  isLoading: PropTypes.bool,
  showLoader: PropTypes.bool
};

export default RubiwinAutocomplete;
