import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function DownloadIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M9.64645 12.8536C9.84171 13.0488 10.1583 13.0488 10.3536 12.8536L13.5355 9.67157C13.7308 9.47631 13.7308 9.15973 13.5355 8.96447C13.3403 8.7692 13.0237 8.7692 12.8284 8.96447L10 11.7929L7.17157 8.96447C6.97631 8.7692 6.65973 8.7692 6.46447 8.96447C6.26921 9.15973 6.26921 9.47631 6.46447 9.67157L9.64645 12.8536ZM10.5 4C10.5 3.72386 10.2761 3.5 10 3.5C9.72386 3.5 9.5 3.72386 9.5 4L10.5 4ZM10.5 12.5L10.5 4L9.5 4L9.5 12.5L10.5 12.5Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M5 13.5V16H15V13.5'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default DownloadIcon;
