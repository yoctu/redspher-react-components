import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function BurgerCloseIcon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <rect
        width='17.1102'
        height='2.13878'
        transform='matrix(0.704387 0.709816 -0.704387 0.709816 4.50653 3.33679)'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
      <rect
        width='17.1102'
        height='2.13878'
        transform='matrix(0.704387 -0.709816 0.704387 0.709816 3.44125 15.1451)'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
    </SvgIcon>
  )
}

export default BurgerCloseIcon
