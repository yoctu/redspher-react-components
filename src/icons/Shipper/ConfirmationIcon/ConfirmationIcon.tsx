import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function ConfirmationIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <ellipse
        cx='9.99999'
        cy='10'
        rx='8'
        ry='8'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
      <path
        d='M6 10.8182L8.85714 13L14 7'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
}

export default ConfirmationIcon;
