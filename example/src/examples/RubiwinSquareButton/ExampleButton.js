import React from 'react'
import { RubiwinSquareButton } from 'redspher-components'
import 'redspher-components/dist/index.css'

const sayHello = () => {
  alert('Hello Rubiwin')
}

/** This is an example RubiwinButton Branding with an additional class */
const ExampleButton = () => (
  <RubiwinSquareButton
    onClick={sayHello}
    text={'Click me'}
    className={'rubiwin'}
  />
)

export default ExampleButton
