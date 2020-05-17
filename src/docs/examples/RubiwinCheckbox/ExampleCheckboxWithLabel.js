import React, { useState } from "react";

import RubiwinCheckbox from "../../../components/RubiwinCheckbox";
import RubiwinFormLabel from "../../../components/RubiwinFormLabel";

/** This is a Rubiwin checkbox in a form label */
const ExampleCheckboxWithLabel = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <RubiwinFormLabel
            control={<RubiwinCheckbox />}
            onChange={handleChange}
            checked={checked}
            name={"rubiwin"}
            label={"Rubiwin"}
        />
    );
};

export default ExampleCheckboxWithLabel;
