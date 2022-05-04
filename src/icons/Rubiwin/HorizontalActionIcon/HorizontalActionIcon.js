import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function HorizontalActionIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M6 11.2998V9.6998'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M10 11.2998V9.6998'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M14 11.2998V9.6998'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  )
}

export default HorizontalActionIcon
