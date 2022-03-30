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
            '&:hover': {
              backgroundColor: 'transparent',
              color: themeConstants.primary.main
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
          '&:hover': {
            backgroundColor: themeConstants.primary.main,
            color: themeConstants.white.main
          }
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
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
          color: 'white',
          borderTop: 0
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
            color: themeConstants.white.main
          },
          '&.Mui-disabled': {
            color: themeConstants.grey.light
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: themeConstants.grey.light,
          '&:hover': {
            backgroundColor: 'transparent'
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
        root: { color: themeConstants.grey.lighter + '!important', opacity: 1 },
        active: { color: themeConstants.grey.lighter, opacity: 1 },
        icon: { color: themeConstants.grey.lighter, opacity: 1 }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
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
          backgroundColor: `${themeConstants.grey.lighter}D9`
        },
        invisible: {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: themeConstants.grey.main
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        iconStandard: {
          color: 'transparent'
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
        paper: {
          boxShadow: '6px 6px 18px 2px rgba(0, 0, 0, 0.08)',
          borderRadius: '6px',
          marginTop: '10px'
        },
        listbox: {
          '& .MuiAutocomplete-option[aria-selected="true"]': {
            backgroundColor: 'transparent'
          }
        }
      }
    }
  }
}

export default rubiwinBaseTheme
