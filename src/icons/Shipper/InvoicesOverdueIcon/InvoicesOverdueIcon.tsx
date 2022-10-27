import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function InvoicesOverdueIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M5.55203 8.10151C5.53363 7.71425 5.40683 7.34177 5.188 7.03214C4.96917 6.72251 4.66835 6.48996 4.32438 6.3645L3.53547 6.01801L2.77187 6.36001C2.42967 6.48525 2.13076 6.7175 1.91405 7.02651C1.69734 7.33552 1.57289 7.70699 1.55688 8.09251V8.73151H5.55203V8.10151Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.70873 4.74111L3.53139 5.12811L4.37514 4.74111C4.70567 4.6078 4.99262 4.37465 5.2009 4.07016C5.40919 3.76567 5.5298 3.40304 5.54795 3.02661V2.24811H1.5528V3.02661C1.56852 3.40127 1.68621 3.76293 1.89149 4.0674C2.09677 4.37188 2.38075 4.60598 2.70873 4.74111Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 2H6.0625'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.0625 8.75061H1'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 1H16.1333V15.3158H4V11'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 3.5H13.7667'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 5.5H13.7667'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.6668 13.3333C12.194 13.3333 11.0001 12.1394 11.0001 10.6667C11.0001 9.19391 12.194 8 13.6668 8'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.49994 10.0007L12.9336 10.0007'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.49994 11.5007L12.9336 11.5007'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
}

export default InvoicesOverdueIcon;
