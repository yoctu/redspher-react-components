import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { darken } from '@mui/material/styles'

/** This is a RubiwinButton branded for Rubiwin
 * full doc : https://material-ui.com/api/button/ */
const RubiwinButton = ({
  text,
  onClick,
  className = '',
  disabled = false,
  fullWidth = false,
  href,
  size = 'medium',
  endIcon,
  startIcon
}) => (
  <Button
    variant='contained'
    onClick={onClick}
    className={className}
    disabled={disabled}
    fullWidth={fullWidth}
    href={href}
    size={size}
    endIcon={endIcon}
    startIcon={startIcon}
    sx={{
      fontFamily: (theme) => theme.typography.fontFamily,
      fontSize: (theme) => theme.typography.smaller,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: (theme) => theme.palette.primary.main,
      borderRadius: (theme) => theme.spacing(4),
      textTransform: 'capitalize',
      ':hover': {
        backgroundColor: (theme) => darken(theme.palette.primary.main, 0.1)
      },
      ':disabled': {
        backgroundColor: (theme) => theme.palette.grey.light,
        border: (theme) => `1px solid ${theme.palette.grey.light}`
      },
      a: {
        color: 'white'
      }
    }}
  >
    {text}
  </Button>
)

RubiwinButton.propTypes = {
  /** text to display, it can be <Translate> component too */
  text: PropTypes.string.isRequired,
  /** function to handleButton behavior **/
  onClick: PropTypes.func,
  /** additional classname if you want to overload styles */
  className: PropTypes.string,
  /** disabled RubiwinButton */
  disabled: PropTypes.bool,
  /** make the RubiwinButton take the fullWidth of the parent */
  fullWidth: PropTypes.bool,
  /** link to another page */
  href: PropTypes.string,
  /** can be small, medium, large */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** icon before text */
  startIcon: PropTypes.element,
  /** icon after text */
  endIcon: PropTypes.element
}

export default RubiwinButton
