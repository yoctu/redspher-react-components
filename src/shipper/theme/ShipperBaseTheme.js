import themeConstants, { colors } from './themeConstants'

const ShipperBaseTheme = {
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  palette: colors,
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    color: themeConstants.black.dark,
    sizes: ['10px', '12px', '14px', '18px', '24px'],
    lineHeights: ['14.63px', '16px', '17.07px', '24px', '29.26px'],
    h1: {
      fontWeight: 900,
      color: themeConstants.black.dark,
      fontSize: '36px',
      lineHeight: '43.88px'
    },
    h2: {
      fontWeight: 'bold',
      color: themeConstants.black.dark,
      fontSize: '32px',
      lineHeight: '39.01px'
    },
    h3: {
      fontWeight: 'bold',
      color: themeConstants.black.dark,
      fontSize: '24px',
      lineHeight: '29.26px'
    },
    h4: {
      fontWeight: 'bold',
      color: themeConstants.black.dark,
      fontSize: '20px',
      lineHeight: '24.38px'
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '15px',
      lineHeight: '22px',
      color: themeConstants.black.dark
    },
    body2: {
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '17.07px',
      color: themeConstants.black.dark
    },
    subtitle1: {
      color: themeConstants.black.dark,
      fontSize: '18px',
      lineHeight: '24px'
    },
    caption: {
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '14.63px',
      color: themeConstants.black.dark
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: 'auto',
          borderRadius: '40px',
          fontSize: '14px',
          textTransform: 'none',
          height: 31,
          boxShadow: 'none',
          '&.logoutButton': {
            backgroundColor: 'transparent',
            border: '1px solid ' + themeConstants.white.main,
            color: themeConstants.white.main,
            '&:hover': {
              backgroundColor: themeConstants.white.main,
              color: themeConstants.primary.main,
              '& .MuiSvgIcon-root path:first-of-type': {
                stroke: themeConstants.primary.main
              }
            }
          }
        },
        containedPrimary: {
          color: themeConstants.white.main,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          },
          '&.Mui-disabled': {
            backgroundColor: themeConstants.grey.main,
            color: themeConstants.white.main
          }
        },
        outlinedPrimary: {
          color: themeConstants.black.main,
          '&:hover': {
            backgroundColor: themeConstants.primary.main,
            color: themeConstants.white.main,
            '& .MuiSvgIcon-root > *': {
              stroke: themeConstants.white.main
            }
          },
          '&.Mui-disabled': {
            borderColor: themeConstants.grey.main,
            color: themeConstants.grey.main,
            '& .MuiSvgIcon-root > *': {
              stroke: themeConstants.grey.main
            }
          }
        },
        textPrimary: {
          color: themeConstants.black.main,
          '&:hover': {
            color: themeConstants.primary.main
          },
          '&.Mui-disabled': {
            color: themeConstants.grey.main,
            '& .MuiSvgIcon-root > *': {
              stroke: themeConstants.grey.main
            }
          }
        },
        iconSizeLarge: {
          '&> *:first-of-type': {
            fontSize: '25px'
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
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
      }
    },
    PrivateRadioButtonIcon: {
      styleOverrides: {
        root: {
          '&:disabled': {
            color: themeConstants.grey.main
          },
          '& svg.MuiSvgIcon-root': {
            width: '14px !important',
            height: '14px !important'
          }
        },
        colorPrimary: {
          color: themeConstants.primary.main
        }
      }
    },
    MuiChip: {
      styleOverrides: {
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
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          color: themeConstants.grey.main,
          backgroundColor: themeConstants.grey.main,
          border: `1px solid ${themeConstants.grey.main}`,
          height: '0px',
          opacity: 0.25,
          marginTop: '15px',
          marginBottom: '15px'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          height: '100%',
          boxSizing: 'border-box',
          padding: 20,
          '&:last-child': {
            paddingBottom: 14
          }
        }
      }
    },
    MuiPagination: {
      styleOverrides: {
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
          '& .MuiPaginationItem-root.Mui-selected': {
            color: themeConstants.white.main,
            '&:hover': {
              backgroundColor: themeConstants.white.main,
              color: themeConstants.primary.main
            }
          }
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: themeConstants.primary.main,
          height: 1,
          padding: '15px 0'
        },
        thumb: {
          color: themeConstants.primary.main,
          width: '10px',
          height: '10px',
          '&.Mui-disabled': {
            color: themeConstants.grey.main
          }
        },
        valueLabel: {
          top: -20,
          background: 'transparent',
          '& *': {
            background: 'transparent',
            color: themeConstants.grey.dark,
            fontSize: '12px',
            fontWeight: 'normal'
          },
          '&.MuiSlider-valueLabelOpen': {
            transform: 'translateY(-10px) scale(1)'
          }
        },
        track: {
          backgroundColor: themeConstants.primary.main,
          border: 'none'
        },
        rail: {
          opacity: 0.25,
          backgroundColor: themeConstants.primary.main
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: themeConstants.borderRadius.main,
          border: `1px solid transparent`,
          boxShadow: '2px 2px 8px rgba(0, 59, 129, 0.1)',
          height: '100%'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          height: '100%'
        }
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: themeConstants.primary.main,
          borderRadius: '40px',
          height: '30px',
          width: 'fit-content',
          padding: '2px',
          '& .MuiToggleButton-root': {
            padding: '7.5px 15px',
            borderRadius: '40px !important',
            textTransform: 'capitalize',
            fontSize: '12px',
            color: themeConstants.white.main,
            '& .MuiSvgIcon-root': {
              width: '20px',
              marginRight: '7px'
            }
          },
          '& .MuiToggleButton-root.Mui-selected': {
            color: themeConstants.primary.main,
            backgroundColor: themeConstants.white.main,
            borderRadius: '40px !important',
            border: 'none',
            '&:hover': {
              backgroundColor: themeConstants.white.main
            }
          },
          '& .MuiButtonBase-root:not(.Mui-selected)': {
            border: 'none',
            color: themeConstants.white.main,
            '& .MuiSvgIcon-root > *': {
              stroke: themeConstants.white.main,
              border: 'none'
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'fit-content'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          minWidth: 'fit-content',
          flex: 'inherit',
          margin: '0 7px'
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
          '& .MuiFormLabel-root': {
            color: themeConstants.grey.dark,
            zIndex: 2,
            pointerEvents: 'none',
            top: '7px',
            '&.Mui-focused, &.MuiFormLabel-filled': {
              color: themeConstants.grey.dark,
              paddingLeft: '0px',
              transform: 'translate(14px, -9px) scale(0.75)'
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
              padding: '0px',
              border: '0px'
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
                height: '16px',
                minWidth: '16px'
              }
            },
            '&.Mui-error': {
              boxShadow:
                'inset 0px 0px 0px 1px ' + themeConstants.secondary.main,
              '& .MuiSvgIcon-root > *': {
                stroke: themeConstants.secondary.main
              }
            },
            '& .MuiInputBase-inputAdornedStart': {
              marginLeft: '10px'
            }
          }
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            maxHeight: '400px',
            borderRadius: '16px',
            boxShadow: `2px 2px 8px 0px ${themeConstants.blue.dark}1a`,
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
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          height: '1px',
          backgroundColor: themeConstants.blue.light,
          '& .MuiLinearProgress-bar': {
            backgroundColor: themeConstants.blue.main
          },
          '&.error': {
            backgroundColor: themeConstants.red.light,
            '& .MuiLinearProgress-bar': {
              backgroundColor: themeConstants.red.main
            }
          },
          '&.finished': {
            '& .MuiLinearProgress-bar': {
              backgroundColor: themeConstants.green.main
            }
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent'
          },
          '&[aria-expanded=true] ~ .MuiSvgIcon-root': {
            transform: 'rotate(180deg)'
          },
          '& ~ .MuiSvgIcon-root:not(.MuiSelect-icon)': {
            pointerEvents: 'none',
            transition: '300ms transform',
            position: 'absolute',
            right: '15px',
            width: '19px',
            height: '19px'
          }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover, &.Mui-focusVisible, &.Mui-selected, &.Mui-selected:hover, &:hover .MuiTypography-root, &.Mui-focusVisible .MuiTypography-root, &.Mui-selected .MuiTypography-root, &.Mui-selected:hover .MuiTypography-root':
            {
              backgroundColor: 'transparent',
              color: themeConstants.primary.main
            }
        }
      }
    }
  }
}

export default ShipperBaseTheme
