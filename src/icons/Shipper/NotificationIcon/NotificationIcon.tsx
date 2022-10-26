import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function NotificationIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M5.18405 14.5H14.8076C15.3198 14.5 16.0657 14.2044 15.8143 13.4469C15.6939 13.2471 15.5224 13.0875 15.3198 12.9867L14.9419 9.53778C14.9411 8.33666 14.5501 7.17238 13.8346 6.24017C13.119 5.30797 12.1224 4.66452 11.0119 4.41778V3.07555C11.0119 2.79029 10.9048 2.51673 10.7143 2.31502C10.5237 2.11332 10.2653 2 9.99581 2C9.86238 2 9.73025 2.02782 9.60697 2.08187C9.4837 2.13592 9.37169 2.21515 9.27733 2.31502C9.18298 2.4149 9.10813 2.53346 9.05707 2.66395C9.006 2.79445 8.97973 2.9343 8.97973 3.07555V4.41778C7.86993 4.66605 6.87421 5.30991 6.15893 6.24178C5.44364 7.17364 5.05209 8.3371 5.04969 9.53778L4.67182 12.9867C4.4714 13.0896 4.30223 13.2499 4.18349 13.4495C3.73362 14.3602 4.66308 14.5293 5.18405 14.5Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.00002 15C7.99877 15.263 8.04951 15.5236 8.14933 15.7668C8.24916 16.0101 8.3961 16.231 8.58163 16.417C8.76716 16.603 8.98761 16.7502 9.23025 16.8503C9.47289 16.9504 9.73291 17.0012 9.99528 17C10.2581 17.0012 10.5186 16.9504 10.7618 16.8505C11.0049 16.7505 11.226 16.6034 11.4123 16.4176C11.5986 16.2317 11.7464 16.0108 11.8472 15.7676C11.9481 15.5243 12 15.2634 12 15'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 9C7.16667 8.33333 7.7 6.9 8.5 6.5'
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

export default NotificationIcon;
