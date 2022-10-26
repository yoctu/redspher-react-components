import { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  StepContent
} from '@mui/material';
import DeleteIcon from '../../icons/Shipper/DeleteIcon';

function StepIcon(props: any) {
  const { index, nbItems, icons, removeStepMethod } = props;
  const [hover, setHover] = useState(false);

  let icon = icons.middle;
  if (index === 0) {
    icon = icons.first;
  } else if (index === nbItems - 1) {
    icon = icons.last;
  }

  const onClickMethod = () => {
    removeStepMethod(index);
  };
  return (
    <div
      onClick={hover && nbItems > 2 ? onClickMethod : undefined}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover && nbItems > 2 ? <DeleteIcon /> : icon}
    </div>
  );
}

const ShipperAddressStepper = ({
  icons,
  nbItems,
  childrenComponent,
  removeStepMethod,
  ...delegated
}: any) => (
  <Stepper
    connector={
      <StepConnector
        sx={{
          '&.Mui-completed': {
            '& 	.MuiStepConnector-line': {
              borderColor: 'primary.light',
              borderLeftStyle: 'dashed'
            }
          },
          '&.Mui-active': {
            '& 	.MuiStepConnector-line': {
              borderColor: 'primary.light',
              borderLeftStyle: 'dashed'
            }
          },
          '.MuiStepConnector-vertical': {
            marginTop: '3px'
          }
        }}
      />
    }
    orientation='vertical'
    {...delegated}
  >
    {Array.apply(null, Array(nbItems)).map((_item, index) => (
      <Step key={index} active>
        <StepLabel
          StepIconComponent={StepIcon}
          StepIconProps={{
            // @ts-ignore
            index,
            nbItems,
            icons,
            removeStepMethod
          }}
        />
        <StepContent
          sx={{
            borderColor: 'primary.light',
            borderLeftStyle: 'dashed',
            '.MuiCollapse-wrapperInner': {
              marginTop: '-55px'
            },
            '&.MuiStepContent-last': {
              border: 'none'
            }
          }}
        >
          {childrenComponent[index]}
        </StepContent>
      </Step>
    ))}
  </Stepper>
);

export default ShipperAddressStepper;
