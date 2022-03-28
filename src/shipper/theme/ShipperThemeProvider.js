import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material'
import ShipperBaseTheme from './ShipperBaseTheme'

export const defaultTheme = createTheme(ShipperBaseTheme)

const ShipperThemeProvider = ({
  theme = defaultTheme,
  children,
  ...delegated
}) => (
  <ThemeProvider theme={theme} {...delegated}>
    {children}
  </ThemeProvider>
)

export default ShipperThemeProvider
