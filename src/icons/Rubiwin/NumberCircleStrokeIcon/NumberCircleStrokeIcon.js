import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function NumberCircleStrokeIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <circle
        cx='10'
        cy='10'
        r='7'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <path
        d='M10.9557 7V14H9.6557V8.09H8.1757V7H10.9557Z'
        fill={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
    </SvgIcon>
  )
}

export default NumberCircleStrokeIcon
