import React from "react";
import RubiwinButton from "./RubiwinButton";
import MailIcon from "../../icons/MailIcon";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

const testProps = {
    text: "Rubiwin",
    onClick: () => {},
    className: "test",
    startIcon: <MailIcon />,
    endIcon: <MailIcon />,
};

/** Snapshots */
test("renders correctly props object", () => {
    const tree = renderer.create(<RubiwinButton {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("is disabled", () => {
    const tree = renderer
        .create(<RubiwinButton text="Rubiwin" disabled />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("is fullWidth", () => {
    const tree = renderer
        .create(<RubiwinButton text="Rubiwin" fullWidth />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("has a link to /test", () => {
    const tree = renderer
        .create(<RubiwinButton text="Rubiwin" href={"/test"} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("should be small", () => {
    const tree = renderer
        .create(<RubiwinButton text="Rubiwin" size={"small"} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("should be large", () => {
    const tree = renderer
        .create(<RubiwinButton text="Rubiwin" size={"large"} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

/** interaction test */
test("should handle click event", () => {
    const MockCallback = jest.fn();
    const wrapper = mount(
        <RubiwinButton text="Rubiwin" onClick={MockCallback} />
    );
    wrapper.simulate("click");
    expect(MockCallback).toHaveBeenCalled();
    wrapper.unmount();
});
