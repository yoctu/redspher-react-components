import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function DatePickerIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M17 18H3C2.46667 18 2 17.5334 2 17V4.33337C2 3.80004 2.46667 3.33337 3 3.33337H17C17.5333 3.33337 18 3.80004 18 4.33337V17C18 17.5334 17.5333 18 17 18ZM3 4.00004C2.8 4.00004 2.66667 4.13337 2.66667 4.33337V17C2.66667 17.2 2.8 17.3334 3 17.3334H17C17.2 17.3334 17.3333 17.2 17.3333 17V4.33337C17.3333 4.13337 17.2 4.00004 17 4.00004H3Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M5.66671 6C5.46671 6 5.33337 5.86667 5.33337 5.66667V2.33333C5.33337 2.13333 5.46671 2 5.66671 2C5.86671 2 6.00004 2.13333 6.00004 2.33333V5.66667C6.00004 5.86667 5.86671 6 5.66671 6Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M14.3333 6C14.1333 6 14 5.86667 14 5.66667V2.33333C14 2.13333 14.1333 2 14.3333 2C14.5333 2 14.6667 2.13333 14.6667 2.33333V5.66667C14.6667 5.86667 14.5333 6 14.3333 6Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M17.6667 7.33329H2.33333C2.13333 7.33329 2 7.19996 2 6.99996C2 6.79996 2.13333 6.66663 2.33333 6.66663H17.6667C17.8667 6.66663 18 6.79996 18 6.99996C18 7.19996 17.8667 7.33329 17.6667 7.33329Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M9.99996 18C9.79996 18 9.66663 17.8666 9.66663 17.6666V6.99996C9.66663 6.79996 9.79996 6.66663 9.99996 6.66663C10.2 6.66663 10.3333 6.79996 10.3333 6.99996V17.6666C10.3333 17.8666 10.2 18 9.99996 18Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M5.99996 18C5.79996 18 5.66663 17.8666 5.66663 17.6666V6.99996C5.66663 6.79996 5.79996 6.66663 5.99996 6.66663C6.19996 6.66663 6.33329 6.79996 6.33329 6.99996V17.6666C6.33329 17.8666 6.19996 18 5.99996 18Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M14 18C13.8 18 13.6666 17.8666 13.6666 17.6666V6.99996C13.6666 6.79996 13.8 6.66663 14 6.66663C14.2 6.66663 14.3333 6.79996 14.3333 6.99996V17.6666C14.3333 17.8666 14.2 18 14 18Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M17.6667 12.6667H2.33333C2.13333 12.6667 2 12.5333 2 12.3333C2 12.1333 2.13333 12 2.33333 12H17.6667C17.8667 12 18 12.1333 18 12.3333C18 12.5333 17.8667 12.6667 17.6667 12.6667Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M17.6667 10H2.33333C2.13333 10 2 9.86671 2 9.66671C2 9.46671 2.13333 9.33337 2.33333 9.33337H17.6667C17.8667 9.33337 18 9.46671 18 9.66671C18 9.86671 17.8667 10 17.6667 10Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M17.6667 15.3333H2.33333C2.13333 15.3333 2 15.2 2 15C2 14.8 2.13333 14.6666 2.33333 14.6666H17.6667C17.8667 14.6666 18 14.8 18 15C18 15.2 17.8667 15.3333 17.6667 15.3333Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  )
}

export default DatePickerIcon
