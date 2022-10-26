import React from 'react';
import renderer from 'react-test-renderer';
import RubiwinDateTimePicker from './RubiwinDateTimePicker';

const testProps = {
  label: 'test',
  value: '01/01/2018 01:00',
  onChange: () => '',
  emptyLabel: 'select a date',
  className: 'testClass'
};

it('renders correctly props object', () => {
  const tree = renderer
    .create(<RubiwinDateTimePicker {...testProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
