import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function VisibilityIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M9.99995 12.4545C8.64585 12.4545 7.54541 11.3541 7.54541 9.99998C7.54541 8.64588 8.64585 7.54543 9.99995 7.54543C11.3541 7.54543 12.4545 8.64588 12.4545 9.99998C12.4545 11.3541 11.354 12.4545 9.99995 12.4545Z'
        fill={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.tertiary.main
        }
      />
      <path
        d='M10 16.1364C5.90909 16.1364 2.41547 13.5918 1 9.99998C2.41547 6.40817 5.90909 3.86361 10 3.86361C14.095 3.86361 17.5846 6.40817 19 9.99998C17.5846 13.5918 14.095 16.1364 10 16.1364ZM10 5.90909C7.74184 5.90909 5.90909 7.74184 5.90909 10C5.90909 12.2582 7.74184 14.0909 10 14.0909C12.2582 14.0909 14.0909 12.2582 14.0909 9.99998C14.0909 7.7418 12.2582 5.90909 10 5.90909Z'
        fill={
          props.primarycolor ? props.primarycolor : themeConstants.primary.dark
        }
      />
    </SvgIcon>
  )
}

export default VisibilityIcon
