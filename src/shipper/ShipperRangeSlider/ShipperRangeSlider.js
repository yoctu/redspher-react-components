import React, { useState } from 'react'
import style from './ShipperRangeSlider.module.scss'
import { Slider, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const ShipperRangeSlider = ({ min, max, rangeLabelFormat }) => {
  const [rangeValue, setRangeValue] = React.useState([min, max])
  const [rangeDeltaValue, setRangeDeltaValue] = useState(max - min)

  const handleRangeChange = (event, newValue) => {
    setRangeValue(newValue)
    displayRangeDelta()
  }

  const displayRangeDelta = () => {
    setRangeDeltaValue(`${rangeValue[1] - rangeValue[0]}`)
  }
  return (
    <div className={style.rangeSlider}>
      <Slider
        value={rangeValue}
        onChange={handleRangeChange}
        valueLabelDisplay='on'
        valueLabelFormat={rangeLabelFormat}
        min={min}
        max={max}
      />
      <Typography
        style={{
          textAlign: 'center',
          paddingLeft: (100 * rangeValue[0]) / max + '%',
          paddingRight: (100 * (max - rangeValue[1])) / max + '%'
        }}
        variant='body2'
      >
        + {rangeDeltaValue}h
      </Typography>
    </div>
  )
}

ShipperRangeSlider.propTypes = {
  /** min value for the slider */
  min: PropTypes.number,
  /** max value for the slider */
  max: PropTypes.number,
  /** formatted label */
  rangeLabelFormat: PropTypes.bool
}

export default ShipperRangeSlider
