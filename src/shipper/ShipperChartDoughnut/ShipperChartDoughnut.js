import React from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { ShipperThemeProvider } from '../../index'
import style from './ShipperChartDoughnut.module.scss'

const ShipperChartDoughnut = ({ data, title, ...delegated }) => {
  const config = {
    cutout: '85%',
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
      },
      datalabels: {
        color: '#36A2EB',
        anchor: 'end',
        align: 'end',
        offset: 20,
        overlap: true
      }
    },
    layout: {
      padding: {
        right: 40,
        top: 40
      }
    }
  }

  return (
    <ShipperThemeProvider injectFirst>
      <Card>
        <CardHeader title={title} className={style.centerTitle} />
        <CardContent style={{ paddingTop: '5px', paddingBottom: 0 }}>
          <Doughnut
            data={data}
            {...delegated}
            options={config}
            plugins={[ChartDataLabels]}
            maxWidth={450}
          />
        </CardContent>
      </Card>
    </ShipperThemeProvider>
  )
}

ShipperChartDoughnut.propTypes = {
  /** Data to be displayed in the chart */
  data: PropTypes.object.isRequired,
  /** Data to be displayed as title of the card */
  title: PropTypes.string.isRequired
}

export default ShipperChartDoughnut
