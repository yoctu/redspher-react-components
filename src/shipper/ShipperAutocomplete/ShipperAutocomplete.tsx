import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Autocomplete, IconButton, TextField, Typography } from '@mui/material';
import themeConstants from '../theme/themeConstants';
import ShipperCheckbox from '../ShipperCheckbox';
import TimerIcon from '../../icons/Shipper/TimerIcon';
import DeleteIcon from '../../icons/Shipper/DeleteIcon';

const ShipperAutoCompletePropTypes = {
  options: PropTypes.array,
  inputType: PropTypes.any,
  inputLabel: PropTypes.string,
  multiple: PropTypes.bool,
  withDelete: PropTypes.bool,
  inputClickFunction: PropTypes.func,
  inputClickArg: PropTypes.any,
  props: PropTypes.any
};

type ShipperAutocompletePropTypesType = InferProps<
  typeof ShipperAutoCompletePropTypes
>;

const ShipperAutocomplete = ({
  options,
  inputType = 'text',
  inputLabel = '',
  multiple = false,
  withDelete = false,
  inputClickFunction = () => null,
  inputClickArg = null,
  ...props
}: ShipperAutocompletePropTypesType) => {
  const multipleProps = {} as unknown as any;

  if (multiple) {
    multipleProps.renderOption = (
      props: any,
      option: any,
      { selected }: { selected: boolean }
    ) => (
      <li {...props}>
        <ShipperCheckbox sx={{ mr: '10px' }} checked={selected} size='small' />
        <Typography variant='body2'>{option.label}</Typography>
      </li>
    );
  }

  return (
    <Autocomplete
      sx={{
        width: '33%',
        '& .MuiInputBase-root': {
          backgroundColor: `${themeConstants.grey.light}`,
          paddingRight: '0'
        },

        '& .MuiInputLabel-root': {
          paddingLeft: '15px',
          fontSize: '14px',
          lineHeight: '17.07px'
        },

        '& .MuiAutocomplete-inputRoot': {
          paddingBottom: '7px',
          paddingRight: '15px !important',

          '& .MuiInputBase-input': {
            padding: '0 !important'
          }
        },

        '& .&MuiSvgIcon-root': {
          width: '20px',
          height: '20px'
        },

        '& .MuiAutocomplete-popper': {
          boxShadow: '2px 2px 8px 0 #003b811a',
          marginTop: '0',

          '& .MuiListSubheader-root': {
            color: `${themeConstants.black.dark}`
          },

          '& .MuiAutocomplete-option': {
            color: `${themeConstants.grey.dark}`
          }
        }
      }}
      multiple={multiple}
      options={options}
      disableClearable
      renderInput={(params) => (
        <TextField
          {...params}
          type={inputType}
          variant='standard'
          label={inputLabel}
          onClick={() => {
            !!inputClickFunction && inputClickFunction(inputClickArg);
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                <IconButton
                  sx={{ p: 0, ml: 1, mr: 0 }}
                  onClick={() => {
                    !!inputClickFunction && inputClickFunction(inputClickArg);
                  }}
                >
                  <TimerIcon
                    primarycolor={themeConstants.black.main}
                    secondarycolor={themeConstants.black.main}
                  />
                </IconButton>
              </React.Fragment>
            )
          }}
        />
      )}
      getLimitTagsText={(more) => (
        <Typography variant='body2'>(+{more})</Typography>
      )}
      renderTags={(values, getTagProps) =>
        values.map((value: any, index: number) => (
          <Typography
            {...getTagProps({ index })}
            variant='body2'
            sx={{ display: 'flex', alignItems: 'center' }}
          >
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
                <DeleteIcon
                  primarycolor={themeConstants.primary.main}
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

ShipperAutocomplete.propTypes = ShipperAutoCompletePropTypes;

export default ShipperAutocomplete;
