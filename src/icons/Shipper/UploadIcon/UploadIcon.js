import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function UploadIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M2.5 17.13H18.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.5 14.24L10.5 4.08999'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.47 6.52997L10.5 3.49997L13.53 6.52997'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default UploadIcon
