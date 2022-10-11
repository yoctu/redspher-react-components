import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './RubiwinBaseTheme'

const RubiwinThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default RubiwinThemeProvider
