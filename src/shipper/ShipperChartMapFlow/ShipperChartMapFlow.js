import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import { geoMercator, geoPath } from 'd3-geo'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import * as topojson from 'topojson-client'
import countries from './countries.topo.json'
import airports from './airports.topo.json'
import './styles.css'

const ShipperChartMapFlow = ({ data, title }) => {
  const width = 938
  const height = 620
  const svgRef = useRef()

  useEffect(() => {
    const projection = geoMercator()
      .scale(150)
      .translate([width / 2, height / 2])

    const path = geoPath().pointRadius(2).projection(projection)
    const svgEl = d3.select(svgRef.current)
    svgEl.selectAll('*').remove()

    svgEl
      .append('g')
      .attr('class', 'countries')
      .selectAll('path')
      .data(topojson.feature(countries, countries.objects.countries).features)
      .enter()
      .append('path')
      .attr('d', path)

    svgEl
      .append('g')
      .attr('class', 'airports')
      .selectAll('path')
      .data(topojson.feature(airports, airports.objects.collection).features)
      .enter()
      .append('path')
      .attr('id', function (d) {
        return d.id
      })
      .attr('d', path)
  })

  return (
    <Card>
      <CardHeader title={title} />
      <CardContent style={{ backgroundColor: '#73b6e6' }}>
        <svg ref={svgRef} width={width} height={height} />
      </CardContent>
    </Card>
  )
}

ShipperChartMapFlow.propTypes = {
  /** data to be displayed in the map chart */
  data: PropTypes.object.isRequired,
  /** Text to be displayed as title of the Chart Map card */
  title: PropTypes.string.isRequired
}

export default ShipperChartMapFlow
