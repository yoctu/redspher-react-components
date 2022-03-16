import React from 'react'
import { SvgIcon } from '@mui/material'

function ContactIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <g clipPath='url(#clip0_1084_898)'>
        <rect x='3' y='6' width='14' height='8' stroke='#171F46' />
        <path d='M3 6L10 11L17 6' stroke='#171F46' />
      </g>
      <defs>
        <clipPath id='clip0_1084_898'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </SvgIcon>
  )
}

export default ContactIcon
