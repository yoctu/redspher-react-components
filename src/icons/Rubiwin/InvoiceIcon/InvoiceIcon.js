import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function InvoiceIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <rect
        x='5'
        y='7.5'
        width='2'
        height='6'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <rect
        x='9'
        y='7.5'
        width='2'
        height='6'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <rect
        x='13'
        y='7.5'
        width='2'
        height='6'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M3.5 15H16.5V17H3.5V15Z'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M3 6L10 2L17 6H3Z'
        stroke={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default InvoiceIcon
