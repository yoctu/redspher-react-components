export const colors = {
  get primary() {
    return this.blue
  },
  get secondary() {
    return this.red
  },
  blue: {
    main: '#1436D3',
    light: '#0095FD',
    dark: '#003B81'
  },
  red: {
    main: '#F20738'
  },
  grey: {
    dark: '#68717B',
    main: '#AFB9C4',
    light: '#F8FAFC'
  },
  white: {
    main: '#FFF'
  },
  black: {
    main: '#000',
    dark: '#062440'
  },
  green: {
    main: '#00CF53'
  },
  orange: {
    main: '#FE7062'
  }
}

const constants = {
  ...colors,
  breakpoints: {
    lg: 1280,
    md: 960,
    sm: 600,
    xl: 1920,
    xs: 0
  },
  devise: {
    euro: '€'
  },
  borderRadius: {
    main: '16px',
    small: '8px'
  }
}

export default constants
