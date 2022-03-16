import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function FiltersIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M3.5 10L6 10M8.5 10L16.5 10'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <circle
        cx='7'
        cy='10'
        r='1'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <path
        d='M3.5 6L13 6M15 6L16.5 6'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <circle
        cx='14'
        cy='6'
        r='1'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <path
        d='M3.5 14L10 14M12 14L16.5 14'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <circle
        cx='11'
        cy='14'
        r='1'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
    </SvgIcon>
  )
}

export default FiltersIcon
