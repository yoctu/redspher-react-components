import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import E4pTheme from './E4pTheme'

const E4pThemeProvider = ({ children }) => {
  const theme = createMuiTheme(E4pTheme)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default E4pThemeProvider
