import React from "react";
import RubiwinInputField from "../../../components/RubiwinInputField";

const testProps = {
    className: "test",
    id: "id",
    name: "name",
    onChange: () => {},
    multiline: true,
    rows: 5,
};

/** Example of text Area */
const ExampleTextArea = () => <RubiwinInputField {...testProps} />;

export default ExampleTextArea;
