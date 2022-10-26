import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function QuotesSentValidationIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M5.66089 2.36072L13.3826 6.05182'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 8.5V4.86315C17 4.6129 16.8609 4.3001 16.5826 4.23754L9.27826 1.04692C9.06957 0.98436 8.93044 0.98436 8.72174 1.04692L1.41739 4.23754C1.13913 4.36266 1 4.6129 1 4.86315V13.0586C1 13.3715 1.13913 13.6217 1.41739 13.6843L9.06957 16.8749C9.27826 16.9374 9.41739 16.9374 9.62609 16.8749L11.5 16'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.3478 7.92865L1.1391 4.48779'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.3479 7.92865L16.8609 4.48779'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.26077 9.68034C7.26077 9.55522 7.1912 9.4301 7.05207 9.36754L3.57381 7.80351C3.43468 7.74095 3.36511 7.74095 3.22598 7.80351C3.15642 7.86607 3.08685 7.9912 3.08685 8.11632V10.869C3.08685 10.9941 3.15642 11.1192 3.29555 11.1818L6.77381 12.7458C6.91294 12.8084 6.98251 12.8084 7.12164 12.7458C7.1912 12.6833 7.26077 12.5582 7.26077 12.433V9.68034Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.3479 17V7.92865'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.9998 12.5002C17.9998 14.1571 16.6567 15.5002 14.9998 15.5002C13.343 15.5002 11.9998 14.1571 11.9998 12.5002C11.9998 10.8434 13.343 9.50024 14.9998 9.50024C16.6567 9.50024 17.9998 10.8434 17.9998 12.5002Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
      />
      <path
        d='M15 14H15.01'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
      />
      <path
        d='M14.9537 12.6258C14.9537 12.6258 15.4445 12.0565 15.4997 12.0007C15.5548 11.9442 15.5974 11.882 15.626 11.8161C15.6574 11.742 15.6726 11.6647 15.6709 11.5872C15.6709 11.4144 15.6071 11.2786 15.4795 11.1799C15.3519 11.0811 15.1739 11.0317 14.9454 11.0317C14.7151 11.0317 14.5294 11.0791 14.3883 11.1737C14.2472 11.2684 14.1748 11.3967 14.171 11.5588'
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

export default QuotesSentValidationIcon;
