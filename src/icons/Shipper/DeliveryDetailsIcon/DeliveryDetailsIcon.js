import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function DeliveryDetailsIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <ellipse
        cx='7.89999'
        cy='13.9737'
        rx='2.1'
        ry='2.02632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <ellipse
        cx='15.1'
        cy='13.9737'
        rx='2.1'
        ry='2.02632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='3.90002'
        y1='13.7632'
        x2='5.30002'
        y2='13.7632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 13.7632L12.9 13.7632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.7 5.86841H15.3181L17.7999 9.34209'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.5 13.9737H19V10.7895L17.8 9.34211H12.7V5H3.40002'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.4 7.02631H8.79999M1 9.3421H6.39999M3.1 11.3684H6.09999'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default DeliveryDetailsIcon
