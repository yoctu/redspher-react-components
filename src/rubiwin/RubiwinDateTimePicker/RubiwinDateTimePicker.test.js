import React from 'react'
import renderer from 'react-test-renderer'
import RubiwinDateTimePicker from './RubiwinDateTimePicker'

const testProps = {
  label: 'test',
  value: new Date('2018-01-01T00:00:00.000Z').toISOString(),
  onChange: () => {},
  emptyLabel: 'select a date',
  className: 'testClass'
}

it('renders correctly props object', () => {
  const tree = renderer
    .create(<RubiwinDateTimePicker {...testProps} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
