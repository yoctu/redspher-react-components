import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import style from './rubiwinMenuItem.module.scss'

const RubiwinMenuItem = ({ children, className, component, ...props }) => (
  <MenuItem
    className={className}
    component={component}
    classes={{ root: style.root, selected: style.selected }}
    {...props}
  >
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
