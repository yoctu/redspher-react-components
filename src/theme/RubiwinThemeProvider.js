import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import rubiwinTheme from './rubiwinTheme'
import PropTypes from 'prop-types'

const RubiwinThemeProvider = ({ children }) => (
  <ThemeProvider theme={rubiwinTheme}>{children}</ThemeProvider>
)

RubiwinThemeProvider.propType = {
  children: PropTypes.node
}

export default RubiwinThemeProvider
