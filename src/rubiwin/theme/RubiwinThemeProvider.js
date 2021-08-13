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
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h2: {
      fontWeight: 'bold',
      color: themeConstants.grey.main,
      fontSize: '32px',
      lineHeight: '39px',
      [`@media only screen and (max-width: ${themeConstants.breakpoints.sm}px)`]: {
        fontSize: '22px',
        lineHeight: '26px'
      }
    }
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
      root: {
        '&:first-of-type': {
          borderLeft: '1px solid transparent'
        },
        '&:last-of-type': {
          borderRight: '1px solid transparent'
        }
      },
      head: {
        backgroundColor: themeConstants.grey.main,
        color: 'white',
        borderTop: '0px !important'
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
