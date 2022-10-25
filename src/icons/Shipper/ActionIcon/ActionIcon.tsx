import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function ActionIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <circle
        cx='10'
        cy='6'
        r='0.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
      <circle
        cx='10'
        cy='10'
        r='0.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
      <circle
        cx='10'
        cy='14'
        r='0.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
    </SvgIcon>
  )
}

export default ActionIcon
