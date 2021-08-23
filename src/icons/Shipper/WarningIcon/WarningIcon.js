import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function WarningIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M18.2155 16.412L10 2L1.78454 16.412H18.2155Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinejoin='round'
      />
      <path
        d='M10.6347 11.6201L9.38469 11.6201L9.38469 6.28006L10.6347 6.28006L10.6347 11.6201ZM10.0047 12.5001C10.2314 12.5001 10.4214 12.5701 10.5747 12.7101C10.728 12.8567 10.8047 13.0367 10.8047 13.2501C10.8047 13.4634 10.728 13.6401 10.5747 13.7801C10.4214 13.9267 10.2314 14.0001 10.0047 14.0001C9.77802 14.0001 9.58802 13.9301 9.43469 13.7901C9.28135 13.6567 9.20469 13.4867 9.20469 13.2801C9.20469 13.0601 9.28135 12.8734 9.43469 12.7201C9.58135 12.5734 9.77135 12.5001 10.0047 12.5001Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
      />
    </SvgIcon>
  )
}

export default WarningIcon
