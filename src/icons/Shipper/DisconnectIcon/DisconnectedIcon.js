import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function DisconnectedIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M5.33527 3.5C3.31542 4.95211 2 7.32244 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 7.32244 16.6846 4.95211 14.6647 3.5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
      />
      <path
        d='M10 9.5V2'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
    </SvgIcon>
  )
}

export default DisconnectedIcon
