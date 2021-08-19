import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function HourIcon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <ellipse
        cx='9.99998'
        cy='10'
        rx='8'
        ry='8'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
      <path
        d='M10 11V4'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <path
        d='M10 11L12 9.5L14 8'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
    </SvgIcon>
  )
}

export default HourIcon
