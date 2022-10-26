import { SvgIcon } from '@mui/material';
import themeConstants from '../../../shipper/theme/themeConstants';

function PriceIcon(props: any) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M11.278 18.2821C11.469 18.3613 11.674 18.4014 11.8807 18.4C12.0873 18.4005 12.292 18.36 12.4828 18.2809C12.6737 18.2017 12.8469 18.0855 12.9926 17.939L17.939 12.9926C18.2337 12.6976 18.3993 12.2977 18.3993 11.8807C18.3993 11.4637 18.2337 11.0638 17.939 10.7688L10.0312 2.86108C9.88613 2.71378 9.71298 2.59709 9.522 2.5179C9.33102 2.43871 9.12609 2.39864 8.91935 2.40006H3.97293C3.55578 2.40006 3.15572 2.56577 2.86074 2.86074C2.56577 3.15572 2.40006 3.55578 2.40006 3.97293V8.91935C2.39864 9.12609 2.43871 9.33102 2.5179 9.522C2.59709 9.71298 2.71378 9.88613 2.86108 10.0312L10.7688 17.939C10.9139 18.0863 11.0871 18.203 11.278 18.2821Z'
        stroke={
          props.primarycolor ? props.primarycolor : themeConstants.primary.main
        }
      />
      <path
        d='M6.10445 6.918C6.55376 6.918 6.918 6.55376 6.918 6.10445C6.918 5.65513 6.55376 5.29089 6.10445 5.29089C5.65513 5.29089 5.29089 5.65513 5.29089 6.10445C5.29089 6.55376 5.65513 6.918 6.10445 6.918Z'
        stroke={
          props.secondarycolor
            ? props.secondarycolor
            : themeConstants.secondary.main
        }
      />
    </SvgIcon>
  );
}

export default PriceIcon;
