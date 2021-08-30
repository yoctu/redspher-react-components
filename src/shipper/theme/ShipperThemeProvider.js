import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import themeConstants from './themeConstants'

const theme = createTheme({
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
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h2: {
      fontWeight: 'bold',
      color: themeConstants.grey.main,
      fontSize: '32px',
      lineHeight: '39px',
      [`@media only screen and (max-width: ${themeConstants.breakpoints.sm}px)`]:
        {
          fontSize: '22px',
          lineHeight: '26px'
        }
    },
    body2: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: themeConstants.primary.main
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '40px',
        fontSize: '14px',
        textTransform: 'none'
      },
      containedPrimary: {
        color: themeConstants.white.main
      },
      outlinedPrimary: {
        color: themeConstants.black.main,
        '&:hover': {
          backgroundColor: themeConstants.primary.main,
          color: themeConstants.white.main,
          '& .MuiSvgIcon-root > *': {
            stroke: themeConstants.white.main
          }
        }
      },
      textPrimary: {
        color: themeConstants.black.main,
        '&:hover': {
          color: themeConstants.primary.main
        }
      },
      iconSizeLarge: {
        '&> *:first-child': {
          fontSize: '25px'
        }
      }
    },
    MuiRadio: {
      root: {
        '&:disabled': {
          color: themeConstants.grey.main
        }
      },
      colorPrimary: {
        color: themeConstants.primary.main
      }
    },
    MuiChip: {
      root: {
        backgroundColor: themeConstants.green.main,
        color: themeConstants.white.main,
        '&$disabled': {
          backgroundColor: themeConstants.grey.dark,
          opacity: 1
        }
      },
      colorPrimary: {
        backgroundColor: themeConstants.orange.main
      },
      colorSecondary: {
        backgroundColor: themeConstants.secondary.main
      }
    },
    MuiPagination: {
      root: {
        '& .MuiButtonBase-root': {
          color: themeConstants.grey.main,
          '&:hover': {
            color: themeConstants.primary.main
          },
          '& .MuiSvgIcon-root': {
            color: themeConstants.primary.main
          }
        },
        '& .Mui-selected': {
          color: themeConstants.white.main,
          '&:hover': {
            backgroundColor: themeConstants.white.main,
            color: themeConstants.primary.main
          }
        }
      }
    },
    MuiSlider: {
      root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0'
      },
      thumb: {
        color: themeConstants.primary.main
      },
      valueLabel: {
        top: -20,
        '& *': {
          background: 'transparent',
          color: themeConstants.grey.dark,
          fontSize: '12px',
          fontWeight: 'normal'
        }
      },
      track: {
        backgroundColor: themeConstants.primary.main
      },
      rail: {
        opacity: 0.25,
        backgroundColor: themeConstants.primary.main
      }
    },
    MuiCard: {
      root: {
        borderRadius: themeConstants.borderRadius.main,
        border: `1px solid transparent`
      }
    }
  }
})

const ShipperThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ShipperThemeProvider
