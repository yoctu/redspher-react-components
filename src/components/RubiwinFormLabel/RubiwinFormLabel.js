import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";

const RubiwinFormLabel = ({
    control,
    label,
    checked,
    disabled,
    labelPlacement,
    onChange,
    value,
    inputRef,
}) => {
    return (
        <FormControlLabel
            control={control}
            label={label}
            checked={checked}
            disabled={disabled}
            labelPlacement={labelPlacement}
            onChange={onChange}
            value={value}
            inputRef={inputRef}
        />
    );
};

RubiwinFormLabel.propTypes = {
    /** element for which you want to provide a label */
    control: PropTypes.element.isRequired,
    /** the name of the label, it can be a <translate /> */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /** if the children must be checked */
    checked: PropTypes.bool,
    /** if the children me be desabled */
    disabled: PropTypes.bool,
    /** where should be but the label: bottom, end, start, top */
    labelPlacement: PropTypes.oneOf(["bottom", "end", "start", "top"]),
    /** callback when stats is changed */
    onChange: PropTypes.func,
    /** value of the component */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** pass a ref to input element */
    inputRef: PropTypes.string,
};

export default RubiwinFormLabel;
