import React, { useState } from "react";

import RubiwinCheckbox from "../../../components/RubiwinCheckbox";

/** This is a disabled Rubiwin checkbox */
const ExampleCheckbox = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <RubiwinCheckbox
            onChange={handleChange}
            checked={checked}
            inputProps={{ "aria-label": "primary checkbox" }}
            name={"rubiwinCheck"}
            disabled
        />
    );
};

export default ExampleCheckbox;
