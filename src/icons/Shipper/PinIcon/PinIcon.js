import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function PinIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M16.6 8.36573C16.6 12.4337 10.3 19 10.3 19C10.3 19 4 12.4337 4 8.36573C4 4.29775 6.82061 1 10.3 1C13.7794 1 16.6 4.29775 16.6 8.36573Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <ellipse
        cx='10.3001'
        cy='7.353'
        rx='2.1'
        ry='2.11765'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
      />
    </SvgIcon>
  )
}

export default PinIcon
