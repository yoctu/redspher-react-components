import React from "react";
import PropTypes from "prop-types";
import style from "./button.module.scss";

/** This is a Button branded for Rubiwin **/
const Button = ({ text, handleButton, className = "" }) => (
    <button className={`${style.button} ${className}`} onClick={handleButton}>
        {text}
    </button>
);

Button.propTypes = {
    /** text to display, it can be <Translate> component too **/
    text: PropTypes.string.isRequired,
    /** function to handleButton behavior **/
    handleButton: PropTypes.func.isRequired,
    /** additional classname if you want to overload styles **/
    className: PropTypes.string
};

export default Button;
