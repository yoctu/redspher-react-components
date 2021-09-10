import React from 'react'
import PropTypes from 'prop-types'
// import style from './ShipperCardVehicle.module.scss'
// import { ShipperThemeProvider } from '../../index'
// import themeConstants from '../theme/themeConstants'
import { Doughnut } from 'react-chartjs-2'

const ShipperChart = ({ data }) => {
  return <Doughnut data={data} />
}

ShipperChart.propTypes = {
  /** text to display as title for the card, it can be <Translate> component too */
  data: PropTypes.object.isRequired
}

export default ShipperChart
