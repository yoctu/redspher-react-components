import React from 'react'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import E4pTheme from './E4pTheme'

const E4pThemeProvider = ({ children }: any) => {
  // @ts-ignore
  const theme = createTheme(E4pTheme)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default E4pThemeProvider
