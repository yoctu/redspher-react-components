import themeConstants from './themeConstants'

const rubiwinBaseTheme = {
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
  overrides: {
    MuiButton: {
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
      sizeSmall: {
        padding: '6px 12px'
      },
      stickyHeader: {
        backgroundColor: themeConstants.grey.main
      },
      root: {
        '&:first-of-type': {
          borderLeft: '1px solid transparent'
        },
        '&:last-of-type': {
          borderRight: '1px solid transparent'
        },
        borderRight: '1px solid ' + themeConstants.grey.lighter,
        borderLeft: '1px solid ' + themeConstants.grey.lighter,
        borderBottom: '1px solid ' + themeConstants.grey.lighter
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
    },
    MuiTableSortLabel: {
      root: { color: themeConstants.grey.lighter + '!important', opacity: 1 },
      active: { color: themeConstants.grey.lighter, opacity: 1 },
      icon: { color: themeConstants.grey.lighter, opacity: 1 }
    },
    MuiFormLabel: {
      root: {
        color: themeConstants.grey.main,
        textTransform: 'capitalize'
      }
    },
    MuiChip: {
      colorPrimary: {
        color: 'white'
      }
    },
    MuiSwitch: {
      thumb: {
        backgroundColor: themeConstants.primary.main
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: `${themeConstants.grey.lighter}85`
      }
    }
  }
}

export default rubiwinBaseTheme
