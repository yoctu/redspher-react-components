import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function StepIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 40 40'>
      <svg
        width='40'
        height='40'
        viewBox='0 0 20 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse cx='10.25' cy='15.4282' rx='9' ry='9' stroke='#F20738' />
        <path
          d='M10.5833 16.9281V8.76147'
          stroke={
            props.primarycolor
              ? props.primarycolor
              : themeConstants.primary.main
          }
          strokeLinecap='round'
        />
        <path
          d='M10.5833 16.928L12.9167 15.178L15.25 13.428'
          stroke={
            props.primarycolor
              ? props.primarycolor
              : themeConstants.primary.main
          }
          strokeLinecap='round'
        />
        <path
          d='M13.2501 6.42798L13.2501 4.42798H7.91675L7.91677 6.42798'
          stroke={
            props.primarycolor
              ? props.primarycolor
              : themeConstants.primary.main
          }
          strokeLinejoin='round'
        />
        <path
          d='M11.9167 4.42798V2.42798H9.25002V4.42798'
          stroke={
            props.primarycolor
              ? props.primarycolor
              : themeConstants.primary.main
          }
          strokeLinejoin='round'
        />
        <path
          d='M7.91675 2.42798H13.2501'
          stroke={
            props.primarycolor
              ? props.primarycolor
              : themeConstants.primary.main
          }
          strokeLinecap='round'
        />
        <path
          d='M10.5833 1.09473L10.5833 2.42806'
          stroke={
            props.primarycolor
              ? props.primarycolor
              : themeConstants.primary.main
          }
          strokeLinecap='round'
        />
      </svg>
    </SvgIcon>
  );
}

export default StepIcon;
