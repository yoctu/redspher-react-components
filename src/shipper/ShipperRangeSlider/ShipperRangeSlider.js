import React from 'react'
import style from './ShipperRangeSlider.module.scss'
import { Slider, Typography } from '@material-ui/core'

const ShipperRangeSlider = ({
  value,
  onChange,
  valueLabelFormat,
  rangeDeltaValue,
  min,
  max,
  paddingLeft,
  paddingRight
}) => (
  <div className={style.rangeSlider}>
    <Slider
      value={value}
      onChange={onChange}
      valueLabelDisplay='on'
      valueLabelFormat={valueLabelFormat}
      min={min}
      max={max}
      aria-labelledby='range-slider'
    />
    <Typography
      style={{
        textAlign: 'center',
        paddingLeft: paddingLeft + '%',
        paddingRight: paddingRight + '%'
      }}
      id='range-slider'
      variant='body2'
    >
      + {rangeDeltaValue}h
    </Typography>
  </div>
)

ShipperRangeSlider.propTypes = {}

export default ShipperRangeSlider
