import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function TimerIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <circle
        cx='10'
        cy='10.5'
        r='7'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M12.9952 7.59113L10 10.9375'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path d='M10 3.5V2' stroke={primarycolor || themeConstants.grey.main} />
    </SvgIcon>
  )
}

export default TimerIcon
