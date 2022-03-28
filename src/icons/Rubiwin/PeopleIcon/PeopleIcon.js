import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function PeopleIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M16 17C16 14.2386 13.3137 12 10 12C6.68629 12 4 14.2386 4 17'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <circle
        cx='10'
        cy='7'
        r='3'
        stroke={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default PeopleIcon
