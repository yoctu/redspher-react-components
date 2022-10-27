import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function SideLoadIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M18.1618 12.9352H2V3H18.1618'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M2 12.9352V15.753H3.95432'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M7.69031 15.7531H13.5703'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M5.65415 17.4528C6.59292 17.4528 7.35395 16.6918 7.35395 15.753C7.35395 14.8143 6.59292 14.0532 5.65415 14.0532C4.71537 14.0532 3.95435 14.8143 3.95435 15.753C3.95435 16.6918 4.71537 17.4528 5.65415 17.4528Z'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M17.4436 15.7258H18.1344'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M4.11792 11.2717H4.86329'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M9.23547 11.2717H9.98084'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M15.6166 17.4528C16.5553 17.4528 17.3164 16.6918 17.3164 15.753C17.3164 14.8143 16.5553 14.0532 15.6166 14.0532C14.6778 14.0532 13.9167 14.8143 13.9167 15.753C13.9167 16.6918 14.6778 17.4528 15.6166 17.4528Z'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M6.39038 3V12.708'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <path
        d='M17.1073 3V12.708'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default SideLoadIcon;
