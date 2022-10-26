import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function ShipmentsPossibleDelayIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <ellipse
        cx='6.39986'
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
        cx='13.5999'
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
        d='M3.7999 10.7632H1.5V9.49951'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.49988 10.7632L11.3998 10.7632'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.1998 2.86841H13.818L16.2998 6.34209'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.9999 10.9737H17.4999V7.78947L16.2999 6.34211H11.1999V2H7.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 4C7 4.59334 6.82406 5.17336 6.49441 5.66671C6.16477 6.16005 5.69623 6.54457 5.14805 6.77163C4.59987 6.9987 3.99668 7.05811 3.41474 6.94236C2.83279 6.8266 2.29824 6.54087 1.87868 6.12131C1.45912 5.70175 1.1734 5.16721 1.05764 4.58526C0.941888 4.00332 1.0013 3.40012 1.22837 2.85194C1.45543 2.30376 1.83995 1.83523 2.33329 1.50559C2.82664 1.17594 3.40666 1 4 1'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 4.34696L7.2443 3.78118L7.95514 4.86518'
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

export default ShipmentsPossibleDelayIcon;
