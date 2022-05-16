import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function ShipmentsOnGoingIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <ellipse
        cx='6.40011'
        cy='11.9737'
        rx='2.1'
        ry='2.02632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <ellipse
        cx='13.6001'
        cy='11.9737'
        rx='2.1'
        ry='2.02632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='2.40015'
        y1='11.7632'
        x2='3.80014'
        y2='11.7632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.50012 11.7632L11.4001 11.7632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.2001 3.86841H13.8183L16.3001 7.34209'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.0001 11.9737H17.5001V8.78947L16.3001 7.34211H11.2001V3H9.00024'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 8L2.5 8M1.77778 9.5H4'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 2.58316C7.5 2.47241 7.43842 2.33396 7.31527 2.30627L4.5 1.01231C4.5 1.01231 4.34606 0.984617 4.25369 1.01231L1.68473 2.30627C1.56158 2.36165 1.5 2.47241 1.5 2.58316V4.39678V5.73483C1.5 5.87327 1.56158 5.98403 1.68473 6.01172L4.37089 7.42385C4.46326 7.45154 4.52484 7.45154 4.6172 7.42385L7.31527 6.01172C7.31527 6.01172 7.5 5.84559 7.5 5.73483V2.58316Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.49415 3.93933L1.685 2.64441'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.49396 3.94086L7.49982 2.51117'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.49396 7.0116V3.93933'
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

export default ShipmentsOnGoingIcon
