import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function BurgerIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <rect
        x='2'
        y='4'
        width='16'
        height='2'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
      <rect
        x='2'
        y='9'
        width='16'
        height='2'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
      />
      <rect
        x='2'
        y='14'
        width='16'
        height='2'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
    </SvgIcon>
  )
}

export default BurgerIcon
