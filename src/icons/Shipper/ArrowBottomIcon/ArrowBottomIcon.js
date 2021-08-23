import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function ArrowBottomIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M14 8L9.75736 12.2426L5.51472 8'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default ArrowBottomIcon
