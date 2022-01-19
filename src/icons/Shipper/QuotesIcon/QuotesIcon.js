import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function QuotesIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M14.6483 12.8235V2H2V18H14.6483V16.8235V16'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='4.44587'
        y1='4.32349'
        x2='12.2024'
        y2='4.32349'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='4.44587'
        y1='7.14709'
        x2='12.2024'
        y2='7.14709'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='4.44587'
        y1='9.97058'
        x2='12.2024'
        y2='9.97058'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='4.44587'
        y1='12.7941'
        x2='12.2024'
        y2='12.7941'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.0126 15.1998L16.7621 11.4117L18 12.8641L13.2505 16.6521L11.3755 16.9278L12.0126 15.1998Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default QuotesIcon
