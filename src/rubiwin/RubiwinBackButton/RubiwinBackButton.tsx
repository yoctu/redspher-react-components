import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { BoxTypeMap } from '@mui/material/Box/Box';

interface IrubiwinBackButton extends OverridableComponent<BoxTypeMap> {
  text?: Element | string;
}

const RubiwinBackButton = ({ text, ...props }: IrubiwinBackButton) => (
  <Box
    sx={{
      fontFamily: (theme) => theme.typography.fontFamily,
      cursor: 'pointer',
      color: (theme) => theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      padding: '5px'
    }}
    {...props}
  >
    <ArrowBackIosIcon />
    {text}
  </Box>
);

export default RubiwinBackButton;
