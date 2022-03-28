import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function ParcelIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M6.6609 3.36072L14.3826 7.05182'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18 5.86315C18 5.6129 17.8609 5.3001 17.5826 5.23754L10.2783 2.04692C10.0696 1.98436 9.93044 1.98436 9.72174 2.04692L2.41739 5.23754C2.13913 5.36266 2 5.6129 2 5.86315V14.0586C2 14.3715 2.13913 14.6217 2.41739 14.6843L10.0696 17.8749C10.2783 17.9374 10.4174 17.9374 10.6261 17.8749L17.5826 14.6843C17.8609 14.5591 18 14.3089 18 14.0586V5.86315Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.3478 8.92865L2.13908 5.48779'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.3479 8.92865L17.861 5.48779'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.26077 10.6803C8.26077 10.5552 8.19121 10.4301 8.05208 10.3675L4.57382 8.80351C4.43469 8.74095 4.36512 8.74095 4.22599 8.80351C4.15643 8.86607 4.08686 8.9912 4.08686 9.11632V11.869C4.08686 11.9941 4.15643 12.1192 4.29556 12.1818L7.77382 13.7458C7.91295 13.8084 7.98251 13.8084 8.12164 13.7458C8.19121 13.6833 8.26077 13.5582 8.26077 13.433V10.6803Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.3479 18V8.92865'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default ParcelIcon
