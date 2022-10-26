import { Stepper, Step, StepLabel, Box, StepConnector } from '@mui/material';

import PinIcon from '../../icons/Shipper/PinIcon';

function StepIcon({ iconPrimaryColor, iconSecondaryColor }: any) {
  return (
    <div>
      <PinIcon
        primarycolor={iconPrimaryColor}
        secondarycolor={iconSecondaryColor}
      />
    </div>
  );
}

const ShipperStepper = ({
  steppercolor,
  iconPrimaryColor,
  iconSecondaryColor
}: any) => {
  const steps = Array.apply('poney', Array(2));
  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      <Stepper
        sx={{
          padding: 0,
          backgroundColor: 'transparent'
        }}
        connector={
          <StepConnector
            sx={{
              '.MuiStepConnector-line': {
                border: `1px dashed  ${steppercolor}`
              }
            }}
          />
        }
      >
        {steps.map((step, index) => (
          <Step key={`${step}${index}`}>
            <StepLabel
              StepIconComponent={StepIcon}
              // @ts-ignore
              StepIconProps={{ iconPrimaryColor, iconSecondaryColor }}
            />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default ShipperStepper;
