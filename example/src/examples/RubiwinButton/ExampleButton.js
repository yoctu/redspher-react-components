import React from 'react'
import { Button } from '@material-ui/core'

const sayHello = () => {
  alert('Hello Rubiwin')
}

/** This is an example RubiwinButton Branding with an additonal class */
const ExampleButton = () => (
  <Button
    onClick={sayHello}
    className='rubiwin'
    variant='contained'
    color='primary'
  >
    Click me
  </Button>
)

export default ExampleButton
