import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { RubiwinBackButton } from '../../index'

configure({ adapter: new Adapter() })

/** Snapshots */
it('renders correctly with string', () => {
  const tree = renderer
    .create(<RubiwinBackButton text='test' onClick={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with element', () => {
  const tree = renderer
    .create(<RubiwinBackButton text={<>test</>} onClick={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

/** interaction test */
it('should handle click event', () => {
  const MockCallback = jest.fn()
  const wrapper = shallow(
    <RubiwinBackButton text='Rubiwin' onClick={MockCallback} />
  )
  wrapper.simulate('click')
  expect(MockCallback).toHaveBeenCalled()
  wrapper.unmount()
})
