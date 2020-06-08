import React from "react";
import renderer from "react-test-renderer";
import RubiwinInputField from "./RubiwinInputField";

const testProps = {
    className: "test",
    id: "id",
    name: "name",
    onChange: () => {},
    placeholder: "placeholder",
};

/** Snapshots */
it("renders correctly props object", () => {
    const tree = renderer.create(<RubiwinInputField {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("is disabled", () => {
    const tree = renderer.create(<RubiwinInputField disabled />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("has error state", () => {
    const tree = renderer.create(<RubiwinInputField error />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("is full-width", () => {
    const tree = renderer.create(<RubiwinInputField fullWidth />).toJSON();
    expect(tree).toMatchSnapshot();
});
