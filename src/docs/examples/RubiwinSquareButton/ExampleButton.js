import React from "react";
import RubiwinSquareButton from "../../../components/RubiwinSquareButton";

const sayHello = () => {
    alert("Hello Rubiwin")
}

/** This is an example RubiwinButton Branding with an additonal class */
const ExampleButton = () => (
    <RubiwinSquareButton
        onClick={sayHello}
        text={"Click me"}
        className={"rubiwin"}
    />
);

export default ExampleButton;
