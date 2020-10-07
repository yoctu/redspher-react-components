import React from 'react'
import renderer from 'react-test-renderer'
import RubiwinSelect from './rubiwinSelect'

const testProps = {
  children: <div></div>,
  className: 'test',
  autoWidth: false,
  id: 'testId',
  onChange: () => {},
  onClose: () => {},
  onOpen: () => {},
  open: true,
  renderValue: (value) => {}
}

it('renders correctly props object', () => {
  const tree = renderer.create(<RubiwinSelect {...testProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('is multiple', () => {
  const tree = renderer.create(<RubiwinSelect multiple />).toJSON()
  expect(tree).toMatchSnapshot()
})
