import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function WarningIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M18.2155 16.412L10 2L1.78454 16.412H18.2155Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinejoin='round'
      />
      <path
        d='M10 7L10 12'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
      />
      <circle
        cx='10'
        cy='14'
        r='0.5'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
      />
    </SvgIcon>
  )
}

export default WarningIcon
