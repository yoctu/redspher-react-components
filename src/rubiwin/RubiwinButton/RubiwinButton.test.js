import React from 'react'
import RubiwinButton from './RubiwinButton'
import MailIcon from '../../icons/MailIcon'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

const testProps = {
  text: 'Rubiwin',
  onClick: () => {},
  className: 'test',
  startIcon: <MailIcon />,
  endIcon: <MailIcon />
}

/** Snapshots */
it('renders correctly props object', () => {
  const tree = renderer.create(<RubiwinButton {...testProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('is disabled', () => {
  const tree = renderer
    .create(<RubiwinButton text='Rubiwin' disabled />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('is fullWidth', () => {
  const tree = renderer
    .create(<RubiwinButton text='Rubiwin' fullWidth />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('has a link to /test', () => {
  const tree = renderer
    .create(<RubiwinButton text='Rubiwin' href='/test' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should be small', () => {
  const tree = renderer
    .create(<RubiwinButton text='Rubiwin' size='small' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should be large', () => {
  const tree = renderer
    .create(<RubiwinButton text='Rubiwin' size='large' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

/** interaction test */
it('should handle click event', () => {
  const MockCallback = jest.fn()
  const wrapper = shallow(
    <RubiwinButton text='Rubiwin' onClick={MockCallback} />
  )
  wrapper.simulate('click')
  expect(MockCallback).toHaveBeenCalled()
  wrapper.unmount()
})
