import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { rubiwinTheme } from 'redspher-components'
import { Button } from '@material-ui/core'

const onClick = () => {
  alert('Hello Rubi')
}

const ExampleRubiwinButton = () => (
  <ThemeProvider theme={rubiwinTheme}>
    <Button variant='contained' color='primary' onClick={onClick}>
      Test button
    </Button>
  </ThemeProvider>
)

export default ExampleRubiwinButton
