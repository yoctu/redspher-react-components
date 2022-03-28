import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function PrintIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <circle
        cx='5.15'
        cy='10.15'
        r='0.15'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
      />
      <line
        x1='8.5'
        y1='13.5'
        x2='11.5'
        y2='13.5'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <line
        x1='8.5'
        y1='15.5'
        x2='11.5'
        y2='15.5'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <path
        d='M6 14H3V8H17V14H14'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinejoin='round'
      />
      <rect
        x='6'
        y='4'
        width='8'
        height='4'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinejoin='round'
      />
      <rect
        x='6'
        y='12'
        width='8'
        height='5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default PrintIcon
