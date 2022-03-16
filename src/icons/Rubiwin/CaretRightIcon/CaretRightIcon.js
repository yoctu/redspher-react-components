import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function CaretRightIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M8.65685 4.00001L14.3137 9.65686L8.65685 15.3137'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
    </SvgIcon>
  )
}

export default CaretRightIcon
