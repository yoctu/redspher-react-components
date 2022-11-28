import React from "react";
import PropTypes from "prop-types";
import { Autocomplete, IconButton, TextField, Typography } from "@mui/material";
import themeConstants from "../theme/themeConstants";

const RubiwinAutocomplete = ({
  label,
  placeholder,
  options,
  showErrors,
  hasError,
  helperText,
  name,
  inputType = "text",
  inputLabel = "",
  isLoading = false,
  showLoader = false,
  multiple = false,
  withDelete = false,
  inputClickFunction = () => {},
  inputClickArg = null,
  ...props
}) => {
  const multipleProps = {};

  if (multiple) {
    multipleProps.renderOption = (props, option, { selected }) => (
      <li {...props}>
        <ShipperCheckBox sx={{ mr: "10px" }} checked={selected} size="small" />
        <Typography variant="body2">{option.label}</Typography>
      </li>
    );
  }

  return (
    <Autocomplete
      sx={{
        width: "33%",
        "& .MuiInputBase-root": {
          backgroundColor: `${themeConstants.grey.light}`,
          paddingRight: "0",
        },

        "& .MuiInputLabel-root": {
          paddingLeft: "15px",
          fontSize: "14px",
          lineHeight: "17.07px",
        },

        "& .MuiAutocomplete-inputRoot": {
          paddingBottom: "7px",
          paddingRight: "15px !important",

          "& .MuiInputBase-input": {
            padding: "0 !important",
          },
        },

        "& .&MuiSvgIcon-root": {
          width: "20px",
          height: "20px",
        },

        "& .MuiAutocomplete-popper": {
          boxShadow: "2px 2px 8px 0 #003b811a",
          marginTop: "0",

          "& .MuiListSubheader-root": {
            color: `${themeConstants.black.dark}`,
          },

          "& .MuiAutocomplete-option": {
            color: `${themeConstants.grey.dark}`,
          },
        },
      }}
      multiple={multiple}
      options={options}
      disableClearable
      renderInput={(params) => (
        <TextField
          {...params}
          type={inputType}
          variant="standard"
          label={inputLabel}
          onClick={() => {
            setOpen(!open);
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
            ),
          }}
        />
      )}
      getLimitTagsText={(more) => (
        <Typography variant="body2">(+{more})</Typography>
      )}
      renderTags={(values, getTagProps) => {
        return values.map((value, index) => (
          <Typography
            key={`${value}-${index}`}
            {...getTagProps({ index })}
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {value.label}
            {multiple && withDelete && (
              <IconButton
                sx={{
                  p: 0,
                  ml: 1,
                  mr: 3,
                  "&:hover": { backgroundColor: "transparent" },
                }}
                onClick={getTagProps({ index }).onDelete}
              >
                <ClearIcon
                  primarycolor={themeConstants.primary.main}
                  sx={{
                    width: 16,
                    height: 16,
                  }}
                />
              </IconButton>
            )}
            {!withDelete && values.length - 1 !== index && ","}
          </Typography>
        ));
      }}
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
  showLoader: PropTypes.bool,
  inputType: PropTypes.string,
  inputLabel: PropTypes.string,
};

export default RubiwinAutocomplete;
