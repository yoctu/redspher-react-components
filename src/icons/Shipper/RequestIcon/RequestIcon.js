import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function RequestIcon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <path
        d='M8.5 14H18V1H2V14H5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 14L8.5 19V14'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.43575 8.8625C9.43575 8.42917 9.52142 8.07083 9.69274 7.7875C9.87151 7.50417 10.1285 7.19167 10.4637 6.85C10.7095 6.6 10.8883 6.39167 11 6.225C11.1192 6.05 11.1788 5.85417 11.1788 5.6375C11.1788 5.32917 11.067 5.0875 10.8436 4.9125C10.6276 4.72917 10.3371 4.6375 9.97207 4.6375C9.62197 4.6375 9.30912 4.72083 9.03352 4.8875C8.76536 5.04583 8.53818 5.27083 8.35196 5.5625L7 4.675C7.31285 4.14167 7.73371 3.72917 8.26257 3.4375C8.79888 3.14583 9.43203 3 10.162 3C11.0186 3 11.7039 3.20417 12.2179 3.6125C12.7393 4.02083 13 4.5875 13 5.3125C13 5.65417 12.9479 5.95417 12.8436 6.2125C12.7467 6.47083 12.6238 6.69167 12.4749 6.875C12.3333 7.05 12.1471 7.25417 11.9162 7.4875C11.6406 7.7625 11.4395 7.99583 11.3128 8.1875C11.1862 8.37083 11.1229 8.59583 11.1229 8.8625H9.43575ZM10.2849 12C9.97952 12 9.72253 11.8917 9.51397 11.675C9.31285 11.45 9.21229 11.1792 9.21229 10.8625C9.21229 10.5458 9.31285 10.2833 9.51397 10.075C9.71508 9.85833 9.97207 9.75 10.2849 9.75C10.5978 9.75 10.8547 9.85833 11.0559 10.075C11.257 10.2833 11.3575 10.5458 11.3575 10.8625C11.3575 11.1792 11.2533 11.45 11.0447 11.675C10.8436 11.8917 10.5903 12 10.2849 12Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
      />
    </SvgIcon>
  )
}

export default RequestIcon
