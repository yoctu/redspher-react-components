import React from 'react'
import rubiwinBaseTheme from './RubiwinBaseTheme'
import { createTheme, ThemeProvider } from '@material-ui/core'

const RubiwinThemeProvider = ({ children }) => {
  const theme = createTheme(rubiwinBaseTheme)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default RubiwinThemeProvider
