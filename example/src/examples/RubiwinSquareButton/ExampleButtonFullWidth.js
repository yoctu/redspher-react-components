import React from 'react'
import { RubiwinSquareButton } from 'redspher-components'
import 'redspher-components/dist/index.css'

const sayHello = () => {
  alert('Hello Rubiwin')
}

/** Rubiwin Button full width */
const ExampleButton = () => (
  <RubiwinSquareButton onClick={sayHello} text={'click me'} fullWidth />
)

export default ExampleButton
