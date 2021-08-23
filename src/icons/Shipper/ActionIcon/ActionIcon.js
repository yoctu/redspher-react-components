import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function ActionIcon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 20 20'>
      <ellipse
        cx='10.5'
        cy='4.5'
        rx='1.5'
        ry='1.5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
      <ellipse
        cx='10.5'
        cy='9.83337'
        rx='1.5'
        ry='1.5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
      <ellipse
        cx='10.5'
        cy='15.1666'
        rx='1.5'
        ry='1.5'
        stroke={
          props.primaryColor ? props.primaryColor : themeConstants.primary.main
        }
      />
    </SvgIcon>
  )
}

export default ActionIcon
