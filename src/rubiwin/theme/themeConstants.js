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
  warning: {
    main: '#FFD600'
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

export const typographies = {
  fontFamily: ['Montserrat', 'sans-serif'].join(','),
  h1: {
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '48.76px',
    [`@media only screen and (max-width: ${constants.breakpoints.sm}px)`]: {
      fontSize: '30px',
      lineHeight: '36.57px'
    }
  },
  h2: {
    fontWeight: 700,
    color: constants.grey.main,
    fontSize: '32px',
    lineHeight: '39.01px',
    [`@media only screen and (max-width: ${constants.breakpoints.sm}px)`]: {
      fontSize: '22px',
      lineHeight: '26.82px'
    }
  },
  h3: {
    fontWeight: 700,
    color: constants.grey.main,
    fontSize: '24px',
    lineHeight: '29.26px',
    [`@media only screen and (max-width: ${constants.breakpoints.sm}px)`]: {
      fontSize: '18px',
      lineHeight: '21.94px'
    }
  },
  h4: {
    fontWeight: 700,
    color: constants.grey.main,
    fontSize: '18px',
    lineHeight: '21.94px',
    [`@media only screen and (max-width: ${constants.breakpoints.sm}px)`]: {
      fontSize: '16px',
      lineHeight: '19.5px'
    }
  },
  subtitle1: {
    color: constants.grey.main,
    fontSize: '18px',
    lineHeight: '21.94px'
  },
  subtitle1underline: {
    color: constants.grey.main,
    fontSize: '18px',
    lineHeight: '21.94px',
    textDecoration: 'underline'
  },
  subtitle1bold: {
    fontWeight: 700,
    color: constants.grey.main,
    fontSize: '18px',
    lineHeight: '21.94px'
  },
  body1: {
    color: constants.grey.main,
    fontSize: '14px',
    lineHeight: '17px'
  },
  body1underline: {
    color: constants.grey.light,
    fontSize: '14px',
    lineHeight: '17px',
    textDecoration: 'underline'
  },
  body1bold: {
    fontWeight: 700,
    color: constants.grey.main,
    fontSize: '14px',
    lineHeight: '17px'
  },
  body2: {
    color: constants.grey.main,
    fontSize: '15px',
    lineHeight: '22px'
  },
  body2underline: {
    color: constants.grey.light,
    fontSize: '15px',
    lineHeight: '22px',
    textDecoration: 'underline'
  },
  body2bold: {
    fontWeight: 700,
    color: constants.grey.main,
    fontSize: '15px',
    lineHeight: '22px'
  },
  caption: {
    color: constants.grey.main,
    fontSize: '12px',
    lineHeight: '16px'
  },
  captionunderline: {
    color: constants.grey.main,
    fontSize: '12px',
    lineHeight: '16px',
    textDecoration: 'underline'
  },
  captionbold: {
    fontWeight: 700,
    color: constants.grey.main,
    fontSize: '12px',
    lineHeight: '16px'
  }
}

export default constants
