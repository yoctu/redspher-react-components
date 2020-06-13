import React from "react";
import RubiwinInputField from "../../../components/RubiwinInputField";

const testProps = {
    className: "test",
    id: "id",
    name: "name",
    onChange: () => {},
    type: "number",
};

/** example with type number */
const ExampleTypeNumber = () => <RubiwinInputField {...testProps} />;

export default ExampleTypeNumber;
