import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, CardMedia, makeStyles } from '@material-ui/core'
import checked from '../../icons/checked.svg'

const useStyles = makeStyles((theme) => {
  return {
    checkedIcon: {
      width: '14px',
      height: '14px'
    }
  }
})

/** this is a Mui Checkbox branded for Rubiwin
 * full dod : https://material-ui.com/api/checkbox/
 */
const RubiwinCheckbox = ({
  checked = false,
  className = '',
  disabled = false,
  id,
  onChange,
  size = 'medium',
  inputRef,
  value,
  name,
  color = 'primary',
  props
}) => {
  const classes = useStyles()
  return (
    <Checkbox
      checked={checked}
      disabled={disabled}
      id={id}
      onChange={onChange}
      size={size}
      inputRef={inputRef}
      value={value}
      name={name}
      color={color}
      className={className}
      checkedIcon={
        <CardMedia className={classes.checkedIcon} image={checked} />
      }
      {...props}
    />
  )
}

RubiwinCheckbox.propTypes = {
  /** component is checked or not */
  checked: PropTypes.bool,
  /** add a class to overload styles */
  className: PropTypes.string,
  /** disable checkbox */
  disabled: PropTypes.bool,
  /** set id of components */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** on Change */
  onChange: PropTypes.func,
  /** size */
  size: PropTypes.oneOf(['small', 'medium']),
  /** pass a ref to the input element */
  inputRef: PropTypes.string,
  /** value of input */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** name attribute of input */
  name: PropTypes.string,
  /** color from MUI theme */
  color: PropTypes.string
}

export default RubiwinCheckbox
