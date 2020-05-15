import React from "react";
import RubiwinButton from "../../../components/RubiwinButton";

const sayHello = () => {
    alert("Hello Rubiwin")
}

/** Rubiwin Button full width */
const ExampleButton = () => (
    <RubiwinButton
        onClick={sayHello}
        text={"click me"}
        fullWidth
    />
);

export default ExampleButton;
