import React from 'react'
import renderer from 'react-test-renderer'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { AmazonTimePicker } from '../../index'

configure({ adapter: new Adapter() })

const testProps = {
  ampm: false,
  disabled: false,
  value: '00:00',
  helperText: 'time is invalid',
  emptyLabel: 'no time',
  onClick: jest.fn(),
  onChange: jest.fn()
}

/** Snapshots */
it('renders correctly props object', () => {
  const tree = renderer.create(<AmazonTimePicker {...testProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('has a value', () => {
  const tree = renderer
    .create(
      <AmazonTimePicker
        value={testProps.value}
        onClick={testProps.onClick}
        onChange={testProps.onChange}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('is on 24h', () => {
  const tree = renderer
    .create(
      <AmazonTimePicker
        ampm
        value={testProps.value}
        onClick={testProps.onClick}
        onChange={testProps.onChange}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('is disabled', () => {
  const tree = renderer
    .create(
      <AmazonTimePicker
        disabled
        value={testProps.value}
        onClick={testProps.onClick}
        onChange={testProps.onChange}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
