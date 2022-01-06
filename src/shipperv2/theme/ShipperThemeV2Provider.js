import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { orange } from '@mui/material/colors'

export const ShipperThemeV2 = createTheme({
  status: {
    danger: orange[500]
  }
})

export const ShipperThemeProviderV2 = ({
  theme = ShipperThemeV2,
  ...delegated
}) => <ThemeProvider theme={theme} {...delegated} />
