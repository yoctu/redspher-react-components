import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function Camion1Icon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M11.84 4V10.9H2V4H11.84Z'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M13.5 14.27H11.84V6.44H15.49L17.78 10.22V14.27H16.46'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M6.7 14.27H11.84V10.9H2V14.27H3.59'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M13.65 6.44V10.61H17.78'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M5.11002 15.65C5.85008 15.65 6.45002 15.05 6.45002 14.31C6.45002 13.5699 5.85008 12.97 5.11002 12.97C4.36996 12.97 3.77002 13.5699 3.77002 14.31C3.77002 15.05 4.36996 15.65 5.11002 15.65Z'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M14.95 15.65C15.69 15.65 16.29 15.05 16.29 14.31C16.29 13.5699 15.69 12.97 14.95 12.97C14.2099 12.97 13.61 13.5699 13.61 14.31C13.61 15.05 14.2099 15.65 14.95 15.65Z'
        stroke={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default Camion1Icon
