import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function NotIncludedIcon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <path
        d='M4 15L16.5 5.5'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <ellipse
        cx='10'
        cy='10'
        rx='8'
        ry='8'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
    </SvgIcon>
  )
}

export default NotIncludedIcon
