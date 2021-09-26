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
      plane
        .transition()
        .duration(l * 50)
        .attrTween('transform', delta(plane, route.node()))
        .on('end', function () {
          route.remove()
        })
        .remove()
    }

    const delta = (plane, path) => {
      var l = path.getTotalLength()
      return function (i) {
        return function (t) {
          var p = path.getPointAtLength(t * l)

          var t2 = Math.min(t + 0.05, 1)
          var p2 = path.getPointAtLength(t2 * l)

          var x = p2.x - p.x
          var y = p2.y - p.y
          var r = 0 - (Math.atan2(-y, x) * 180) / Math.PI

          var s = Math.min(Math.sin(Math.PI * t) * 1.3, 1.2)

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

      const truck = svgEl
        .append('path')
        .attr(
          'd',
          'm 13.949219,4.1796879 c -1.010302,0 -1.839844,-0.8295549 -1.839844,-1.8398439 0,-1.010225 0.82951,-1.839844 1.839844,-1.839844 1.010334,0 1.839843,0.829619 1.839843,1.839844 0,1.010289 -0.829541,1.8398439 -1.839843,1.8398439 z m 0,-0.9999999 c 0.469898,0 0.839843,-0.369933 0.839843,-0.839844 C 14.789062,1.870069 14.419085,1.5 13.949219,1.5 c -0.469866,0 -0.839844,0.370069 -0.839844,0.839844 0,0.469911 0.369946,0.839844 0.839844,0.839844 z M 4.109375,4.1796879 C 3.0990982,4.1796879 2.2695312,3.350151 2.2695312,2.339844 2.2695312,1.329601 3.0990666,0.5 4.109375,0.5 c 1.0103147,0 1.8398438,0.829605 1.8398438,1.839844 0,1.010302 -0.8295606,1.8398439 -1.8398438,1.8398439 z m 0,-0.9999999 c 0.4698568,0 0.8398438,-0.369946 0.8398438,-0.839844 C 4.9492188,1.870083 4.5792003,1.5 4.109375,1.5 3.6395634,1.5 3.2695312,1.870087 3.2695312,2.339844 c 0,0.469893 0.3700006,0.839844 0.8398438,0.839844 z m 8.533203,7.537109 A 0.50005,0.50005 0 0 1 12.150391,10.210938 V 6.041016 a 0.50005,0.50005 0 0 1 0.5,-0.5 h 4.128906 a 0.50005,0.50005 0 1 1 0,1 h -3.628906 v 3.669922 a 0.50005,0.50005 0 0 1 -0.507813,0.505859 z M 1,6.2500004 a 0.50005,0.50005 0 0 1 -0.5,-0.5 V 2.38086 a 0.50005,0.50005 0 0 1 0.5,-0.5 h 1.5898438 a 0.50005,0.50005 0 1 1 0,1 H 1.5 v 2.3691404 h 8.839844 V 2.88086 H 5.6992188 a 0.50005,0.50005 0 1 1 0,-1 h 5.1406252 a 0.50005,0.50005 0 0 1 0.5,0.5 v 3.3691404 a 0.50005,0.50005 0 0 1 -0.5,0.5 z m 9.839844,4.4609376 a 0.50005,0.50005 0 0 1 -0.5,-0.5 V 2.38086 a 0.50005,0.50005 0 0 1 0.5,-0.5 H 12.5 a 0.50005,0.50005 0 1 1 0,1 h -1.160156 v 6.8300779 h 2.86914 L 16.279297,6.291016 V 2.88086 h -0.818359 a 0.50005,0.50005 0 1 1 0,-1 h 1.318359 a 0.50005,0.50005 0 0 1 0.5,0.5 v 4.0488279 a 0.50005,0.50005 0 0 1 -0.07227,0.2597656 L 14.917969,10.46875 a 0.50005,0.50005 0 0 1 -0.427735,0.242188 z M 1,13.150391 a 0.50005,0.50005 0 0 1 -0.5,-0.5 V 9.7148441 5.7500004 a 0.50005,0.50005 0 0 1 0.5,-0.5 h 9.839844 a 0.50005,0.50005 0 0 1 0.5,0.5 v 6.9003906 a 0.50005,0.50005 0 0 1 -0.5,0.5 z m 0.5,-1 h 8.839844 V 6.2500004 H 1.5 v 3.4648437 z'
        )
        .attr('stroke', '#1436D3')
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

    var airportMap = {}

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
