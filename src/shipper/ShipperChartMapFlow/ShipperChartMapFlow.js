import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import style from './ShipperChartMap.module.scss'
import * as d3 from 'd3'

const ShipperChartMap = ({ data, title }) => {


  return (
    <Card>
      <CardHeader title={title} className={style.centerTitle} />
      <CardContent>

      </CardContent>
    </Card>
  )
}

ShipperChartMap.propTypes = {
  /** data to be displayed in the map chart */
  data: PropTypes.object.isRequired,
  /** Text to be displayed as title of the Chart Map card */
  title: PropTypes.string.isRequired
}

export default ShipperChartMap
