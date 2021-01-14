import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

/** This is a component from Material UI, that has to be used in the RubiwinTheme Provider https://material-ui.com/components/buttons/ */
const RubiwinButton = ({ ...props }) => {
  return <Button {...props}>Button</Button>
}

RubiwinButton.propTypes = {
  /** see props from Material Ui */
  props: PropTypes.any
}

export default RubiwinButton
