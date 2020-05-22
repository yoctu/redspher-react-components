import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import { StylesProvider } from "@material-ui/core/styles";
import style from "./RubiwinCheckbox.module.scss";

const RubiwinCheckbox = ({
    checked = false,
    className = "",
    disabled = false,
    id,
    onChange,
    size = "medium",
    inputRef,
    value,
    name,
    icon,
}) => (
    <StylesProvider injectFirst>
        <Checkbox
            checked={checked}
            className={`${style.checkbox} ${className}`}
            disabled={disabled}
            id={id}
            onChange={onChange}
            size={size}
            inputRef={inputRef}
            value={value}
            name={name}
            icon={icon}
            color={"primary"}
        />
    </StylesProvider>
);

RubiwinCheckbox.propTypes = {
    /** component is checked or not */
    checked: PropTypes.bool.isRequired,
    /** add a class to overload styles */
    className: PropTypes.string,
    /** disable checkbox */
    disabled: PropTypes.bool,
    /** set id of components */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** on Change */
    onChange: PropTypes.func,
    /** size */
    size: PropTypes.oneOf(["small", "medium"]),
    /** pass a ref to the input element */
    inputRef: PropTypes.string,
    /** value of input */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** name attribute of input */
    name: PropTypes.string,
    /** pass a custom icon element */
    icon: PropTypes.element,
};

export default RubiwinCheckbox;
