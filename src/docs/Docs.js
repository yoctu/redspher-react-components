import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import ComponentPage from "./ComponentPage";
import componentData from "../../config/componentData";
import RubiwinTheme from "../theme/rubiwinTheme";
import { ThemeProvider } from "@material-ui/core/styles";

const Docs = () => {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    const component = route
        ? componentData.filter((component) => component.name === route)[0]
        : componentData[0];

    useEffect(() => {
        window.addEventListener("hashchange", () => {
            setRoute(window.location.hash.substr(1));
        });
    }, []);

    return (
        <div>
            <Navigation
                components={componentData.map((component) => component.name)}
            />
            <ThemeProvider theme={RubiwinTheme}>
                <ComponentPage component={component} />
            </ThemeProvider>
        </div>
    );
};

export default Docs;
