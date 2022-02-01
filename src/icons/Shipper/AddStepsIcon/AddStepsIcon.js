import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function AddStepsIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <ellipse
        cx='10'
        cy='10'
        rx='4'
        ry='4'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
      <line
        x1='9.89999'
        y1='7.5'
        x2='9.89999'
        y2='12.5'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <line
        x1='12.5'
        y1='9.90002'
        x2='7.5'
        y2='9.90002'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <path
        d='M10 14L10 17'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeDasharray='2 2'
      />
      <path
        d='M10 3L10 6'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeDasharray='2 2'
      />
    </SvgIcon>
  )
}

export default AddStepsIcon
