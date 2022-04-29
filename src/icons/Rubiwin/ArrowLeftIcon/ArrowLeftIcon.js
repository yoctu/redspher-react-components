import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function ArrowLeftIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M3.64645 9.64645C3.45118 9.84171 3.45118 10.1583 3.64645 10.3536L6.82843 13.5355C7.02369 13.7308 7.34027 13.7308 7.53553 13.5355C7.7308 13.3403 7.7308 13.0237 7.53553 12.8284L4.70711 10L7.53553 7.17157C7.7308 6.97631 7.7308 6.65973 7.53553 6.46447C7.34027 6.2692 7.02369 6.2692 6.82843 6.46447L3.64645 9.64645ZM15 10.5C15.2761 10.5 15.5 10.2761 15.5 10C15.5 9.72386 15.2761 9.5 15 9.5V10.5ZM4 10.5L15 10.5V9.5L4 9.5V10.5Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  )
}

export default ArrowLeftIcon
