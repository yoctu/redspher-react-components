import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function CheckboxBlankIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 16 16'>
      <rect
        x='1'
        y='1'
        width='14'
        height='14'
        rx='1'
        stroke={primarycolor || themeConstants.grey.light}
        fillOpacity={0}
      />
    </SvgIcon>
  )
}

export default CheckboxBlankIcon
