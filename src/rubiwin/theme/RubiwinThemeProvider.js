import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const primaryColor = '#00C3FF'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00C3FF',
      light: '#CAF3FF',
      dark: '#006B8D'
    },
    secondary: {
      main: '#00FFF3',
      light: '#70ffff',
      dark: '#00cbc0'
    },
    tertiary: {
      main: '#eb3343',
      light: '#ff6c6e',
      dark: '#b1001c'
    },
    grey: {
      main: '#171F46',
      light: '#8F8F8F',
      lighter: '#F4F4F4'
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(',')
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8px',
        fontSize: '14px',
        textTransform: 'none'
      },
      containedPrimary: {
        color: '#FFF'
      },
      iconSizeLarge: {
        '&> *:first-child': {
          fontSize: '25px'
        }
      }
    },
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: primaryColor,
          color: 'white',
          '&:hover': {
            backgroundColor: primaryColor + 'FF'
          }
        }
      }
    },
    MuiTableCell: {
      head: {
        backgroundColor: '#171F46',
        color: 'white'
      },
      body: {
        color: '#171F46 !important',
        fontSize: '12px !important'
      }
    },
    MuiTableRow: {
      root: {
        '&:nth-of-type(even)': {
          backgroundColor: '#F4F4F4'
        }
      }
    },
    MuiCheckbox: {
      root: {
        color: '#8F8F8F'
      }
    },
    MuiDivider: {
      root: {
        marginTop: '10px',
        marginBottom: '10px',
        backgroundColor: '#F4F4F4'
      }
    }
  }
})

const RubiwinThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default RubiwinThemeProvider
