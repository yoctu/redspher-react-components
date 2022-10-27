import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function DashboardIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <rect
        x='2'
        y='4'
        width='16'
        height='12'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <rect
        x='9'
        y='8'
        width='7'
        height='6'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <rect
        x='4'
        y='8'
        width='3'
        height='6'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <line
        x1='2'
        y1='6.5'
        x2='18'
        y2='6.5'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default DashboardIcon;
