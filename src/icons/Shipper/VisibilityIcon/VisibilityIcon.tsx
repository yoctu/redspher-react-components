import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function VisibilityIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M10 16.0001C5.90909 16.0001 2.41547 13.5121 1 10.0001C2.41547 6.48807 5.90909 4.00006 10 4.00006C14.095 4.00006 17.5846 6.48807 19 10.0001C17.5846 13.5121 14.095 16.0001 10 16.0001Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinejoin='round'
      />
      <path
        d='M6 10.0001C6 7.79209 7.79201 6.00007 10 6.00007C12.208 6.00007 14 7.79205 14 10C14 12.208 12.208 14.0001 10 14.0001C7.79201 14.0001 6 12.2081 6 10.0001Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
      />
    </SvgIcon>
  );
}

export default VisibilityIcon;
