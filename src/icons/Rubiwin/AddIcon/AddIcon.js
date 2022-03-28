import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function AddIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <line
        x1='3.5'
        y1='9.5'
        x2='16.5'
        y2='9.5'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <line
        x1='10.5'
        y1='3.5'
        x2='10.5'
        y2='16.5'
        stroke={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default AddIcon
