import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/e4pThemeConstants'

function E4PlaneIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 26 26'>
      <path
        d='M19 10L14.5 14.5L11.5 11.5L16 7'
        stroke={themeConstants.secondary.main}
        strokeLinecap='round'
      />
      <path
        d='M19.8497 25.0034L21.8544 22.9987L18.9352 9.87584L21.9057 6.90539C21.9057 6.90539 26.1146 2.6944 24.7149 1.28745C23.3152 -0.119499 19.0996 4.09564 19.0996 4.09564L16.1291 7.06505L3.00467 4.14748L1 6.15267L11.5148 11.6794L9.1208 14.0734L4.86004 14.3243L2.85381 16.3294L7.86678 18.1356L9.67238 23.1496L11.6781 21.1423L11.9295 16.88L14.3219 14.487L19.8497 25.0034Z'
        stroke={themeConstants.primary.main}
        strokeLinejoin='round'
      />
    </SvgIcon>
  )
}

export default E4PlaneIcon
