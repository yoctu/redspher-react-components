import React from 'react'
import { RubiwinButton, MailIcon } from 'redspher-components'
import 'redspher-components/dist/index.css'

const sayHello = () => {
  alert('Hello Rubiwin')
}

/** Rubiwin Button with icon */
const ExampleButton = () => (
  <RubiwinButton
    onClick={sayHello}
    text={'click me'}
    size={'large'}
    startIcon={
      <MailIcon
        style={{
          color: 'white'
        }}
      />
    }
  />
)

export default ExampleButton
