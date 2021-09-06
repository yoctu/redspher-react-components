import React from 'react'
import rubiwinBaseTheme from './RubiwinBaseTheme'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const RubiwinThemeProvider = ({ children }) => {
  const theme = createMuiTheme(rubiwinBaseTheme)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default RubiwinThemeProvider
