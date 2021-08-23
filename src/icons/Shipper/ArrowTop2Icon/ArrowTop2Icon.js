import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function ArrowTop2Icon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M9.85355 4.14645C9.65829 3.95118 9.34171 3.95118 9.14645 4.14645L5.96447 7.32843C5.7692 7.52369 5.7692 7.84027 5.96447 8.03553C6.15973 8.2308 6.47631 8.2308 6.67157 8.03553L9.5 5.20711L12.3284 8.03553C12.5237 8.2308 12.8403 8.2308 13.0355 8.03553C13.2308 7.84027 13.2308 7.52369 13.0355 7.32843L9.85355 4.14645ZM9 15.5C9 15.7761 9.22386 16 9.5 16C9.77614 16 10 15.7761 10 15.5H9ZM9 4.5L9 15.5H10L10 4.5H9Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
    </SvgIcon>
  )
}

export default ArrowTop2Icon
