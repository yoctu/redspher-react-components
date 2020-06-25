import React from "react";
import RubiwinInputField from "../../../components/RubiwinInputField";
import RubiwinInputLabel from "../../../components/RubiwinInputLabel";

/** Example with label */
const ExampleLabel = () => (
    <>
        <RubiwinInputLabel htmlFor={"test"}>tests</RubiwinInputLabel>
        <RubiwinInputField id={"test"} />
    </>
);

export default ExampleLabel;
