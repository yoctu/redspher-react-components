import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import { geoMercator, geoPath } from 'd3-geo'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import * as topojson from 'topojson-client'
import countries from './countries.topo.json'
import airports from './airports.topo.json'
import pairs from './pairs.json'
import './Styles.css'

const ShipperChartMapFlow = ({ data, title }) => {
  const width = 938
  const height = 620
  const svgRef = useRef()

  useEffect(() => {
    const drawRoutes = () => {
      pairs.forEach((item) => {
        svgEl
          .append('path')
          .datum({
            type: 'LineString',
            coordinates: [airportMap[item[0]], airportMap[item[1]]]
          })
          .attr('class', 'route')
          .attr('d', path)
      })
    }

    const transition = (plane, route) => {
      const l = route.node().getTotalLength()
      plane.forEach((item) => {
        item
          .transition()
          .duration(l * 50)
          .attrTween('transform', delta(plane, route.node()))
          .on('end', function () {
            route.remove()
          })
          .remove()
      })
    }

    const delta = (plane, path) => {
      const l = path.getTotalLength()
      return function (i) {
        return function (t) {
          const p = path.getPointAtLength(t * l)

          const t2 = Math.min(t + 0.05, 1)
          const p2 = path.getPointAtLength(t2 * l)

          const x = p2.x - p.x
          const y = p2.y - p.y
          const r = 0 - (Math.atan2(-y, x) * 180) / Math.PI

          const s = Math.min(Math.sin(Math.PI * t) * 1.3, 1.2)

          return (
            'translate(' +
            p.x +
            ',' +
            p.y +
            ') scale(' +
            s +
            ') rotate(' +
            r +
            ')'
          )
        }
      }
    }

    const fly = (origin, destination) => {
      const route = svgEl
        .append('path')
        .datum({
          type: 'LineString',
          coordinates: [airportMap[origin], airportMap[destination]]
        })
        .attr('class', 'noroute')
        .attr('d', path)

      const truck = []
      truck[0] = svgEl
        .append('path')
        .attr(
          'd',
          'm 0.94988067,13.406813 a 0.50005,0.50005 0 0 1 -0.5,-0.5 V 6.0415781 a 0.50005,0.50005 0 0 1 0,-0.035156 V 2.6372815 a 0.50005,0.50005 0 0 1 0.5,-0.5 H 2.5397245 a 0.50005,0.50005 0 1 1 0,1 H 1.4498807 v 2.8339841 a 0.50005,0.50005 0 0 1 0,0.035156 V 12.406812 H 10.289725 V 10.467359 6.0415781 6.0064219 3.1372815 H 5.6490995 a 0.50005,0.50005 0 1 1 0,-1 h 5.1406255 1.660156 a 0.50005,0.50005 0 1 1 0,1 h -1.160156 v 2.8339841 a 0.50005,0.50005 0 0 1 0,0.035156 v 3.9609375 h 0.810547 V 6.2974375 a 0.50005,0.50005 0 0 1 0.5,-0.5 h 3.628906 v -2.660156 h -0.818359 a 0.50005,0.50005 0 1 1 0,-1 h 1.318359 a 0.50005,0.50005 0 0 1 0.5,0.5 v 3.5800779 a 0.50005,0.50005 0 0 1 0,0.1621093 v 0.3066407 a 0.50005,0.50005 0 0 1 -0.07227,0.2597656 l -2.289062,3.779297 a 0.50005,0.50005 0 0 1 -0.427735,0.242187 h -1.765625 a 0.50005,0.50005 0 0 1 -0.08203,0.0059 0.50005,0.50005 0 0 1 -0.0625,-0.0059 h -1.240234 v 1.939454 a 0.50005,0.50005 0 0 1 -0.5,0.5 z M 13.100272,9.9673594 h 1.058593 l 1.919922,-3.1699219 h -2.978515 z"'
        )
        .attr('stroke', '#1436D3')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')

      truck[1] = svgEl
        .append('path')
        .attr(
          'd',
          'm 4.0429406,4.0798713 c 0.7400315,0 1.3400315,-0.6 1.3400315,-1.3400013 0,-0.7399975 -0.6,-1.3400278 -1.3400315,-1.3400278 -0.7399937,0 -1.3399938,0.6000303 -1.3399938,1.3400278 0,0.7400013 0.6000001,1.3400013 1.3399938,1.3400013 z'
        )
        .attr('stroke', '#f20738')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')

      truck[2] = svgEl
        .append('path')
        .attr(
          'd',
          'm 14.033413,4.1299906 c 0.739994,0 1.339994,-0.6 1.339994,-1.3399975 0,-0.7400013 -0.6,-1.3400315 -1.339994,-1.3400315 -0.739993,0 -1.339993,0.6000302 -1.339993,1.3400315 0,0.7399975 0.6,1.3399975 1.339993,1.3399975 z'
        )
        .attr('stroke', '#f20738')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')

      transition(truck, route)
    }

    const pulse = () => {
      pairs.forEach((item) => {
        fly(item[0], item[1])
      })
    }

    const projection = geoMercator().scale(1200).rotate([-16.0, -54.0, 0])

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
      .data(topojson.feature(airports, airports.objects.airports).features)
      .enter()
      .append('path')
      .attr('id', function (d) {
        return d.id
      })
      .attr('d', path)

    var airportMap = []

    const geos = topojson.feature(airports, airports.objects.airports).features
    for (const i in geos) {
      airportMap[geos[i].id] = geos[i].geometry.coordinates
    }

    drawRoutes()
    pulse()
    setInterval(function () {
      pulse()
    }, 8000)
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
