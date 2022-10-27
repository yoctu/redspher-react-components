import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function AddressBookIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M4.86664 2H17V18H4.86664V2Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='3.5'
        y1='5.26471'
        x2='6.23333'
        y2='5.26471'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='3.5'
        y1='10.9117'
        x2='6.23333'
        y2='10.9117'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='3.5'
        y1='8.08826'
        x2='6.23333'
        y2='8.08826'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='3.5'
        y1='13.7353'
        x2='6.23333'
        y2='13.7353'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.2 9.03837C14.2 10.8464 11.4 13.7647 11.4 13.7647C11.4 13.7647 8.59998 10.8464 8.59998 9.03837C8.59998 7.23038 9.85358 5.76471 11.4 5.76471C12.9464 5.76471 14.2 7.23038 14.2 9.03837Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <ellipse
        cx='11.4'
        cy='8.58827'
        rx='0.933333'
        ry='0.941176'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
      />
    </SvgIcon>
  );
}

export default AddressBookIcon;
