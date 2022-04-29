import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function UploadIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M10.3536 3.64645C10.1583 3.45118 9.84171 3.45118 9.64644 3.64645L6.46446 6.82843C6.2692 7.02369 6.2692 7.34027 6.46446 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10 4.70711L12.8284 7.53553C13.0237 7.7308 13.3403 7.7308 13.5355 7.53553C13.7308 7.34027 13.7308 7.02369 13.5355 6.82843L10.3536 3.64645ZM9.5 12.5C9.5 12.7761 9.72386 13 10 13C10.2761 13 10.5 12.7761 10.5 12.5L9.5 12.5ZM9.5 4L9.5 12.5L10.5 12.5L10.5 4L9.5 4Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M5 13.5V16H15V13.5'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  )
}

export default UploadIcon
