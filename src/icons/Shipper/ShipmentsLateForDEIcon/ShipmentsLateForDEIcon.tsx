import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function ShipmentsLateForDEIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <ellipse
        cx='5.89986'
        cy='10.9737'
        rx='2.1'
        ry='2.02632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <ellipse
        cx='13.0999'
        cy='10.9737'
        rx='2.1'
        ry='2.02632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.2999 10.7632H1V9.49951'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.99988 10.7632L10.8998 10.7632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.6998 2.86841H13.318L15.7998 6.34209'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.4999 10.9737H16.9999V7.78947L15.7999 6.34211H10.6999V2H7'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.26996 6.72649C5.25269 6.36317 5.13374 6.01372 4.92843 5.72323C4.72313 5.43275 4.44091 5.21456 4.1182 5.09686L3.37806 4.77179L2.66167 5.09265C2.34062 5.21015 2.06019 5.42804 1.85688 5.71795C1.65356 6.00786 1.5368 6.35636 1.52179 6.71805V7.31754H5.26996V6.72649Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.60352 3.57082L3.37532 3.93389L4.16691 3.57082C4.47701 3.44576 4.74622 3.22702 4.94163 2.94135C5.13704 2.65569 5.25019 2.31547 5.26722 1.96231V1.23193H1.51904V1.96231C1.5338 2.31381 1.64421 2.65311 1.8368 2.93876C2.02939 3.22441 2.29581 3.44405 2.60352 3.57082Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 1H5.74954'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.74954 7.33398H1'
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

export default ShipmentsLateForDEIcon;
