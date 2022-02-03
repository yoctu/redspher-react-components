import themeConstants from './themeConstants'
import { darken } from '@mui/material/styles'

const rubiwinBaseTheme = {
  spacing: 4,
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
    h1: {
      fontWeight: 'bold',
      fontSize: '48px',
      lineHeight: '58px',
      [`@media only screen and (max-width: ${themeConstants.breakpoints.sm}px)`]:
        {
          fontSize: '30px',
          lineHeight: '36px'
        }
    },
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
    h3: {
      fontWeight: 'bold',
      color: themeConstants.grey.main,
      fontSize: '24px',
      lineHeight: '29.26px',
      [`@media only screen and (max-width: ${themeConstants.breakpoints.sm}px)`]:
        {
          fontSize: '18px',
          lineHeight: '21.94px'
        }
    },
    h4: {
      fontWeight: 'bold',
      color: themeConstants.grey.main,
      fontSize: '18px',
      lineHeight: '21.94px',
      [`@media only screen and (max-width: ${themeConstants.breakpoints.sm}px)`]:
        {
          fontSize: '16px',
          lineHeight: '19.5px'
        }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        },
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
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&$selected': {
            backgroundColor: themeConstants.primary.main,
            color: themeConstants.white.main,
            '&:hover': {
              backgroundColor: themeConstants.primary.main + 'FF'
            }
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontFamily: themeConstants.typography.fontFamily,
          '&:focus': {
            backgroundColor: `${themeConstants.primary.main}0D`
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        sizeSmall: {
          padding: '6px 12px'
        },
        stickyHeader: {
          backgroundColor: themeConstants.grey.main
        },
        head: {
          backgroundColor: themeConstants.grey.main,
          color: 'white !important',
          borderTop: '0px !important'
        },
        root: {
          color: themeConstants.grey.main + '!important',
          fontSize: '12px !important',
          '&:first-of-type': {
            borderLeft: '1px solid transparent'
          },
          '&:last-of-type': {
            borderRight: '1px solid transparent'
          },
          borderRight: '1px solid ' + themeConstants.grey.lighter,
          borderLeft: '1px solid ' + themeConstants.grey.lighter,
          borderBottom: '1px solid ' + themeConstants.grey.lighter
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: themeConstants.grey.lighter
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: themeConstants.grey.dynamite
          }
        },
        colorPrimary: {
          color: themeConstants.primary.main
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: themeConstants.grey.lighter
        }
      }
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: { color: themeConstants.grey.lighter + '!important', opacity: 1 },
        active: { color: themeConstants.grey.lighter, opacity: 1 },
        icon: { color: themeConstants.grey.lighter, opacity: 1 }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: themeConstants.grey.main,
          textTransform: 'capitalize'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          color: 'white'
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        thumb: {
          backgroundColor: themeConstants.primary.main
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: `${themeConstants.grey.lighter}85`
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderRadius: themeConstants.borderRadius.sm,
          border: `1px solid ${themeConstants.grey.dynamite}`,
          padding: '2px 6px',
          transition: themeConstants.transition.default,
          '&:hover': {
            border: `1px solid ${darken(themeConstants.grey.dynamite, 0.1)}`
          },
          '&.Mui-focused': {
            border: `1px solid ${themeConstants.primary.main}`,
            borderRadius: themeConstants.borderRadius.sm,
            transition: themeConstants.transition.default
          },
          '&.Mui-disabled': {
            backgroundColor: themeConstants.grey.disable,
            cursor: 'not-allowed'
          },
          '&.Mui-error': {
            border: `1px solid ${themeConstants.red.main}`,
            '&:hover': {
              border: `1px solid ${darken(themeConstants.red.main, 0.05)}`
            }
          },
          '&.MuiInput-underline': {
            border: '0'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontWeight: 'bold',
          fontSize: themeConstants.typography.smaller
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          fontSize: themeConstants.typography.small,
          marginLeft: '6px',
          marginBottom: '6px',
          zIndex: '2'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: `${themeConstants.primary.main}08`
          }
        },
        selected: {
          color: 'white',
          backgroundColor: `${themeConstants.primary.main}14`
        }
      }
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            '&:hover': {
              backgroundColor: themeConstants.primary.main
            },
            '&:focus': {
              backgroundColor: themeConstants.primary.main
            }
          }
        }
      }
    }
  }
}

export default rubiwinBaseTheme
