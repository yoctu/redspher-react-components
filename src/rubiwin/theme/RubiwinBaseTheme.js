import themeConstants, { colors, typographies } from './themeConstants'

const rubiwinBaseTheme = {
  palette: colors,
  typography: typographies,
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
      root: {
        color: themeConstants.grey.lighter + '!important',
        opacity: 1,
        '&.Mui-active': {
          color: themeConstants.grey.lighter,
          opacity: 1
        }
      },
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
    },
    MuiInput: {
      root: themeConstants.grey.main
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: themeConstants.primary.main,
          scrollbarFaceColor: themeConstants.primary.main,
          scrollbarBaseColor: themeConstants.primary.main,
          scrollbar3dlightColor: themeConstants.primary.main,
          scrollbarHighlightColor: themeConstants.primary.main,
          '*::-webkit-scrollbar': {
            width: '3px'
          },
          '*::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '*::-webkit-scrollbar-thumb': {
            background: themeConstants.primary.main,
            borderRadius: '29px'
          }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      styleOverrides: {
        text: {
          padding: 0,
          '&.MuiButton-textPrimary': {
            color: themeConstants.grey.main,
            '&:hover, &:focus': {
              backgroundColor: 'transparent',
              color: themeConstants.primary.hover
            }
          },
          '&.Mui-disabled': {
            color: themeConstants.grey.light
          }
        },
        outlined: {
          '&.Mui-disabled': {
            color: themeConstants.grey.light
          },
          '&.MuiButton-outlinedError': {
            '&:hover, &:focus': {
              backgroundColor: themeConstants.secondary.hover
            }
          },
          '&:hover, &:focus': {
            backgroundColor: themeConstants.primary.hover,
            color: themeConstants.white.main
          }
        },
        contained: {
          boxShadow: 'none',
          '&.MuiButton-containedError': {
            '&:hover, &:focus': {
              backgroundColor: themeConstants.secondary.hover
            }
          },
          '&:hover, &:focus': {
            boxShadow: 'none',
            backgroundColor: themeConstants.primary.hover
          }
        },
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '12px 15px'
        },
        sizeSmall: {
          padding: '5px 10px'
        },
        containedPrimary: {
          color: themeConstants.white.main
        },
        iconSizeLarge: {
          '& > *:first-child': {
            fontSize: '25px'
          }
        },
        outlinedPrimary: {
          color: themeConstants.grey.main
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover, &:focus': {
            '.MuiSvgIcon-root > *': {
              stroke: themeConstants.primary.hover,
              fill: themeConstants.primary.hover
            }
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
              backgroundColor: themeConstants.primary.hover + 'FF'
            }
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        sizeSmall: {
          padding: '6px 12px'
        },
        sizeMedium: {
          padding: '9px'
        },
        stickyHeader: {
          backgroundColor: themeConstants.grey.main
        },
        head: {
          backgroundColor: themeConstants.grey.main,
          color: themeConstants.white.main,
          borderTop: 0
        },
        footer: {
          color: themeConstants.white.main
        },
        root: {
          '&:first-of-type': {
            borderLeft: '1px solid transparent'
          },
          '&:last-of-type': {
            borderRight: '1px solid transparent'
          },
          borderRight: `1px solid ${themeConstants.grey.lighter}`,
          borderLeft: `1px solid ${themeConstants.grey.lighter}`,
          borderBottom: `1px solid ${themeConstants.grey.lighter}`,
          borderTop: `1px solid ${themeConstants.grey.lighter}`,
          ...typographies.caption
        }
      }
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          backgroundColor: themeConstants.primary.dark
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: `${themeConstants.grey.lighter}80`
          }
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        text: {
          color: themeConstants.grey.main,
          '&.Mui-selected': {
            color: themeConstants.white.main,
            '&:hover, &:focus': {
              color: themeConstants.white.main,
              backgroundColor: themeConstants.primary.hover
            }
          },
          '&.Mui-disabled': {
            color: themeConstants.grey.light
          },
          '&:hover, &:focus': {
            backgroundColor: `${themeConstants.primary.hover}80`,
            color: themeConstants.grey.main
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
            '.MuiSvgIcon-root > rect:first-of-type': {
              stroke: themeConstants.primary.hover,
              opacity: 0.5
            }
          },
          'input:focus': {
            '+ .MuiSvgIcon-root > rect:first-of-type': {
              stroke: themeConstants.primary.hover,
              opacity: 0.5
            }
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
            '.MuiSvgIcon-root > rect:first-of-type': {
              stroke: themeConstants.primary.hover,
              opacity: 0.5
            }
          },
          'input:focus': {
            '+ .MuiSvgIcon-root > rect:first-of-type': {
              stroke: themeConstants.primary.hover,
              opacity: 0.5
            }
          }
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
        root: {
          color: themeConstants.grey.lighter + '!important',
          opacity: 1,
          '&.Mui-active': {
            color: themeConstants.grey.lighter,
            opacity: 1
          }
        },
        icon: { color: themeConstants.grey.lighter, opacity: 1 }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          '&.Mui-focused': {
            color: themeConstants.grey.main,
            '+ .MuiInput-root:before': {
              borderBottom: `1px solid ${themeConstants.primary.main}`,
              opacity: 0.5
            }
          },
          '&.MuiFormLabel-filled': {
            '+ .MuiInput-root:not(.Mui-disabled)': {
              '&:before': {
                borderBottom: `1px solid ${themeConstants.grey.main}`,
                opacity: 0.5
              }
            }
          },
          '&.Mui-error': {
            color: themeConstants.grey.main,
            '+ .MuiInput-root': {
              '&:before': {
                borderColor: themeConstants.error.main,
                opacity: 0.5
              },
              '.MuiSvgIcon-root': {
                '> *': {
                  fill: themeConstants.error.main,
                  stroke: themeConstants.error.main
                }
              }
            }
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&:not(.Mui-focused)&:not(.MuiFormLabel-filled)': {
            width: 'calc(100% - 1.5rem)'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          color: themeConstants.white.main
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
          backgroundColor: `${themeConstants.grey.lighter}D9`,
          zIndex: 9999
        },
        invisible: {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: themeConstants.grey.main,
          '&:not(.Mui-disabled)': {
            '&:hover, &.Mui-focused': {
              '&:before': {
                borderBottom: `1px solid ${themeConstants.primary.hover}`,
                opacity: 0.5
              }
            }
          },
          '&:before': {
            borderColor: themeConstants.grey.light,
            opacity: 0.5
          },
          '&:after': {
            border: 'none'
          },
          '&.Mui-disabled': {
            color: themeConstants.grey.light,
            '&:before': {
              borderBottomStyle: 'solid',
              borderColor: themeConstants.grey.light
            },
            'path, circle': {
              fill: themeConstants.grey.light,
              stroke: themeConstants.grey.light
            }
          },
          '.MuiButtonBase-root': {
            '&:hover, &:focus': {
              'path, circle': {
                fill: themeConstants.primary.hover,
                stroke: themeConstants.primary.hover
              }
            }
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '6px 6px 18px 2px rgba(0, 0, 0, 0.08)',
          borderRadius: '6px',
          marginTop: '10px'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        iconStandard: {
          color: 'transparent'
        },
        select: {
          '&:focus': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        popupIndicatorOpen: {
          '& .MuiSvgIcon-root path': {
            stroke: themeConstants.primary.main
          }
        },
        listbox: {
          '.MuiAutocomplete-option': {
            '&:hover, &[aria-selected="true"], &.Mui-focused': {
              backgroundColor: 'transparent',
              color: themeConstants.primary.hover,
              '.MuiTypography-root': {
                color: themeConstants.primary.hover
              }
            }
          }
        },
        popupIndicator: {
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          '& > div:first-of-type': {
            paddingTop: 12,
            paddingBottom: 12,
            margin: 0,
            backgroundColor: themeConstants.grey.main,
            borderRadius: '6px 6px 0 0',
            maxHeight: 'inherit',
            '& .MuiButtonBase-root': {
              color: themeConstants.white.main
            },
            '& > div': {
              color: themeConstants.white.main
            }
          },
          '& .PrivatePickersSlideTransition-root': {
            minHeight: 0,
            '& > div:first-of-type': {
              position: 'relative'
            }
          }
        }
      }
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          '&.Mui-selected': {
            color: themeConstants.white.main,
            '&:hover': {
              backgroundColor: themeConstants.primary.hover
            },
            '&:focus': {
              backgroundColor: themeConstants.primary.hover
            }
          },
          '&:hover': {
            backgroundColor: themeConstants.primary.hover
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        scroller: {
          paddingBottom: '1px'
        },
        flexContainer: {
          borderBottom: `2px solid ${themeConstants.grey.lighter}`
        },
        indicator: {
          height: '4px'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          ...typographies.body2,
          '&:hover, &:focus': {
            color: themeConstants.primary.hover
          }
        }
      }
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: '15px 50px'
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          marginTop: 0,
          boxShadow: 'none',
          '&:before': {
            display: 'none'
          },
          '&.Mui-expanded': {
            marginBottom: 0,
            marginTop: 0
          },
          '&:first-of-type, &:last-of-type': {
            borderRadius: 0
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: themeConstants.spacing * 6,
          paddingRight: themeConstants.spacing * 6,
          '&.Mui-expanded': {
            minHeight: 48
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            my: themeConstants.spacing * 1.5
          }
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: themeConstants.spacing * 6,
          paddingRight: themeConstants.spacing * 6,
          paddingTop: 0,
          paddingBottom: 0
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&..Mui-selected': {
            backgroundColor: 'transparent'
          },
          '&:hover, &:focus': {
            backgroundColor: 'transparent',
            color: themeConstants.primary.hover,
            '.MuiTypography-root': {
              color: themeConstants.primary.hover
            }
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            '.MuiTypography-root': {
              color: themeConstants.error.main
            },
            '.MuiCheckbox-root, .MuiRadio-root': {
              '.MuiSvgIcon-root > rect:first-of-type': {
                stroke: themeConstants.error.main,
                opacity: 0.5
              }
            }
          },
          '&:hover': {
            '.MuiCheckbox-root, .MuiRadio-root': {
              backgroundColor: 'transparent',
              '.MuiSvgIcon-root > rect:first-of-type': {
                stroke: themeConstants.primary.hover,
                opacity: 0.5
              }
            }
          }
        }
      }
    }
  }
}

export default rubiwinBaseTheme
