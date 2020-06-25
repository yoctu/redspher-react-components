import React from "react";
import RubiwinSquareButton from "../../../components/RubiwinSquareButton";
import MailIcon from "../../../icons/MailIcon";

const sayHello = () => {
    alert("Hello Rubiwin");
};

/** Rubiwin Button with icon */
const ExampleButton = () => (
    <RubiwinSquareButton
        onClick={sayHello}
        text={"click me"}
        size={"large"}
        startIcon={
            <MailIcon
                style={{
                    color: "white",
                }}
            />
        }
    />
);

export default ExampleButton;
