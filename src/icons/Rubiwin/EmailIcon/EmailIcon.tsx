import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function EmailIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <rect
        x='2'
        y='4'
        width='16'
        height='12'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M10 11.5L9.65803 11.8648C9.85036 12.0451 10.1496 12.0451 10.342 11.8648L10 11.5ZM1.65803 4.36477L9.65803 11.8648L10.342 11.1352L2.34197 3.63523L1.65803 4.36477ZM10.342 11.8648L18.342 4.36477L17.658 3.63523L9.65803 11.1352L10.342 11.8648Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  )
}

export default EmailIcon
