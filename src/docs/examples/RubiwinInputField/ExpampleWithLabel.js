import React from "react";
import RubiwinInputField from "../../../components/RubiwinInputField";
import InputLabel from "@material-ui/core/InputLabel";

const ExampleWithLabel = () => (
    <>
        <InputLabel htmlFor={"test"}>tests</InputLabel>
        <RubiwinInputField id={"test"}/>
    </>
);

export default ExampleWithLabel;
