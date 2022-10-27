import React from 'react';
import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function ApprovalFlowIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M13.7058 3.49707H15.3529V11.0351M5.47052 14.7251V16.2222L11.3823 16.2222'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.7059 10.8889V2H3V14.7251H10.9412'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='5.14709'
        y1='5.24268'
        x2='11.5589'
        y2='5.24268'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='5.14709'
        y1='7.48828'
        x2='11.5589'
        y2='7.48828'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='5.14709'
        y1='9.73389'
        x2='11.5589'
        y2='9.73389'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1='5.14709'
        y1='11.9795'
        x2='11.5589'
        y2='11.9795'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <ellipse
        cx='14.4706'
        cy='14.4445'
        rx='3.52941'
        ry='3.55556'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
      <path
        d='M12.7689 14.3636L14.0294 15.3333L16.2353 13.5555'
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

export default ApprovalFlowIcon;
