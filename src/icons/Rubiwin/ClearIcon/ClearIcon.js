import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function ClearIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <line
        x1='14.4497'
        y1='5.55025'
        x2='4.55021'
        y2='15.4497'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <line
        x1='4.55025'
        y1='5.55023'
        x2='14.4497'
        y2='15.4497'
        stroke={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default ClearIcon
