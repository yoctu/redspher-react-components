import React, { useState } from 'react'

import {
  RubiwinButton,
  RubiwinCheckbox,
  RubiwinFormLabel,
  RubiwinInputField,
  RubiwinInputLabel,
  RubiwinSquareButton
} from 'redspher-components'
import 'redspher-components/dist/index.css'

const App = () => {
  const [checked, setChecked] = useState(true)

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
    alert('Hello Rubiwin')
  }

  return (
    <>
      <RubiwinButton
        text='Create React Library Example 😄'
        onClick={sayHello}
      />
      <RubiwinCheckbox
        onChange={handleChange}
        checked={checked}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        name='rubiwinCheck'
      />
      <RubiwinFormLabel
        control={<RubiwinCheckbox />}
        onChange={handleChange}
        checked={checked}
        name='rubiwin'
        label='Rubiwin'
        labelPlacement='top'
      />
      <RubiwinInputField {...testProps} />
      <RubiwinInputLabel htmlFor='test'>tests</RubiwinInputLabel>
      <RubiwinInputField id='test' />
      <RubiwinSquareButton
        onClick={sayHello}
        text='Click me'
        className='rubiwin'
      />
    </>
  )
}

export default App
