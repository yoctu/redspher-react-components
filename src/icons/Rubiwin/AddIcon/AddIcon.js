import React from 'react'
import { SvgIcon } from '@mui/material'

function AddIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <line x1='3.5' y1='9.5' x2='16.5' y2='9.5' stroke='#171F46' />
      <line x1='10.5' y1='3.5' x2='10.5' y2='16.5' stroke='#171F46' />
    </SvgIcon>
  )
}

export default AddIcon
