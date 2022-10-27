import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function PlaneIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M14.5665 18.0022L15.9029 16.6658L13.9568 7.91723L15.9371 5.93692C15.9371 5.93692 18.7431 3.1296 17.8099 2.19163C16.8768 1.25367 14.0664 4.06376 14.0664 4.06376L12.0861 6.04337L3.33645 4.09832L2 5.43511L9.00986 9.11958L7.41387 10.7156L4.57336 10.8828L3.23588 12.2196L6.57785 13.4237L7.78159 16.7664L9.11873 15.4282L9.28634 12.5867L10.8813 10.9914L14.5665 18.0022Z'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default PlaneIcon;
