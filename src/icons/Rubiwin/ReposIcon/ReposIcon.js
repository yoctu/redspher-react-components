import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function ReposIcon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M5.39852 7.77655H13.263C13.3687 7.77655 13.47 7.81854 13.5448 7.89327C13.6195 7.96801 13.6615 8.06938 13.6615 8.17507V13.6179C13.6615 14.5149 13.3052 15.3751 12.6709 16.0094C12.0366 16.6437 11.1764 17 10.2794 17H8.38207C7.48509 17 6.62485 16.6437 5.99059 16.0094C5.35632 15.3751 5 14.5149 5 13.6179V8.17563C4.99993 8.12325 5.01018 8.07137 5.03017 8.02295C5.05017 7.97454 5.07951 7.93054 5.11652 7.89347C5.15354 7.85641 5.1975 7.827 5.24588 7.80694C5.29427 7.78688 5.34614 7.77655 5.39852 7.77655Z'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M13.662 8.90289H15.791C15.9704 8.90289 16.1424 8.97416 16.2693 9.10101C16.3961 9.22786 16.4674 9.39991 16.4674 9.57931V13.4563C16.4674 13.6357 16.3961 13.8077 16.2693 13.9346C16.1424 14.0614 15.9704 14.1327 15.791 14.1327H13.662'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M8 2C8 2 7 2.66682 7 3.33318C7 4 8 4 8 4.66682C8 5 7.5 5.5 7 6'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M10 2C10 2 9 2.66682 9 3.33318C9 4 10 4 10 4.66682C10 5 9.5 5.5 9 6'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M12 2C12 2 11 2.66682 11 3.33318C11 4 12 4 12 4.66682C12 5 11.5 5.5 11 6'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  )
}

export default ReposIcon
