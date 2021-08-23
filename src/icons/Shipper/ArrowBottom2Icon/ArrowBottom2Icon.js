import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function ArrowBottom2Icon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <path
        d='M9.14645 15.8536C9.34171 16.0488 9.65829 16.0488 9.85355 15.8536L13.0355 12.6716C13.2308 12.4763 13.2308 12.1597 13.0355 11.9645C12.8403 11.7692 12.5237 11.7692 12.3284 11.9645L9.5 14.7929L6.67157 11.9645C6.47631 11.7692 6.15973 11.7692 5.96447 11.9645C5.7692 12.1597 5.7692 12.4763 5.96447 12.6716L9.14645 15.8536ZM10 4.5C10 4.22386 9.77614 4 9.5 4C9.22386 4 9 4.22386 9 4.5H10ZM10 15.5V4.5H9V15.5H10Z'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
    </SvgIcon>
  )
}

export default ArrowBottom2Icon
