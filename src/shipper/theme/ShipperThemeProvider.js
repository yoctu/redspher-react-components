import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core'
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
