import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function CamembertIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <path
        d='M10 10H9.5C9.5 10.1733 9.58973 10.3342 9.73713 10.4253C9.88454 10.5164 10.0686 10.5247 10.2236 10.4472L10 10ZM16.2236 7.44721C16.4706 7.32372 16.5707 7.02338 16.4472 6.77639C16.3237 6.5294 16.0234 6.42929 15.7764 6.55279L16.2236 7.44721ZM9.5 3V10H10.5V3H9.5ZM10.2236 10.4472L16.2236 7.44721L15.7764 6.55279L9.77639 9.55279L10.2236 10.4472Z'
        fill={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <path
        d='M10 9.5C9.72386 9.5 9.5 9.72386 9.5 10C9.5 10.2761 9.72386 10.5 10 10.5V9.5ZM17 9.5H10V10.5H17V9.5Z'
        fill={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
    </SvgIcon>
  )
}

export default CamembertIcon
