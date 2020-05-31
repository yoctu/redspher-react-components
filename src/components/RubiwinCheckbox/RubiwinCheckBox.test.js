import React from "react";
import renderer from "react-test-renderer";
import RubiwinCheckbox from "./RubiwinCheckbox";

const testProps = {
    checked: false,
    className: "testClass",
    id: "rubiwin",
    inputRed: "ref",
    value: "testValue",
    name: "rubiname",
    onChange: () => {},
};

/** Snapshots */
it("renders correctly props object", () => {
    const tree = renderer.create(<RubiwinCheckbox {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("is checked", () => {
    const tree = renderer.create(<RubiwinCheckbox checked />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("is disabled", () => {
    const tree = renderer.create(<RubiwinCheckbox disabled />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("is small", () => {
    const tree = renderer
        .create(<RubiwinCheckbox size={"small"} {...testProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
