import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function ApprovalFlowValidationRequestedIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M13.1333 5.5V1H1V15.3158H13.1333V14.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 3H10.7667'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 5L10.5 5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 7H9.2667'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 13H9.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 9H8M3 11H8.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='13'
        cy='10'
        r='3'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
      />
      <path
        d='M12.99 11.5H13'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <path
        d='M13 10C13 10 13.4908 9.43065 13.546 9.37482C13.6011 9.31837 13.6437 9.25612 13.6723 9.19027C13.7037 9.11611 13.7188 9.03888 13.7172 8.96135C13.7172 8.78856 13.6534 8.65278 13.5258 8.55402C13.3982 8.45526 13.2201 8.40588 12.9917 8.40588C12.7614 8.40588 12.5756 8.45322 12.4346 8.54788C12.2935 8.64254 12.2211 8.77089 12.2173 8.93291'
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

export default ApprovalFlowValidationRequestedIcon;
