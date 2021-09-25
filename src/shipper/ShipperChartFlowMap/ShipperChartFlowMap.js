import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardHeader } from '@material-ui/core'

const ShipperChartFlowMap = ({ data, title }) => {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent />
    </Card>
  )
}

ShipperChartFlowMap.propTypes = {
  /** data to be displayed in the map chart */
  data: PropTypes.object.isRequired,
  /** Text to be displayed as title of the Chart Map card */
  title: PropTypes.string.isRequired
}

export default ShipperChartFlowMap
