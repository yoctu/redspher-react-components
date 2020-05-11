import React, { useState } from "react";
import PropTypes from "prop-types";
import CodeExample from "./CodeExample";

const Example = ({ example, componentName }) => {
    const [showCode, setShowCode] = useState(false);
    const { code, description, name } = example;

    const toggleCode = (event) => {
        event.preventDefault();
        setShowCode(!showCode);
    };
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${componentName}/${name}`)
        .default;

    return (
        <div className="example">
            {description && <h4>{description}</h4>}

            <ExampleComponent />

            <p>
                <a href="#" onClick={toggleCode}>
                    {showCode ? "Hide" : "Show"} Code
                </a>
            </p>

            {showCode && <CodeExample>{code}</CodeExample>}
        </div>
    );
};

Example.propTypes = {
    example: PropTypes.object.isRequired,
    componentName: PropTypes.string.isRequired,
};

export default Example;
