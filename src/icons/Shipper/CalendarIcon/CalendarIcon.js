import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function CalendarIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M3 4.00006C2.8 4.00006 2.66667 4.13339 2.66667 4.33339V17.0001C2.66667 17.2001 2.8 17.3334 3 17.3334H17C17.2 17.3334 17.3333 17.2001 17.3333 17.0001V4.33339C17.3333 4.13339 17.2 4.00006 17 4.00006H3Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
      <line
        x1='13.5'
        y1='2.5'
        x2='13.5'
        y2='5.5'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <line
        x1='6.5'
        y1='2.5'
        x2='6.5'
        y2='5.5'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <line
        x1='14.5'
        y1='8.5'
        x2='5.5'
        y2='8.5'
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

export default CalendarIcon
