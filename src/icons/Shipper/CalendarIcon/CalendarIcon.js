import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function CalendarIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M17 18H3C2.46667 18 2 17.5334 2 17V4.33337C2 3.80004 2.46667 3.33337 3 3.33337H17C17.5333 3.33337 18 3.80004 18 4.33337V17C18 17.5334 17.5333 18 17 18ZM3 4.00004C2.8 4.00004 2.66667 4.13337 2.66667 4.33337V17C2.66667 17.2 2.8 17.3334 3 17.3334H17C17.2 17.3334 17.3333 17.2 17.3333 17V4.33337C17.3333 4.13337 17.2 4.00004 17 4.00004H3Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
      <path
        d='M5.66671 6C5.46671 6 5.33337 5.86667 5.33337 5.66667V2.33333C5.33337 2.13333 5.46671 2 5.66671 2C5.86671 2 6.00004 2.13333 6.00004 2.33333V5.66667C6.00004 5.86667 5.86671 6 5.66671 6Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
      />
      <path
        d='M14.3333 6C14.1333 6 14 5.86667 14 5.66667V2.33333C14 2.13333 14.1333 2 14.3333 2C14.5333 2 14.6667 2.13333 14.6667 2.33333V5.66667C14.6667 5.86667 14.5333 6 14.3333 6Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
      />
      <path
        d='M15.75 7.33329H4.25C4.1 7.33329 4 7.19996 4 6.99996C4 6.79996 4.1 6.66663 4.25 6.66663H15.75C15.9 6.66663 16 6.79996 16 6.99996C16 7.19996 15.9 7.33329 15.75 7.33329Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
      />
    </SvgIcon>
  )
}

export default CalendarIcon
