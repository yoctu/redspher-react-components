import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function InformationIcon(props) {
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
        d='M9.37468 8.66003H10.6247V14H9.37468V8.66003ZM10.0047 7.78003C9.77801 7.78003 9.58802 7.71003 9.43468 7.57003C9.28135 7.42336 9.20468 7.24336 9.20468 7.03003C9.20468 6.8167 9.28135 6.64003 9.43468 6.50003C9.58802 6.35336 9.77801 6.28003 10.0047 6.28003C10.2313 6.28003 10.4213 6.35003 10.5747 6.49003C10.728 6.62336 10.8047 6.79336 10.8047 7.00003C10.8047 7.22003 10.728 7.4067 10.5747 7.56003C10.428 7.7067 10.238 7.78003 10.0047 7.78003Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
      />
    </SvgIcon>
  )
}

export default InformationIcon
