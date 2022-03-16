import React from 'react'
import { SvgIcon } from '@mui/material'

function BigMapIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M3 6.5V3H7.375M3 12.625V17H7.375M17 12.625V17H13.5M17 6.5V3H13.5'
        stroke='#171F46'
      />
    </SvgIcon>
  )
}

export default BigMapIcon
