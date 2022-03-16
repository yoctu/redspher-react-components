import React from 'react'
import { SvgIcon } from '@mui/material'

function ActionIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path d='M9 5H11' stroke='#171F46' />
      <path d='M9 10H11' stroke='#171F46' />
      <path d='M9 15H11' stroke='#171F46' />
    </SvgIcon>
  )
}

export default ActionIcon
