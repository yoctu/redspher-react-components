import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function ManyPeopleIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M2 16C2 13.2386 4.68629 11 8 11C8.97126 11 9.88861 11.1923 10.7002 11.5337'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <circle
        cx='8'
        cy='6'
        r='3'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M18.3077 17C18.3077 15.0882 16.448 13.5385 14.1538 13.5385C11.8597 13.5385 10 15.0882 10 17'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <circle
        cx='14.1538'
        cy='10.0769'
        r='2.07692'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  )
}

export default ManyPeopleIcon
