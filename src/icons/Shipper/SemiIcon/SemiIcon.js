import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function SemiIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M1 12V4H15V6.5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19 14.5751V10.4063L17.5 6H15V12.5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15 12.5H7H1V14.5751H2'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 14.5751H6'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.09421 14.5751H11.5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.136 14.5751H16.0128'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15 10H18.5086'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.34 15.68C4.08006 15.68 4.68 15.0801 4.68 14.34C4.68 13.5999 4.08006 13 3.34 13C2.59994 13 2 13.5999 2 14.34C2 15.0801 2.59994 15.68 3.34 15.68Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.34 15.68C8.08006 15.68 8.68 15.0801 8.68 14.34C8.68 13.5999 8.08006 13 7.34 13C6.59994 13 6 13.5999 6 14.34C6 15.0801 6.59994 15.68 7.34 15.68Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.34 15.68C18.0801 15.68 18.68 15.0801 18.68 14.34C18.68 13.5999 18.0801 13 17.34 13C16.5999 13 16 13.5999 16 14.34C16 15.0801 16.5999 15.68 17.34 15.68Z'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.34 15.68C14.0801 15.68 14.68 15.0801 14.68 14.34C14.68 13.5999 14.0801 13 13.34 13C12.5999 13 12 13.5999 12 14.34C12 15.0801 12.5999 15.68 13.34 15.68Z'
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

export default SemiIcon
