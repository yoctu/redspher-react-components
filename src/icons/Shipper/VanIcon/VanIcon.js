import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

/*

 */

function VanIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M3 11L2.50249 10.9502C2.50083 10.9668 2.5 10.9834 2.5 11H3ZM13.5 13.5C13.7761 13.5 14 13.2762 14 13C14 12.7239 13.7761 12.5 13.5 12.5V13.5ZM14 6.00004L14.416 5.72269C14.3233 5.58359 14.1672 5.50004 14 5.50004L14 6.00004ZM17.78 9.50002H18.28C18.28 9.27596 18.1309 9.07925 17.9152 9.01865L17.78 9.50002ZM17.78 13V13.5C18.0561 13.5 18.28 13.2762 18.28 13H17.78ZM16.46 12.5C16.1839 12.5 15.96 12.7239 15.96 13C15.96 13.2762 16.1839 13.5 16.46 13.5V12.5ZM8 12.5C7.72386 12.5 7.5 12.7239 7.5 13C7.5 13.2762 7.72386 13.5 8 13.5V12.5ZM3 13.0001H2.5C2.5 13.2762 2.72386 13.5001 3 13.5001V13.0001ZM4.59 13.5001C4.86615 13.5001 5.09 13.2762 5.09 13.0001C5.09 12.7239 4.86615 12.5001 4.59 12.5001V13.5001ZM16 9.00002L15.584 9.27737C15.6502 9.37673 15.7498 9.4491 15.8648 9.48139L16 9.00002ZM3.5 6L3.5 5.5C3.24313 5.5 3.02804 5.69465 3.00248 5.95025L3.5 6ZM17.28 9.50002V13H18.28V9.50002H17.28ZM17.78 12.5H16.46V13.5H17.78V12.5ZM3 13.5001H4.59V12.5001H3V13.5001ZM13.5 12.5H8V13.5H13.5V12.5ZM13.584 6.27739L15.584 9.27737L16.416 8.72267L14.416 5.72269L13.584 6.27739ZM15.8648 9.48139L17.6448 9.98139L17.9152 9.01865L16.1352 8.51865L15.8648 9.48139ZM3.49752 11.0498L3.99752 6.04975L3.00248 5.95025L2.50249 10.9502L3.49752 11.0498ZM3.5 6.5L14 6.50004L14 5.50004L3.5 5.5L3.5 6.5ZM3.5 13.0001V12H2.5V13.0001H3.5ZM3.5 12V11H2.5V12H3.5Z'
        fill={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
      <path
        d='M7 11.5H15'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13 6.5L13 9H16'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.34 14.15C7.08006 14.15 7.68 13.55 7.68 12.81C7.68 12.0699 7.08006 11.47 6.34 11.47C5.59994 11.47 5 12.0699 5 12.81C5 13.55 5.59994 14.15 6.34 14.15Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.95 14.15C15.69 14.15 16.29 13.55 16.29 12.81C16.29 12.0699 15.69 11.47 14.95 11.47C14.2099 11.47 13.61 12.0699 13.61 12.81C13.61 13.55 14.2099 14.15 14.95 14.15Z'
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

export default VanIcon
