import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function DisconnectedIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M5.31273 4.14476C5.52819 3.97205 5.56284 3.65736 5.39012 3.4419C5.21741 3.22644 4.90273 3.1918 4.68727 3.36451L5.31273 4.14476ZM15.3127 3.36451C15.0972 3.1918 14.7826 3.22644 14.6098 3.4419C14.4371 3.65736 14.4718 3.97205 14.6872 4.14476L15.3127 3.36451ZM17.5 10C17.5 14.1422 14.1421 17.5 9.99998 17.5V18.5C14.6944 18.5 18.5 14.6944 18.5 10H17.5ZM9.99998 17.5C5.85785 17.5 2.49998 14.1422 2.49998 10H1.49998C1.49998 14.6944 5.30556 18.5 9.99998 18.5V17.5ZM2.49998 10C2.49998 7.63175 3.59709 5.52007 5.31273 4.14476L4.68727 3.36451C2.74504 4.92145 1.49998 7.31551 1.49998 10H2.49998ZM14.6872 4.14476C16.4029 5.52007 17.5 7.63175 17.5 10H18.5C18.5 7.31551 17.2549 4.92145 15.3127 3.36451L14.6872 4.14476Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
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
