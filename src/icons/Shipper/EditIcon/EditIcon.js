import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../shipper/theme/themeConstants'

function EditIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M16 5.5V4H4V16H16V15.1176V10'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.89025 10.7005L17.0377 5L19.1079 7.42896L11.9605 13.1295L9.03512 13.4226L9.89025 10.7005Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default EditIcon
