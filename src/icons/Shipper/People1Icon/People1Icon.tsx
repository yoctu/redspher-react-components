import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function People1Icon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M15.84 15.46C14.38 13.9 12.31 12.92 10 12.92C7.69 12.92 5.62 13.9 4.16 15.46'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 10.65C11.6569 10.65 13 9.30688 13 7.65002C13 5.99317 11.6569 4.65002 10 4.65002C8.34315 4.65002 7 5.99317 7 7.65002C7 9.30688 8.34315 10.65 10 10.65Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.84 15.46C14.38 17.02 12.31 18 10 18C7.69 18 5.62 17.02 4.16 15.46'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.84 15.46C17.18 14.03 18 12.12 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 12.11 2.82 14.03 4.16 15.46'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
}

export default People1Icon;
