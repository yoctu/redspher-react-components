import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function AttentionIcon({ primarycolor, secondarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <g clipPath='url(#clip0_688_347)'>
        <path
          d='M10.8768 12.3297L9.20382 12.3297L9.20382 6.56L10.8768 6.56L10.8768 12.3297ZM10.0403 13.134C10.3477 13.134 10.598 13.2233 10.791 13.4021C10.984 13.5808 11.0806 13.8025 11.0806 14.067C11.0806 14.3315 10.984 14.5532 10.791 14.7319C10.598 14.9106 10.3477 15 10.0403 15C9.73288 15 9.48265 14.9142 9.28961 14.7426C9.09658 14.571 9.00006 14.3565 9.00006 14.0992C9.00006 13.8203 9.09658 13.588 9.28961 13.4021C9.48265 13.2233 9.73288 13.134 10.0403 13.134Z'
          fill={primarycolor || themeConstants.grey.main}
          strokeOpacity={0}
        />
        <path
          d='M10 2L18.6603 17H1.33975L10 2Z'
          stroke={primarycolor || themeConstants.grey.main}
          fillOpacity={0}
        />
      </g>
      <defs>
        <clipPath id='clip0_688_347'>
          <rect
            width='20'
            height='20'
            fill={secondarycolor || themeConstants.white.main}
            strokeOpacity={0}
          />
        </clipPath>
      </defs>
    </SvgIcon>
  )
}

export default AttentionIcon
