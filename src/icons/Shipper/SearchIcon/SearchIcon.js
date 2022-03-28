import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function SearchIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M13.8848 13.2376L17.8126 16.2621'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='8.32059'
        cy='9.32059'
        r='6.32059'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default SearchIcon
