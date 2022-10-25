import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function MessageIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 14 15'>
      <path
        d='M11.9001 10.0635L11.9001 3.29999L2.1001 3.29999L2.1001 10.0635H4.5501L4.5501 11.7L7.0001 10.0635L11.9001 10.0635Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.14185 5.39996H9.85851M4.14185 7.49996H9.85851'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
    </SvgIcon>
  )
}

export default MessageIcon
