import React from 'react'
import { RubiwinSquareButton } from 'redspher-components'
import 'redspher-components/dist/index.css'

const sayHello = () => {
  alert('Hello Rubiwin')
}

/** Rubiwin Button disabled */
const ExampleButton = () => (
  <RubiwinSquareButton
    onClick={sayHello}
    text={"you can't click me"}
    disabled
  />
)

export default ExampleButton
