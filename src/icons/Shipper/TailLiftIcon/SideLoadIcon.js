import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function SideLoadIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M18.1618 12.9352H2V3H18.1618'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 12.9352V15.753H3.95432'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.69028 15.7531H8.57199'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.65412 17.4528C6.59289 17.4528 7.35392 16.6918 7.35392 15.753C7.35392 14.8143 6.59289 14.0532 5.65412 14.0532C4.71534 14.0532 3.95432 14.8143 3.95432 15.753C3.95432 16.6918 4.71534 17.4528 5.65412 17.4528Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.4445 17.4528C11.3833 17.4528 12.1443 16.6918 12.1443 15.753C12.1443 14.8143 11.3833 14.0532 10.4445 14.0532C9.50572 14.0532 8.74469 14.8143 8.74469 15.753C8.74469 16.6918 9.50572 17.4528 10.4445 17.4528Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5806 15.7258H13.4623'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.4437 15.7258H18.1345'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.11792 11.2717H4.86329'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.2355 11.2717H9.98087'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.5259 11.2717H14.2713'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.6166 17.4528C16.5554 17.4528 17.3164 16.6918 17.3164 15.753C17.3164 14.8143 16.5554 14.0532 15.6166 14.0532C14.6778 14.0532 13.9168 14.8143 13.9168 15.753C13.9168 16.6918 14.6778 17.4528 15.6166 17.4528Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.39038 3V12.708'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.7534 3V12.708'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.1073 3V12.708'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default SideLoadIcon
