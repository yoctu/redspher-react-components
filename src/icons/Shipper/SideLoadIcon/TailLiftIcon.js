import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function TailLiftIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M18 16H18.97'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 16L6.79 17.47L1 18.47'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19 13H7V2H19'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 13V16H9'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13 16.03H13.97'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.87 17.9C11.9028 17.9 12.74 17.0627 12.74 16.03C12.74 14.9972 11.9028 14.16 10.87 14.16C9.83723 14.16 9 14.9972 9 16.03C9 17.0627 9.83723 17.9 10.87 17.9Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.08 17.9C17.1128 17.9 17.95 17.0627 17.95 16.03C17.95 14.9972 17.1128 14.16 16.08 14.16C15.0473 14.16 14.21 14.9972 14.21 16.03C14.21 17.0627 15.0473 17.9 16.08 17.9Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.48001 9.11001V5.76001'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.48001 6.57001L9.48001 5.57001L10.48 6.57001'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.36 5.57001V8.92001'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.36 8.10999L11.36 9.10999L10.36 8.10999'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default TailLiftIcon
