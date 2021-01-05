import React from 'react'
import { Button, ThemeProvider } from "@material-ui/core";
import { rubiwinTheme } from 'redspher-components'

const sayHello = () => {
  alert('Hello Rubiwin')
}

/** This is an example RubiwinButton Branding with an additional class */
const ExampleButton = () => (
  <ThemeProvider theme={rubiwinTheme}>
    <Button
      onClick={sayHello}
      className='rubiwin'
      variant='contained'
      color='primary'
    >
      Click me
    </Button>
  </ThemeProvider>
)

export default ExampleButton
