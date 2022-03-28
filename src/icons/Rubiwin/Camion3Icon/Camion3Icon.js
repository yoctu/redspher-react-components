import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function Camion3Icon({ primarycolor, ...props }) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M12.4156 4V11.158H1V4H12.4156Z'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M18.0001 14.6422H19.0001V10.447L16.9514 6.52429H13.7V14.0634'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M12.4156 13.0571V11.158H1V14.6421H2.41676'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M5.5 14.6422H10.5'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M13.5 14.6422H15.2695'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M15.3103 6.52429V10.8617H19'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M3.91983 16C4.6599 16 5.25983 15.3963 5.25983 14.6515C5.25983 13.9068 4.6599 13.303 3.91983 13.303C3.17977 13.303 2.57983 13.9068 2.57983 14.6515C2.57983 15.3963 3.17977 16 3.91983 16Z'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M16.6198 16C17.3598 16 17.9598 15.3963 17.9598 14.6515C17.9598 13.9068 17.3598 13.303 16.6198 13.303C15.8797 13.303 15.2798 13.9068 15.2798 14.6515C15.2798 15.3963 15.8797 16 16.6198 16Z'
        stroke={primarycolor || themeConstants.grey.main}
      />
      <path
        d='M12.1645 16C12.9045 16 13.5045 15.3963 13.5045 14.6515C13.5045 13.9068 12.9045 13.303 12.1645 13.303C11.4244 13.303 10.8245 13.9068 10.8245 14.6515C10.8245 15.3963 11.4244 16 12.1645 16Z'
        stroke={primarycolor || themeConstants.grey.main}
      />
    </SvgIcon>
  )
}

export default Camion3Icon
