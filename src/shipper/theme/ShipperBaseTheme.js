import themeConstants, { colors } from './themeConstants'

const ShipperBaseTheme = {
  spacing: 8,
  palette: colors,
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    color: themeConstants.black.dark,
    h1: {
      fontWeight: 900,
      color: '#fff',
      fontSize: '36px',
      lineHeight: '43.88px'
    },
    h2: {
      fontWeight: 'bold',
      color: themeConstants.primary.main,
      fontSize: '32px',
      lineHeight: '39.01px'
    },
    h3: {
      fontWeight: 'bold',
      color: themeConstants.primary.dark,
      fontSize: '24px',
      lineHeight: '29.26px'
    },
    h4: {
      fontWeight: 'bold',
      color: themeConstants.primary.dark,
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
      color: themeConstants.primary.dark,
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
    PrivateRadioButtonIcon: {
      root: {
        '&:disabled': {
          color: themeConstants.grey.main
        },
        '& svg[class*="MuiSvgIcon-root"]': {
          width: '14px !important',
          height: '14px !important'
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
        '& [class*="MuiButtonBase-root"]': {
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
        height: '30px',
        width: 'fit-content',
        padding: '2px',
        '& [class*="MuiToggleButton-root"]': {
          padding: '7.5px 15px',
          borderRadius: '40px !important',
          textTransform: 'capitalize',
          fontSize: '12px',
          color: themeConstants.white.main,
          '& [class*="MuiSvgIcon-root"]': {
            width: '20px',
            marginRight: '7px'
          }
        },
        '& .Mui-selected': {
          color: themeConstants.primary.main,
          backgroundColor: themeConstants.white.main,
          borderRadius: '40px !important',
          border: 'none',
          '&:hover': {
            backgroundColor: themeConstants.white.main
          }
        },
        ' & [class*="MuiButtonBase-root"]:not(.Mui-selected)': {
          border: 'none',
          color: themeConstants.white.main,
          '& [class*="MuiSvgIcon-root"] > *': {
            stroke: themeConstants.white.main,
            border: 'none'
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
        '& [class*="MuiFormLabel-root"]': {
          color: themeConstants.grey.dark,
          zIndex: 2,
          paddingLeft: '15px',
          fontSize: '14px',
          lineHeight: '17.07px',
          pointerEvents: 'none',
          '&.Mui-focused, &[class*="MuiFormLabel-filled"]': {
            color: themeConstants.grey.dark,
            paddingLeft: '0px'
          }
        },
        '& [class*="MuiInputBase-root"]': {
          padding: '7px 15px',
          backgroundColor: themeConstants.white.main,
          borderRadius: '20px',
          zIndex: 1,
          '&[class*="MuiInput-underline"]:before': {
            display: 'none'
          },
          '&[class*="MuiInput-underline"]:after': {
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
          '& [class*="MuiInputAdornment-root"]': {
            width: '16px',
            height: '16px',
            '& [class*="MuiSvgIcon-root"]': {
              width: '16px',
              height: '16px'
            },
            '& [class*="MuiPhoneNumber-flagButton"]': {
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
          '& [class*="MuiInputBase-inputAdornedStart"]': {
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
    },
    MuiDropzoneArea: {
      root: {
        width: '100%',
        padding: '10px',
        minHeight: 'fit-content',
        backgroundColor: 'transparent',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px dashed ' + themeConstants.grey.main,
        '&  [class*="MuiDropzoneArea-textContainer"]': {
          display: 'flex',
          flexDirection: 'row-reverse',
          margin: 'auto',
          '&  [class*="MuiTypography-root"]': {
            marginLeft: '10px',
            margin: 'auto',
            fontFamily: ['Montserrat', 'sans-serif'].join(','),
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '12px',
            color: themeConstants.grey.dark
          },
          '&  [class*="MuiSvgIcon-root"]': {
            margin: 'auto'
          }
        },
        '&  [class*="MuiDropzonePreviewList-root"]': {
          marginTop: '20px',
          maxWidth: '100%',
          '& [class*="MuiDropzonePreviewList-imageContainer"],& [class*="MuiChip-root"]':
            {
              maxWidth: '100%',
              '&  [class*="MuiChip-label"]': {
                color: themeConstants.grey.dark,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }
            }
        }
      }
    },
    MuiLinearProgress: {
      root: {
        borderRadius: '5px',
        height: '1px',
        backgroundColor: themeConstants.blue.light,
        '& [class*="MuiLinearProgress-bar"]': {
          backgroundColor: themeConstants.blue.main
        },
        '&.error': {
          backgroundColor: themeConstants.red.light,
          '& [class*="MuiLinearProgress-bar"]': {
            backgroundColor: themeConstants.red.main
          }
        },
        '&.finished': {
          '& [class*="MuiLinearProgress-bar"]': {
            backgroundColor: themeConstants.green.main
          }
        }
      }
    }
  }
}

export default ShipperBaseTheme
