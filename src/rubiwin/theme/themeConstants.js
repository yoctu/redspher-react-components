export const colors = {
  action: {
    disabled: '#FFF',
    disabledBackground: '#8F8F8F'
  },
  primary: {
    main: '#00C3FF',
    light: '#CAF3FF',
    dark: '#006B8D',
    hover: '#069CCA'
  },
  secondary: {
    main: '#eb3343',
    light: '#ff6c6e',
    dark: '#b1001c'
  },
  tertiary: {
    main: '#00FFF3',
    light: '#70ffff',
    dark: '#00cbc0'
  },
  grey: {
    main: '#171F46',
    light: '#8F8F8F',
    lighter: '#F4F4F4',
    dynamite: '#C4C4C4',
    disable: '#E5E5E5'
  },
  error: {
    main: '#FF003B'
  },
  white: {
    main: '#FFFFFF'
  },
  red: {
    main: '#FF003B'
  }
}

export const constants = {
  ...colors,
  breakpoints: {
    lg: 1280,
    md: 960,
    sm: 600,
    xl: 1920,
    xs: 0
  },
  borderRadius: {
    sm: '8px',
    main: '16px'
  },
  typography: {
    smaller: '12px',
    small: '14px',
    fontFamily: ['Montserrat', 'sans-serif'].join(',')
  },
  boxShadow: {
    main: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  transition: {
    default: 'all .2s ease'
  }
}

export default constants
