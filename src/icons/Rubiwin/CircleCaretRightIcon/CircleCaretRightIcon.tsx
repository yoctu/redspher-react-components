import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function CircleCaretRightIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M8.35982 6.0402L12.3196 10L8.35982 13.9598'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M16.5 10C16.5 13.5899 13.5899 16.5 10 16.5V17.5C14.1421 17.5 17.5 14.1421 17.5 10H16.5ZM10 3.5C13.5899 3.5 16.5 6.41015 16.5 10H17.5C17.5 5.85786 14.1421 2.5 10 2.5V3.5ZM3.5 10C3.5 6.41015 6.41015 3.5 10 3.5V2.5C5.85786 2.5 2.5 5.85786 2.5 10H3.5ZM2.5 10C2.5 14.1421 5.85786 17.5 10 17.5V16.5C6.41015 16.5 3.5 13.5899 3.5 10H2.5Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  )
}

export default CircleCaretRightIcon
