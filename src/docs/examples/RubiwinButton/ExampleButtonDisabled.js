import React from "react";
import RubiwinButton from "../../../components/RubiwinButton";

const sayHello = () => {
    alert("Hello Rubiwin")
}

/** Rubiwin Button disabled */
const ExampleButton = () => (
    <RubiwinButton
        onClick={sayHello}
        text={"you can't click me"}
        disabled
    />
);

export default ExampleButton;
