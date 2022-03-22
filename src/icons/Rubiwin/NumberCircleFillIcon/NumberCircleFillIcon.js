import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function NumberCircleFillIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <circle
        cx='10'
        cy='10'
        r='7'
        fill={primarycolor || themeConstants.grey.main}
      />
      <path d='M10.9557 7V14H9.6557V8.09H8.1757V7H10.9557Z' fill='white' />
    </SvgIcon>
  )
}

export default NumberCircleFillIcon
