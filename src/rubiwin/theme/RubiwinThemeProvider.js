import React from 'react'
import rubiwinBaseTheme from './RubiwinBaseTheme'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const RubiwinThemeProvider = ({ children }) => {
  const theme = createTheme(rubiwinBaseTheme)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default RubiwinThemeProvider
