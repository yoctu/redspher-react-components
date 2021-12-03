import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function ArrowRight2Icon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M15 10L4 10'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
      />
      <path
        d='M11.5 13.5L15 10L11.5 6.5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default ArrowRight2Icon
