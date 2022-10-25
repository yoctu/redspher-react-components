import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function Camion2Icon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M2 10.9V5H11.84V10.9'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M13.5 14.27H11.84V6.44H15.49L17.78 10.22V14.27H16.46'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M2 10.9V14.27H3.59'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M6.69995 14.27H11.84V10.9'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M13.65 6.44V10.61H17.78'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M5.11002 15.65C5.85002 15.65 6.45002 15.05 6.45002 14.31C6.45002 13.57 5.85002 12.97 5.11002 12.97C4.37002 12.97 3.77002 13.57 3.77002 14.31C3.77002 15.05 4.37002 15.65 5.11002 15.65Z'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M14.95 15.65C15.69 15.65 16.29 15.05 16.29 14.31C16.29 13.57 15.69 12.97 14.95 12.97C14.21 12.97 13.61 13.57 13.61 14.31C13.61 15.05 14.21 15.65 14.95 15.65Z'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  )
}

export default Camion2Icon
