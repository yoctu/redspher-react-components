import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function HistogramIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <rect
        x='4'
        y='4'
        width='3'
        height='13'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <rect
        x='9'
        y='11.5833'
        width='3'
        height='5.41667'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <rect
        x='14'
        y='8.33331'
        width='3'
        height='8.66667'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
    </SvgIcon>
  )
}

export default HistogramIcon
