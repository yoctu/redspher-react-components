import React from 'react'
import rubiwinBaseTheme from './RubiwinBaseTheme'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const RubiwinThemeProvider = ({ children }) => {
  const theme = createTheme(rubiwinBaseTheme)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default RubiwinThemeProvider
