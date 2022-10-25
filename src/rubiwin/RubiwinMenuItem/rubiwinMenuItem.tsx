import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@mui/material/MenuItem'

const RubiwinMenuItem = ({ children, className, component, ...props }: any) => (
  <MenuItem className={className} component={component} {...props}>
    {children}
  </MenuItem>
)

RubiwinMenuItem.propTypes = {
  /** children */
  children: PropTypes.node,
  /** add a class to children */
  className: PropTypes.string,
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  component: PropTypes.string
}

export default RubiwinMenuItem
