import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function ArrowTopIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M10.3536 4.14645C10.1583 3.95118 9.84171 3.95118 9.64645 4.14645L6.46447 7.32843C6.2692 7.52369 6.2692 7.84027 6.46447 8.03553C6.65973 8.2308 6.97631 8.2308 7.17157 8.03553L10 5.20711L12.8284 8.03553C13.0237 8.2308 13.3403 8.2308 13.5355 8.03553C13.7308 7.84027 13.7308 7.52369 13.5355 7.32843L10.3536 4.14645ZM9.5 15.5C9.5 15.7761 9.72386 16 10 16C10.2761 16 10.5 15.7761 10.5 15.5L9.5 15.5ZM9.5 4.5L9.5 15.5L10.5 15.5L10.5 4.5L9.5 4.5Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  )
}

export default ArrowTopIcon
