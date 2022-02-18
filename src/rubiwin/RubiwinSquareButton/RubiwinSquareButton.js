import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { createStyles, makeStyles } from '@mui/styles'
import { darken } from '@mui/material/styles'
import themeConstants from '../theme/themeConstants'

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      backgroundColor: themeConstants.primary.main,
      borderRadius: themeConstants.borderRadius.sm,
      fontFamily: themeConstants.typography.fontFamily,
      fontWeight: '700',
      color: 'white',
      boxShadow: themeConstants.boxShadow.main,
      '&:hover': {
        backgroundColor: darken(themeConstants.primary.main, 0.1)
      }
    },
    disabled: {
      backgroundColor: themeConstants.grey.light,
      boxShadow: 'none'
    }
  })
})

const RubiwinSquareButton = ({
  text,
  onClick,
  className = '',
  disabled = false,
  fullWidth = false,
  href,
  size = 'medium',
  endIcon,
  startIcon
}) => {
  const classes = useStyles()

  return (
    <Button
      onClick={onClick}
      className={`${className}`}
      disabled={disabled}
      fullWidth={fullWidth}
      href={href}
      size={size}
      endIcon={endIcon}
      startIcon={startIcon}
      classes={{ root: classes.root, disabled: classes.disabled }}
    >
      {text}
    </Button>
  )
}

RubiwinSquareButton.propTypes = {
  /** text to display, it can be <Translate> component too */
  text: PropTypes.string.isRequired,
  /** function to handleButton behavior **/
  onClick: PropTypes.func,
  /** additional classname if you want to overload styles */
  className: PropTypes.string,
  /** disabled button */
  disabled: PropTypes.bool,
  /** make the button take the fullWidth of the parent */
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

export default RubiwinSquareButton
