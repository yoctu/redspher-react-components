import React from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'

const ShipperChartDoughnut = ({ data }) => {
  return <Doughnut data={data} />
}

ShipperChartDoughnut.propTypes = {
  /** Data to be displayed in the chart */
  data: PropTypes.object.isRequired
}

export default ShipperChartDoughnut
