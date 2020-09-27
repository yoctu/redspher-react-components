import React, { useState } from 'react'
import { RubiwinCheckbox, RubiwinFormLabel } from 'redspher-components'
import 'redspher-components/dist/index.css'

/** This is a Rubiwin checkbox in a form label */
const ExampleCheckboxWithLabel = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <RubiwinFormLabel
      control={<RubiwinCheckbox />}
      onChange={handleChange}
      checked={checked}
      name={'rubiwin'}
      label={'Rubiwin'}
    />
  )
}

export default ExampleCheckboxWithLabel
