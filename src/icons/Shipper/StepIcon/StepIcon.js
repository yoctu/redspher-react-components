import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function StepIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='-10 -10 40 40'>
      <ellipse
        cx='9.99998'
        cy='10'
        rx='8'
        ry='8'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
      <ellipse
        cx='10'
        cy='10'
        rx='4'
        ry='4'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
      />
    </SvgIcon>
  )
}

export default StepIcon
