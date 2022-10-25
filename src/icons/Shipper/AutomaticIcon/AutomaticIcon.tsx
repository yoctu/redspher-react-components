import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function AutomaticIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M4.5 3L5.3082 4.3876L6.87764 4.72746L5.8077 5.9249L5.96946 7.52254L4.5 6.875L3.03054 7.52254L3.1923 5.9249L2.12236 4.72746L3.6918 4.3876L4.5 3Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.5 12L15.3082 13.3876L16.8776 13.7275L15.8077 14.9249L15.9695 16.5225L14.5 15.875L13.0305 16.5225L13.1923 14.9249L12.1224 13.7275L13.6918 13.3876L14.5 12Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.339 2.03785L17.6761 3.50044L18.3082 4.97661L16.7123 4.7981L15.5037 5.85541L15.1803 4.2825L13.8013 3.45978L15.1973 2.66618L15.5536 1.10039L16.7397 2.18284L18.339 2.03785Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 7L11.0135 5L13 6.91964L11.0135 9'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.93327 7L1.25023 14.6759C1.08341 14.8426 1 15.0648 1 15.2963C1 15.5185 1.10195 15.7407 1.2595 15.8981L2.11214 16.75C2.27896 16.9167 2.50139 17 2.71455 17C2.93698 17 3.15014 16.9167 3.31696 16.75L11 9.07407L8.93327 7Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default AutomaticIcon
