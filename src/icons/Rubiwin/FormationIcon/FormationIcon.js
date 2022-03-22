import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function FormationIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M4.85714 9.43704V14.1429C6.57746 15.4769 7.81536 15.8571 10 15.8571C12.1846 15.8571 12.8511 15.4769 14.5714 14.1429L14.6235 9.64973M3.33333 8.81306L2 8.26708L10 5L18 8.26708L10 11.543L4 9.08605L3.33333 8.81306Z'
        stroke={primarycolor || themeConstants.grey.main}
        strokeMiterlimit='10'
      />
      <path
        d='M16.2144 9L16.2144 13.6429'
        stroke={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default FormationIcon
