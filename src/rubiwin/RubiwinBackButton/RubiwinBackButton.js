import React from 'react'
import PropTypes from 'prop-types'
import style from './RubiwinBackButton.module.scss'

const RubiwinBackButton = ({ handleButton, text }) => {
  return (
    <div className={style.backButton} onClick={handleButton}>
      <span className=' glyphicon glyphicon-chevron-left' />
      {text}
    </div>
  )
}

RubiwinBackButton.propTypes = {
  handleButton: PropTypes.func.isRequired,
  text: PropTypes.element
}

export default RubiwinBackButton
