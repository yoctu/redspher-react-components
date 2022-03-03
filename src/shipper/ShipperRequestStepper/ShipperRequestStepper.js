import React from 'react'
import { Stepper, Step, StepLabel, StepConnector, Box } from '@mui/material'

import PinIcon from '../../icons/Shipper/PinIcon'

function StepIcon({ iconPrimaryColor, iconSecondaryColor }) {
  return (
    <div>
      <PinIcon
        primarycolor={iconPrimaryColor}
        secondarycolor={iconSecondaryColor}
      />
    </div>
  )
}

const ShipperStepper = ({
  steppercolor,
  iconPrimaryColor,
  iconSecondaryColor
}) => {
  const steps = Array.apply('poney', Array(2))
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
                borderColor: steppercolor,
                border: '1px dashed'
              }
            }}
          />
        }
      >
        {steps.map((step, index) => (
          <Step key={`${step}${index}`}>
            <StepLabel
              StepIconComponent={StepIcon}
              StepIconProps={{ iconPrimaryColor, iconSecondaryColor }}
            />
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default ShipperStepper
