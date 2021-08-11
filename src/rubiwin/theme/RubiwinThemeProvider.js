import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import themeConstants from './themeConstants'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeConstants.primary.main,
      light: themeConstants.primary.light,
      dark: themeConstants.primary.dark
    },
    secondary: {
      main: themeConstants.secondary.main,
      light: themeConstants.secondary.light,
      dark: themeConstants.secondary.dark
    },
    tertiary: {
      main: themeConstants.tertiary.main,
      light: themeConstants.tertiary.light,
      dark: themeConstants.tertiary.dark
    },
    grey: {
      main: themeConstants.grey.main,
      light: themeConstants.grey.light,
      lighter: themeConstants.grey.lighter
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
        color: themeConstants.white.main
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
          backgroundColor: themeConstants.primary.main,
          color: themeConstants.white.main,
          '&:hover': {
            backgroundColor: themeConstants.primary.main + 'FF'
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
        color: themeConstants.grey.main + '!important',
        fontSize: '12px !important'
      }
    },
    MuiTableRow: {
      root: {
        '&:nth-of-type(even)': {
          backgroundColor: themeConstants.grey.lighter
        }
      }
    },
    MuiCheckbox: {
      root: {
        color: themeConstants.grey.light
      }
    },
    MuiDivider: {
      root: {
        marginTop: '10px',
        marginBottom: '10px',
        backgroundColor: themeConstants.grey.lighter
      }
    }
  }
})

const RubiwinThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default RubiwinThemeProvider
