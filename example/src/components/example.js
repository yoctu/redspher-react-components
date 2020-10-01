import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'

const Example = ({ children }) => <Box>{children}</Box>

Example.propTypes = {
  children: PropTypes.node
}

export default Example
