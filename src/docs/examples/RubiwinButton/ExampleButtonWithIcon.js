import React from "react";
import RubiwinButton from "../../../components/RubiwinButton";
import MailIcon from "../../../icons/MailIcon";

const sayHello = () => {
    alert("Hello Rubiwin");
};

/** Rubiwin Button with icon */
const ExampleButton = () => (
    <RubiwinButton
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
