import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function ExpertIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M5 9L6.29313 11.2202L8.80423 11.7639L7.09232 13.6798L7.35114 16.2361L5 15.2L2.64886 16.2361L2.90768 13.6798L1.19577 11.7639L3.70687 11.2202L5 9Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 2L11.2931 4.22016L13.8042 4.76393L12.0923 6.67984L12.3511 9.23607L10 8.2L7.64886 9.23607L7.90768 6.67984L6.19577 4.76393L8.70687 4.22016L10 2Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15 9L16.2931 11.2202L18.8042 11.7639L17.0923 13.6798L17.3511 16.2361L15 15.2L12.6489 16.2361L12.9077 13.6798L11.1958 11.7639L13.7069 11.2202L15 9Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default ExpertIcon
