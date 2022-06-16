import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function FavorisFillIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M10.0014 2L12.4734 6.93827L18 7.73001L14.0007 11.5733L14.9454 17L10.0014 14.4369L5.05734 17L6.00204 11.5733L2 7.73001L7.52935 6.93827L10.0014 2Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  )
}

export default FavorisFillIcon
