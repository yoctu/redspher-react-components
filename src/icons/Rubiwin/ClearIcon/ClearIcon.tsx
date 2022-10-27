import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function ClearIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <line
        x1='14.8995'
        y1='5.70711'
        x2='5.70715'
        y2='14.8995'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <line
        x1='5.70711'
        y1='5.70709'
        x2='14.8995'
        y2='14.8995'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default ClearIcon;
