import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function BurgerIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M17 10L3 10'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeWidth='2'
      />
      <path
        d='M17 15L3 15'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeWidth='2'
      />
      <path
        d='M17 5L3 5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeWidth='2'
      />
    </SvgIcon>
  )
}

export default BurgerIcon
