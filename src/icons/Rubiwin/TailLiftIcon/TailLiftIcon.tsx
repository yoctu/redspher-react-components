import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function TailLiftIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M18.16 12.9352H5V3H18.16'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M5 12.9352V15.753H6.5'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M5 16L4.5 17L1 17.5'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M10.6903 15.7531H13.5703'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M8.65415 17.4528C9.59292 17.4528 10.354 16.6918 10.354 15.753C10.354 14.8143 9.59292 14.0532 8.65415 14.0532C7.71537 14.0532 6.95435 14.8143 6.95435 15.753C6.95435 16.6918 7.71537 17.4528 8.65415 17.4528Z'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M17.4436 15.7258H18.1344'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M15.6166 17.4528C16.5553 17.4528 17.3164 16.6918 17.3164 15.753C17.3164 14.8143 16.5553 14.0532 15.6166 14.0532C14.6778 14.0532 13.9167 14.8143 13.9167 15.753C13.9167 16.6918 14.6778 17.4528 15.6166 17.4528Z'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M17.1073 3V12.708'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  )
}

export default TailLiftIcon
