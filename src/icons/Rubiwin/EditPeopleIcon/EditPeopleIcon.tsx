import { SvgIcon } from '@mui/material';
import themeConstants from '../../../rubiwin/theme/themeConstants';

function EditPeopleIcon({ primarycolor, ...props }: any) {
  return (
    <SvgIcon {...props} htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M16 17C16 14.2386 13.3137 12 10 12C6.68629 12 4 14.2386 4 17'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <circle
        cx='10'
        cy='7'
        r='3'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <line
        x1='2.69636'
        y1='3.87721'
        x2='18.2603'
        y2='14.7752'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <line
        x1='2.5'
        y1='9.5'
        x2='6.5'
        y2='9.5'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
      <line
        x1='4.5'
        y1='7.5'
        x2='4.5'
        y2='11.5'
        stroke={primarycolor || themeConstants.grey.main}
        fillOpacity={0}
      />
    </SvgIcon>
  );
}

export default EditPeopleIcon;
