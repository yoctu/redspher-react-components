import React from 'react';
import renderer from 'react-test-renderer';
import RubiwinMenuItem from './RubiwinMenuItem';

it('renders correctly', () => {
  const tree = renderer
    .create(<RubiwinMenuItem className='testClass' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders as a div', () => {
  const tree = renderer
    .create(<RubiwinMenuItem className='testClass' component='div' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
