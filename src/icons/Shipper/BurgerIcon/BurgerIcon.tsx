import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function BurgerIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M17 10L3 10'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeWidth='2'
      />
      <path
        d='M17 15L3 15'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeWidth='2'
      />
      <path
        d='M17 5L3 5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeWidth='2'
      />
    </SvgIcon>
  )
}

export default BurgerIcon
