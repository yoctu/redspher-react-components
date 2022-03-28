import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function PhoneIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <rect
        x='5'
        y='2'
        width='10'
        height='16'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path d='M5 15H15' stroke={primarycolor || themeConstants.grey.main} />
      <circle
        cx='10.0715'
        cy='16.2142'
        r='0.5'
        fill={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default PhoneIcon
