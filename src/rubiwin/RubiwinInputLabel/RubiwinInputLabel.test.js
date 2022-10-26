import React from 'react';
import renderer from 'react-test-renderer';
import RubiwinInputLabel from './RubiwinInputLabel';

const testProps = {
  children: 'test text',
  htmlFor: 'textId',
  className: 'addClass'
};

/** Snapshots */
it('renders correctly props object', () => {
  const tree = renderer.create(<RubiwinInputLabel {...testProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('has error', () => {
  const tree = renderer.create(<RubiwinInputLabel error />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('is disabled', () => {
  const tree = renderer.create(<RubiwinInputLabel disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});
