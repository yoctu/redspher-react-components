import React from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'

const ShipperChartDoughnut = ({ data, ...delegated }) => {
  const config = {
    cutout: 90,
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgb(255, 99, 132)',
          boxWidth: 12
        },
        position: 'left'
      }
    }
  }

  return <Doughnut data={data} {...delegated} options={config} />
}

ShipperChartDoughnut.propTypes = {
  /** Data to be displayed in the chart */
  data: PropTypes.object.isRequired
}

export default ShipperChartDoughnut
