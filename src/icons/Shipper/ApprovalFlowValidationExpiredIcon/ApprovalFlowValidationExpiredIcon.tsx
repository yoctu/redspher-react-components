import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function ApprovalFlowValidationExpiredIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M13.1333 4V1H1V15.3158H13.1333V14.5'
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
        d='M3 5H9.5'
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
        d='M3 9H10.5M3 11H9.5'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.552 12.1015C15.5336 11.7142 15.4068 11.3418 15.188 11.0321C14.9692 10.7225 14.6684 10.49 14.3244 10.3645L13.5355 10.018L12.7719 10.36C12.4297 10.4853 12.1308 10.7175 11.9141 11.0265C11.6973 11.3355 11.5729 11.707 11.5569 12.0925V12.7315H15.552V12.1015Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.7087 8.74111L13.5314 9.12811L14.3751 8.74111C14.7057 8.6078 14.9926 8.37465 15.2009 8.07016C15.4092 7.76567 15.5298 7.40304 15.548 7.02661V6.24811H11.5528V7.02661C11.5685 7.40127 11.6862 7.76293 11.8915 8.0674C12.0968 8.37188 12.3807 8.60598 12.7087 8.74111Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11 6H16.0625'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.0625 12.7506H11'
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

export default ApprovalFlowValidationExpiredIcon;
