import React from 'react'
import PropTypes from 'prop-types'
import style from './RubiwinBackButton.module.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const RubiwinBackButton = ({ onClick, text }) => (
  <div className={style.backButton} onClick={onClick}>
    <ArrowBackIosIcon />
    {text}
  </div>
)

RubiwinBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

export default RubiwinBackButton
