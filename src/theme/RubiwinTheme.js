import { createMuiTheme } from '@material-ui/core/styles'

const rubiwinTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00C3FF',
      light: '#6bf6ff',
      dark: '#0093cc'
    },
    secondary: {
      main: '#eb3343',
      light: '#ff6c6e',
      dark: '#b1001c'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 'bold',
        borderRadius: '8px'
      },
      containedPrimary: {
        color: '#FFF'
      },
      iconSizeLarge: {
        '&> *:first-child': {
          fontSize: '25px'
        }
      }
    }
  }
})

export default rubiwinTheme
