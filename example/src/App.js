import React, { useState } from 'react'

import {
  RubiwinButton,
  RubiwinCheckbox,
  RubiwinFormLabel,
  RubiwinInputField,
  RubiwinInputLabel,
  RubiwinSquareButton,
  RubiwinBackButton,
  AmazonTimePicker,
  RubiwinDateTimePicker
} from 'redspher-components'
import 'redspher-components/dist/index.css'

const App = () => {
  const [checked, setChecked] = useState(true)
  const [time, setTime] = useState(null)
  const [selectedDate, handleDateChange] = useState(
    new Date('2020-10-05T00:00:00.000Z')
  )

  const handleChange = () => {
    setChecked(!checked)
  }
  const testProps = {
    className: 'test',
    id: 'id',
    name: 'name',
    onChange: () => {},
    placeholder: 'placeholder'
  }

  const sayHello = () => {
    window.alert('Hello Rubiwin')
  }

  return (
    <>
      <h1>This is a test for github pages</h1>
      <RubiwinButton text='yes yes' onClick={sayHello} />
      <br />
      <RubiwinCheckbox
        onChange={handleChange}
        checked={checked}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        name='rubiwinCheck'
      />
      <br />
      <RubiwinFormLabel
        control={<RubiwinCheckbox />}
        onChange={handleChange}
        checked={checked}
        name='rubiwin'
        label='Rubiwin'
        labelPlacement='top'
      />
      <br />
      <RubiwinInputField {...testProps} />
      <br />
      <RubiwinInputLabel htmlFor='test'>tests 2</RubiwinInputLabel>
      <br />
      <RubiwinInputField id='test' />
      <br />
      <RubiwinSquareButton
        onClick={sayHello}
        text='Click me'
        className='rubiwin'
      />
      <br />
      <RubiwinBackButton text={<>test</>} onClick={sayHello} />
      <br />
      <RubiwinBackButton text='test string' onClick={sayHello} />
      <br />
      <AmazonTimePicker
        value={time}
        onClick={(event) => event.target.focus()}
        onChange={(value) => setTime(value)}
      />
      <br />
      <RubiwinDateTimePicker
        value={selectedDate}
        onChange={handleDateChange}
        className='test'
        label='test label'
        minDate={new Date('2020-10-05T00:00:00.000Z')}
        maxDate={'10/10/2020'}
      />
      <br />
    </>
  )
}

export default App
