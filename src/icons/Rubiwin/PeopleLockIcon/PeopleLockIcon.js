import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function PeopleLockIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M3 16C3 13.2386 5.68629 11 9 11C9.97126 11 10.8886 11.1923 11.7002 11.5337'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <circle
        cx='9'
        cy='6'
        r='3'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <circle
        cx='14'
        cy='14'
        r='3'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M15.909 12.0909L12.052 16.3336'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <line
        x1='12.2528'
        y1='12.0909'
        x2='15.7883'
        y2='15.6264'
        stroke={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default PeopleLockIcon
