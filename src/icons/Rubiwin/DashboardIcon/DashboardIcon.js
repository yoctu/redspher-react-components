import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function DashboardIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <rect
        x='2'
        y='4'
        width='16'
        height='12'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <rect
        x='9'
        y='8'
        width='7'
        height='6'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <rect
        x='4'
        y='8'
        width='3'
        height='6'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <line
        x1='2'
        y1='6.5'
        x2='18'
        y2='6.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
    </SvgIcon>
  )
}

export default DashboardIcon
