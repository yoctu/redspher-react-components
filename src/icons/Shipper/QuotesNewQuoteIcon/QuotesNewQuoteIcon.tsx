import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function QuotesNewQuoteIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M5.66089 2.36072L13.3826 6.05182'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 7.5V4.86315C17 4.6129 16.8609 4.3001 16.5826 4.23754L9.27826 1.04692C9.06957 0.98436 8.93044 0.98436 8.72174 1.04692L1.41739 4.23754C1.13913 4.36266 1 4.6129 1 4.86315V13.0586C1 13.3715 1.13913 13.6217 1.41739 13.6843L9.06957 16.8749C9.27826 16.9374 9.41739 16.9374 9.62609 16.8749L12.5 15.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.3478 7.92865L1.1391 4.48779'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.3479 7.92865L16.8609 4.48779'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.26077 9.68034C7.26077 9.55522 7.1912 9.4301 7.05207 9.36754L3.57381 7.80351C3.43468 7.74095 3.36511 7.74095 3.22598 7.80351C3.15642 7.86607 3.08685 7.9912 3.08685 8.11632V10.869C3.08685 10.9941 3.15642 11.1192 3.29555 11.1818L6.77381 12.7458C6.91294 12.8084 6.98251 12.8084 7.12164 12.7458C7.1912 12.6833 7.26077 12.5582 7.26077 12.433V9.68034Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.3479 17V7.92865'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.0415 11.5C18.0415 13.1569 16.6983 14.5 15.0415 14.5C13.3846 14.5 12.0415 13.1569 12.0415 11.5C12.0415 9.84315 13.3846 8.5 15.0415 8.5C16.6983 8.5 18.0415 9.84315 18.0415 11.5Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
      />
      <path
        d='M14.9999 9.99945L14.9999 12.9995'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <path
        d='M16.5 11.4999L13.5 11.4999'
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

export default QuotesNewQuoteIcon
