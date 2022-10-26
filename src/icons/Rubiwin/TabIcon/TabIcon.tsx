import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function TabIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M17 17.6667H3C2.46667 17.6667 2 17.2 2 16.6667V4C2 3.46667 2.46667 3 3 3H17C17.5333 3 18 3.46667 18 4V16.6667C18 17.2 17.5333 17.6667 17 17.6667ZM3 3.66667C2.8 3.66667 2.66667 3.8 2.66667 4V16.6667C2.66667 16.8667 2.8 17 3 17H17C17.2 17 17.3333 16.8667 17.3333 16.6667V4C17.3333 3.8 17.2 3.66667 17 3.66667H3Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M9.99996 17.6666C9.79996 17.6666 9.66663 17.5333 9.66663 17.3333V6.66659C9.66663 6.46659 9.79996 6.33325 9.99996 6.33325C10.2 6.33325 10.3333 6.46659 10.3333 6.66659V17.3333C10.3333 17.5333 10.2 17.6666 9.99996 17.6666Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M2.16663 6.49996C2.16663 6.29996 2.29996 6.16663 2.49996 6.16663L17.6667 6.16663C17.8667 6.16663 18 6.29996 18 6.49996C18 6.69996 17.8667 6.83329 17.6667 6.83329L2.49996 6.83329C2.29996 6.83329 2.16662 6.69996 2.16663 6.49996Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M5.99996 17.6666C5.79996 17.6666 5.66663 17.5333 5.66663 17.3333V6.66659C5.66663 6.46659 5.79996 6.33325 5.99996 6.33325C6.19996 6.33325 6.33329 6.46659 6.33329 6.66659V17.3333C6.33329 17.5333 6.19996 17.6666 5.99996 17.6666Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
      <path
        d='M14 17.6666C13.8 17.6666 13.6666 17.5333 13.6666 17.3333V6.66659C13.6666 6.46659 13.8 6.33325 14 6.33325C14.2 6.33325 14.3333 6.46659 14.3333 6.66659V17.3333C14.3333 17.5333 14.2 17.6666 14 17.6666Z'
        fill={primarycolor || themeConstants.grey.main}
        strokeOpacity={0}
      />
    </SvgIcon>
  );
}

export default TabIcon;
