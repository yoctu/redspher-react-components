import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import themeConstants from './themeConstants'
import { createTheme } from '@material-ui/core'

const theme = createTheme({
  spacing: 1,
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
        margin: 'auto',
        borderRadius: '40px',
        fontSize: '14px',
        textTransform: 'none',
        '&.logoutButton': {
          backgroundColor: 'transparent',
          border: '1px solid ' + themeConstants.white.main,
          color: themeConstants.white.main,
          '&:hover': {
            backgroundColor: themeConstants.white.main,
            color: themeConstants.primary.main,
            '& .MuiSvgIcon-root path:first-child': {
              stroke: themeConstants.primary.main
            }
          }
        }
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
        },
        '& .MuiSvgIcon-root': {
          width: '14px',
          height: '14px'
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
    MuiDivider: {
      root: {
        color: themeConstants.grey.main,
        backgroundColor: themeConstants.grey.main,
        border: `1px solid ${themeConstants.grey.main}`,
        height: '0px',
        opacity: 0.25,
        marginTop: '15px',
        marginBottom: '15px'
      }
    },
    MuiCardContent: {
      root: {
        padding: 20,
        '&:last-child': {
          paddingBottom: 14
        }
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
        border: `1px solid transparent`,
        boxShadow: '2px 2px 8px rgba(0, 59, 129, 0.1)'
      }
    },
    MuiToggleButtonGroup: {
      root: {
        backgroundColor: themeConstants.primary.main,
        borderRadius: '40px',
        width: 'fit-content',
        padding: '2px',
        '& .MuiButtonBase-root': {
          padding: '7.5px 15px',
          borderRadius: '40px !important',
          color: themeConstants.white.main,
          '&:not(.Mui-selected) .MuiSvgIcon-root > *': {
            stroke: themeConstants.white.main
          },
          '& .MuiSvgIcon-root': {
            marginRight: '7px'
          }
        },
        '& .Mui-selected': {
          color: themeConstants.primary.main,
          backgroundColor: themeConstants.white.main,
          borderRadius: '40px !important',
          '&:hover': {
            backgroundColor: themeConstants.white.main
          }
        }
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 'fit-content'
      }
    },
    MuiListItemText: {
      root: {
        minWidth: 'fit-content',
        flex: 'inherit',
        margin: '0 7px'
      }
    },
    MuiFormControl: {
      root: {
        width: '100%',
        '& .MuiFormLabel-root': {
          color: themeConstants.grey.dark,
          zIndex: 2,
          paddingLeft: '15px',
          fontSize: '14px',
          lineHeight: '17.07px',
          '&.Mui-focused, &.MuiFormLabel-filled': {
            color: themeConstants.grey.dark,
            paddingLeft: '0px'
          }
        },
        '& .MuiInputBase-root': {
          padding: '7px 15px',
          backgroundColor: themeConstants.white.main,
          borderRadius: '20px',
          zIndex: 1,
          '&.MuiInput-underline:before': {
            display: 'none'
          },
          '&.MuiInput-underline:after': {
            display: 'none'
          },
          '& input': {
            padding: '0px'
          },
          '&:hover': {
            boxShadow: 'inset 0px 0px 0px 1px ' + themeConstants.grey.main
          },
          '&.Mui-focused': {
            boxShadow: 'inset 0px 0px 0px 1px ' + themeConstants.primary.main
          },
          '& .MuiInputAdornment-root': {
            width: '16px',
            height: '16px',
            '& .MuiSvgIcon-root': {
              width: '16px',
              height: '16px'
            },
            '& .MuiPhoneNumber-flagButton': {
              width: '16px',
              height: '16px'
            }
          },
          '&.Mui-error': {
            boxShadow: 'inset 0px 0px 0px 1px ' + themeConstants.secondary.main,
            '& .MuiSvgIcon-root > *': {
              stroke: themeConstants.secondary.main
            }
          },
          '& .MuiInputBase-inputAdornedStart': {
            marginLeft: '10px'
          }
        }
      }
    },
    MuiPopover: {
      root: {
        '& .MuiPaper-root': {
          maxHeight: '400px',
          borderRadius: '16px',
          '& .MuiListItem-button': {
            margin: '0 5px',
            '&.Mui-selected': {
              borderRadius: '16px'
            },
            '&:hover': {
              borderRadius: '16px'
            }
          }
        }
      }
    }
  }
})

const ShipperThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ShipperThemeProvider
