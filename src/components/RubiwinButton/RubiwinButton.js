import React from "react";
import PropTypes from "prop-types";
import NextButton from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core/styles";

import style from "./RubiwinButton.module.scss";

/** This is a RubiwinButton branded for Rubiwin **/
const RubiwinButton = ({
    text,
    onClick,
    className = "",
    disabled = false,
    fullWidth = false,
    href,
    size = "medium",
    endIcon,
    startIcon,
}) => (
    <StylesProvider injectFirst>
        <NextButton
            onClick={onClick}
            className={`${style.button} ${className}`}
            disabled={disabled}
            fullWidth={fullWidth}
            href={href}
            size={size}
            endIcon={endIcon}
            startIcon={startIcon}
        >
            {text}
        </NextButton>
    </StylesProvider>
);

RubiwinButton.propTypes = {
    /** text to display, it can be <Translate> component too */
    text: PropTypes.string.isRequired,
    /** function to handleButton behavior **/
    onClick: PropTypes.func,
    /** additional classname if you want to overload styles */
    className: PropTypes.string,
    /** disabled button */
    disabled: PropTypes.bool,
    /** make the button take the fullWidth of the parent */
    fullWidth: PropTypes.bool,
    /** link to another page */
    href: PropTypes.string,
    /** can be small, medium, large */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /** icon before text */
    startIcon: PropTypes.element,
    /** icon after text */
    endIcon: PropTypes.element,
};

export default RubiwinButton;
