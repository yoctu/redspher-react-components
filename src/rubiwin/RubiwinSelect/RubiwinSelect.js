import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import style from './rubiwinSelect.module.scss'

/** full docs : https://material-ui.com/components/selects/ Deprecated, use Mui directly with provider */
const RubiwinSelect = ({
  children,
  className,
  autoWidth,
  id,
  input,
  inputProps,
  multiple,
  onChange,
  onClose,
  onOpen,
  open,
  renderValue,
  value,
  ...props
}) => (
  <Select
    autoWidth={autoWidth}
    id={id}
    input={input}
    inputProps={inputProps}
    multiple={multiple}
    onChange={onChange}
    onClose={onClose}
    onOpen={onOpen}
    open={open}
    renderValue={renderValue}
    value={value}
    className={className}
    classes={{ select: style.select }}
    {...props}
  >
    {children}
  </Select>
)

RubiwinSelect.propTypes = {
  /** If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input. */
  autoWidth: PropTypes.bool,
  /** The option elements to populate the select with. Can be some MenuItem when native is false and option when native is true. */
  children: PropTypes.node,
  /** pass a className */
  className: PropTypes.string,
  /** The id of the wrapper element. */
  id: PropTypes.string,
  /** An Input element; does not have to be a material-ui specific Input */
  input: PropTypes.element,
  /** Attributes applied to the input element. When native is true, the attributes are applied on the select element. */
  inputProps: PropTypes.object,
  /** If true, value must be an array and the menu will support multiple selections. */
  multiple: PropTypes.bool,
  /** Callback function fired when a menu item is selected. */
  onChange: PropTypes.func,
  /**  Callback fired when the component requests to be closed. Use in controlled mode (see open). */
  onClose: PropTypes.func,
  /** Callback fired when the component requests to be opened. Use in controlled mode (see open).
   */
  onOpen: PropTypes.func,
  /** Control select open state. You can only use it when the native prop is false (default). */
  open: PropTypes.bool,
  /** function(value: any) => ReactNode
   value: The value provided to the component. */
  renderValue: PropTypes.func,
  /** The input value. Providing an empty string will select no options. */
  value: PropTypes.any
}

export default RubiwinSelect
