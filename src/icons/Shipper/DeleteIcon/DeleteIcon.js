import React from 'react'
import { SvgIcon } from '@material-ui/core'
import themeConstants from '../../../shipper/theme/themeConstants'

function DeleteIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <line
        x1='15.5354'
        y1='4.92879'
        x2='4.92878'
        y2='15.5354'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <line
        x1='15.6986'
        y1='15.5353'
        x2='5.09205'
        y2='4.92867'
        stroke={
          props.secondaryColor
            ? props.secondaryColor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
    </SvgIcon>
  )
}

export default DeleteIcon
