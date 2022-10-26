import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function NotIncludedIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M4 15L16.5 5.5'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <ellipse
        cx='10'
        cy='10'
        rx='8'
        ry='8'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
    </SvgIcon>
  );
}

export default NotIncludedIcon;
