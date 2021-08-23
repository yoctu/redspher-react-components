import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function LoadingIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M17.5 10.5C17.5 12.0823 17.0308 13.629 16.1518 14.9445C15.2727 16.2601 14.0233 17.2855 12.5615 17.891C11.0997 18.4965 9.49115 18.655 7.9393 18.3463C6.38745 18.0376 4.96196 17.2756 3.84314 16.1568C2.72432 15.038 1.9624 13.6125 1.65372 12.0607C1.34504 10.5089 1.50348 8.90032 2.10898 7.43851C2.71448 5.9767 3.73986 4.72729 5.05545 3.84824C6.37104 2.96918 7.91775 2.5 9.5 2.5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.89 12.11L17.54 10.26L19.4 12.91'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default LoadingIcon
