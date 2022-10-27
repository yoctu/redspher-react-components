import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function InformationIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <circle
        cx='10'
        cy='10'
        r='7'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M9.20376 8.67034H10.8767V14.44H9.20376V8.67034ZM10.0403 7.86602C9.73283 7.86602 9.48259 7.77665 9.28956 7.59792C9.09652 7.41918 9 7.19754 9 6.93301C9 6.66848 9.09652 6.44684 9.28956 6.26811C9.48259 6.08937 9.73283 6 10.0403 6C10.3477 6 10.5979 6.08579 10.791 6.25738C10.984 6.42897 11.0805 6.64346 11.0805 6.90084C11.0805 7.17967 10.984 7.41203 10.791 7.59792C10.5979 7.77665 10.3477 7.86602 10.0403 7.86602Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  );
}

export default InformationIcon;
