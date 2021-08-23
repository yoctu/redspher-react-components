import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function TimerIcon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <path
        d='M13.9916 15.1644C13.9553 14.3995 13.7048 13.6637 13.2726 13.0521C12.8403 12.4405 12.2461 11.9811 11.5667 11.7333L10.0083 11.0489L8.49998 11.7245C7.82403 11.9718 7.23359 12.4306 6.80552 13.041C6.37745 13.6514 6.13161 14.3851 6.10001 15.1467V16.4089H13.9916V15.1644Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 2H15'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.375 8.52449L10 9.28892L11.6667 8.52449C12.3196 8.26117 12.8864 7.80062 13.2978 7.19916C13.7092 6.5977 13.9475 5.88139 13.9833 5.13782V3.60004H6.09167V5.13782C6.12274 5.87789 6.3552 6.59227 6.7607 7.19371C7.16619 7.79514 7.72714 8.25757 8.375 8.52449V8.52449Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15 18H5'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default TimerIcon
