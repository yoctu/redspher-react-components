import React from 'react'
import { SvgIcon } from '@mui/material'

function BurgerMenuIcon(props) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path d='M2.49988 5L16.4999 5' stroke='#171F46' />
      <line x1='2.5' y1='10' x2='16.5' y2='10' stroke='#171F46' />
      <line x1='2.5' y1='15' x2='16.5' y2='15' stroke='#171F46' />
    </SvgIcon>
  )
}

export default BurgerMenuIcon
