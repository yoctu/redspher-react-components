import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function PlusIcon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <circle
        cx='10'
        cy='10'
        r='8'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
      <line
        x1='10.119'
        y1='5.54761'
        x2='10.119'
        y2='14.4524'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <line
        x1='14.4524'
        y1='10.119'
        x2='5.54765'
        y2='10.119'
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

export default PlusIcon
