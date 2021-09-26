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
    const projection = geoMercator()
      .scale(1000)
      .rotate([-16.0, -54.0, 0])

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

    /* const getSvgTruck = () => {
      let truck = svgEl
        .append('path')
        .attr('d', 'M11.84 4V10.9H2V4H11.84Z')
        .attr('stroke', '#1436D3')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')

      truck = svgEl
        .append('path')
        .attr('d', 'M13.5 14.27H11.84V6.44H15.49L17.78 10.22V14.27H16.46')
        .attr('stroke', '#1436D3')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')

      truck = svgEl
        .append('path')
        .attr('d', 'M6.7 14.27H11.84V10.9H2V14.27H3.59')
        .attr('stroke', '#1436D3')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')

      truck = svgEl
        .append('path')
        .attr('d', 'M13.65 6.44V10.61H17.78')
        .attr('stroke', '#1436D3')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')

      truck = svgEl
        .append('path')
        .attr(
          'd',
          'M5.11 15.65C5.85007 15.65 6.45 15.05 6.45 14.31C6.45 13.5699 5.85007 12.97 5.11 12.97C4.36994 12.97 3.77 13.5699 3.77 14.31C3.77 15.05 4.36994 15.65 5.11 15.65Z'
        )
        .attr('stroke', '#F20738  ')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')

      const truck = svgEl
        .append('path')
        .attr(
          'd',
          'M 0.5,0 A 0.50005,0.50005 0 0 0 0,0.5 v 6.9003906 3.3691404 a 0.50005,0.50005 0 0 0 0.5,0.5 h 1.3339844 c 0.2066824,0.789493 0.9243014,1.38086 1.7753906,1.38086 0.8510945,0 1.5687095,-0.591368 1.7753906,-1.38086 h 4.9550784 1.333984 c 0.206677,0.789487 0.92428,1.38086 1.775391,1.38086 0.851111,0 1.568713,-0.591373 1.77539,-1.38086 h 1.054688 a 0.50005,0.50005 0 0 0 0.5,-0.5 V 7.1894531 a 0.50005,0.50005 0 0 0 0,-0.1621093 V 6.7207031 A 0.50005,0.50005 0 0 0 16.707031,6.4609375 L 14.417969,2.6816406 A 0.50005,0.50005 0 0 0 13.990234,2.4394531 h -1.765625 a 0.50005,0.50005 0 0 0 -0.08203,-0.00586 0.50005,0.50005 0 0 0 -0.0625,0.00586 H 10.839844 V 0.5 a 0.50005,0.50005 0 0 0 -0.5,-0.5 z M 1,1 H 9.839844 V 2.9394531 6.9003906 H 1 Z m 9.839844,2.4394531 h 0.810547 V 7.109375 a 0.50005,0.50005 0 0 0 0.5,0.5 h 3.628906 v 2.660156 h -0.580078 c -0.234132,-0.747402 -0.929028,-1.2988279 -1.75,-1.2988279 -0.820973,0 -1.515868,0.5514259 -1.75,1.2988279 H 10.839844 V 7.4003906 Z m 1.810547,0 h 1.058593 L 15.628906,6.609375 H 12.650391 Z M 1,7.9003906 H 9.839844 V 10.269531 H 5.359375 c -0.2341359,-0.747405 -0.9290428,-1.2988279 -1.75,-1.2988279 -0.820952,0 -1.5158627,0.5514209 -1.75,1.2988279 H 1 Z M 3.609375,9.970703 c 0.4698568,0 0.8398438,0.369946 0.8398438,0.839844 0,0.469761 -0.3700185,0.839844 -0.8398438,0.839844 -0.4698116,0 -0.8398438,-0.370087 -0.8398438,-0.839844 0,-0.469893 0.3700006,-0.839844 0.8398438,-0.839844 z m 9.839844,0 c 0.469898,0 0.839844,0.369933 0.839843,0.839844 0,0.469775 -0.369977,0.839844 -0.839843,0.839844 -0.469866,0 -0.839844,-0.370069 -0.839844,-0.839844 0,-0.469911 0.369946,-0.839844 0.839844,-0.839844 z'
        )
        .attr('stroke', '#F20738')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')

      return truck
    } */

    /* <path d="M11.84 4V10.9H2V4H11.84Z" stroke="#1436D3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.5 14.27H11.84V6.44H15.49L17.78 10.22V14.27H16.46" stroke="#1436D3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.7 14.27H11.84V10.9H2V14.27H3.59" stroke="#1436D3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.65 6.44V10.61H17.78" stroke="#1436D3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.11 15.65C5.85007 15.65 6.45 15.05 6.45 14.31C6.45 13.5699 5.85007 12.97 5.11 12.97C4.36994 12.97 3.77 13.5699 3.77 14.31C3.77 15.05 4.36994 15.65 5.11 15.65Z" stroke="#F20738" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.95 15.65C15.6901 15.65 16.29 15.05 16.29 14.31C16.29 13.5699 15.6901 12.97 14.95 12.97C14.2099 12.97 13.61 13.5699 13.61 14.31C13.61 15.05 14.2099 15.65 14.95 15.65Z" stroke="#F20738" stroke-linecap="round" stroke-linejoin="round"/>
    */

    const route = svgEl
      .append('path')
      .datum({
        type: 'LineString',
        coordinates: [
          [0.1278, 51.5074],
          [-74.0059, 40.7128]
        ]
      })
      .attr('class', 'route')
      .attr('d', path)

    var airportMap = {}

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
          var r = 90 - (Math.atan2(-y, x) * 180) / Math.PI

          var s = Math.min(Math.sin(Math.PI * t) * 0.7, 0.3)

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
        .attr('class', 'route')
        .attr('d', path)

      const plane = svgEl
        .append('path')
        .attr('class', 'plane')
        .attr(
          'd',
          'm25.21488,3.93375c-0.44355,0 -0.84275,0.18332 -1.17933,0.51592c-0.33397,0.33267 -0.61055,0.80884 -0.84275,1.40377c-0.45922,1.18911 -0.74362,2.85964 -0.89755,4.86085c-0.15655,1.99729 -0.18263,4.32223 -0.11741,6.81118c-5.51835,2.26427 -16.7116,6.93857 -17.60916,7.98223c-1.19759,1.38937 -0.81143,2.98095 -0.32874,4.03902l18.39971,-3.74549c0.38616,4.88048 0.94192,9.7138 1.42461,13.50099c-1.80032,0.52703 -5.1609,1.56679 -5.85232,2.21255c-0.95496,0.88711 -0.95496,3.75718 -0.95496,3.75718l7.53,-0.61316c0.17743,1.23545 0.28701,1.95767 0.28701,1.95767l0.01304,0.06557l0.06002,0l0.13829,0l0.0574,0l0.01043,-0.06557c0,0 0.11218,-0.72222 0.28961,-1.95767l7.53164,0.61316c0,0 0,-2.87006 -0.95496,-3.75718c-0.69044,-0.64577 -4.05363,-1.68813 -5.85133,-2.21516c0.48009,-3.77545 1.03061,-8.58921 1.42198,-13.45404l18.18207,3.70115c0.48009,-1.05806 0.86881,-2.64965 -0.32617,-4.03902c-0.88969,-1.03062 -11.81147,-5.60054 -17.39409,-7.89352c0.06524,-2.52287 0.04175,-4.88024 -0.1148,-6.89989l0,-0.00476c-0.15655,-1.99844 -0.44094,-3.6683 -0.90277,-4.8561c-0.22699,-0.59493 -0.50356,-1.07111 -0.83754,-1.40377c-0.33658,-0.3326 -0.73578,-0.51592 -1.18194,-0.51592l0,0l-0.00001,0l0,0z'
        )

      const truck = svgEl
        .append('path')
        .attr(
          'd',
          'M 0.5,0 A 0.50005,0.50005 0 0 0 0,0.5 v 6.9003906 3.3691404 a 0.50005,0.50005 0 0 0 0.5,0.5 h 1.3339844 c 0.2066824,0.789493 0.9243014,1.38086 1.7753906,1.38086 0.8510945,0 1.5687095,-0.591368 1.7753906,-1.38086 h 4.9550784 1.333984 c 0.206677,0.789487 0.92428,1.38086 1.775391,1.38086 0.851111,0 1.568713,-0.591373 1.77539,-1.38086 h 1.054688 a 0.50005,0.50005 0 0 0 0.5,-0.5 V 7.1894531 a 0.50005,0.50005 0 0 0 0,-0.1621093 V 6.7207031 A 0.50005,0.50005 0 0 0 16.707031,6.4609375 L 14.417969,2.6816406 A 0.50005,0.50005 0 0 0 13.990234,2.4394531 h -1.765625 a 0.50005,0.50005 0 0 0 -0.08203,-0.00586 0.50005,0.50005 0 0 0 -0.0625,0.00586 H 10.839844 V 0.5 a 0.50005,0.50005 0 0 0 -0.5,-0.5 z M 1,1 H 9.839844 V 2.9394531 6.9003906 H 1 Z m 9.839844,2.4394531 h 0.810547 V 7.109375 a 0.50005,0.50005 0 0 0 0.5,0.5 h 3.628906 v 2.660156 h -0.580078 c -0.234132,-0.747402 -0.929028,-1.2988279 -1.75,-1.2988279 -0.820973,0 -1.515868,0.5514259 -1.75,1.2988279 H 10.839844 V 7.4003906 Z m 1.810547,0 h 1.058593 L 15.628906,6.609375 H 12.650391 Z M 1,7.9003906 H 9.839844 V 10.269531 H 5.359375 c -0.2341359,-0.747405 -0.9290428,-1.2988279 -1.75,-1.2988279 -0.820952,0 -1.5158627,0.5514209 -1.75,1.2988279 H 1 Z M 3.609375,9.970703 c 0.4698568,0 0.8398438,0.369946 0.8398438,0.839844 0,0.469761 -0.3700185,0.839844 -0.8398438,0.839844 -0.4698116,0 -0.8398438,-0.370087 -0.8398438,-0.839844 0,-0.469893 0.3700006,-0.839844 0.8398438,-0.839844 z m 9.839844,0 c 0.469898,0 0.839844,0.369933 0.839843,0.839844 0,0.469775 -0.369977,0.839844 -0.839843,0.839844 -0.469866,0 -0.839844,-0.370069 -0.839844,-0.839844 0,-0.469911 0.369946,-0.839844 0.839844,-0.839844 z'
        )
        .attr('stroke', '#1436D3')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')

      transition(truck, route)
    }

    const geos = topojson.feature(airports, airports.objects.airports).features
    for (const i in geos) {
      airportMap[geos[i].id] = geos[i].geometry.coordinates
    }

    let i = 0
    setInterval(function () {
      if (i > pairs.length - 1) {
        i = 0
      }
      const od = pairs[i]
      fly(od[0], od[1])
      i++
    }, 150)
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
