import React from "react";
import PropTypes from "prop-types";

/** This is a Button branded for Rubiwin **/
const Button = ({ text, handleButton }) => (
    <button onClick={handleButton}>{text}</button>
);

Button.propTypes = {
    /** text to display, it can be <Translate> component too **/
    text: PropTypes.string.isRequired,
    /** function to handleButton behavior **/
    handleButton: PropTypes.func.isRequired,
};

export default Button;
