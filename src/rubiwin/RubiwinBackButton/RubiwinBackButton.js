import React from 'react'
import PropTypes from 'prop-types'
import style from './RubiwinBackButton.module.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

/** This is a simple ios style backButton
 */
const RubiwinBackButton = ({ onClick, text }) => (
  <div className={style.backButton} onClick={onClick}>
    <ArrowBackIosIcon />
    {text}
  </div>
)

RubiwinBackButton.propTypes = {
  /** this is classic onClick callback */
  onClick: PropTypes.func.isRequired,
  /** you can either give it a string or a component, such as translate */
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

export default RubiwinBackButton
