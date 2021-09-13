import React from 'react'
import PropTypes from 'prop-types'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import style from './ShipperChartMap.module.scss'

const ShipperChartMap = ({ data, title }) => {
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

  const colorFill = (i) => {
    switch (i?.value) {
      case '1':
        return '#0095FD'
      case '2':
        return '#1436D3'
      case '3':
        return '#003B81'
      default:
        return '#062440'
    }
  }

  return (
    <Card>
      <CardHeader title={title} className={style.centerTitle} />
      <CardContent>
        <ComposableMap
          projection='geoAzimuthalEqualArea'
          projectionConfig={{
            rotate: [-16.0, -54.0, 0],
            scale: 1000
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3)
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorFill(d)}
                  />
                )
              })
            }
          </Geographies>
        </ComposableMap>
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
