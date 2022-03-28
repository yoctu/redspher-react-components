import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function DetailIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <circle
        cx='10.9137'
        cy='8'
        r='5'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M7.8302 12.1313L4.64277 16.1113'
        stroke={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default DetailIcon
