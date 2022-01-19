import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function RequestIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M8.5 14H18V1H2V14H5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 14L8.5 19V14'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.32817 9C9.33828 8.51075 9.42025 8.11685 9.5741 7.81829C9.72794 7.51974 10.0581 7.16862 10.5645 6.76493C11.0699 6.36034 11.3961 6.0743 11.5432 5.90681C11.6901 5.73746 11.8037 5.5507 11.8801 5.35317C11.9638 5.13069 12.0042 4.89897 11.9997 4.6664C11.9997 4.14803 11.8295 3.7407 11.4893 3.44442C11.149 3.14814 10.6743 3 10.0651 3C9.45085 3 8.95563 3.142 8.57944 3.42599C8.20325 3.70998 8.01011 4.09501 8 4.58107'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
      />
      <circle
        cx='9.5'
        cy='10.5'
        r='0.25'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeWidth='0.5'
      />
    </SvgIcon>
  )
}

export default RequestIcon
