import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function DocumentIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M15.1334 3.6842H17V18H5.80005V16.3158'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M3 2H15.1333V16.3158H3V2Z'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <line
        x1='5.3667'
        y1='5.71057'
        x2='12.7667'
        y2='5.71057'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <line
        x1='5.3667'
        y1='8.23682'
        x2='12.7667'
        y2='8.23682'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <line
        x1='5.3667'
        y1='10.7632'
        x2='12.7667'
        y2='10.7632'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <line
        x1='5.3667'
        y1='13.2894'
        x2='12.7667'
        y2='13.2894'
        stroke={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default DocumentIcon
