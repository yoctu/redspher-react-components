import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function BurgerCloseIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M3.40117 3.11881L17 16.8813'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeWidth='2'
      />
      <path
        d='M16.6715 3.00006L3.07271 17'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeWidth='2'
      />
    </SvgIcon>
  )
}

export default BurgerCloseIcon
