import React, { useState } from 'react'
import { RubiwinCheckbox } from 'redspher-components'
import 'redspher-components/dist/index.css'

/** This is a Rubiwin checkbox */
const ExampleCheckbox = () => {
  const [checked, setChecked] = useState(true)

  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <RubiwinCheckbox
      onChange={handleChange}
      checked={checked}
      inputProps={{ 'aria-label': 'primary checkbox' }}
      name={'rubiwinCheck'}
    />
  )
}

export default ExampleCheckbox
