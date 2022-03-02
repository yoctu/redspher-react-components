import React from 'react'
import { Stepper, Step, StepLabel, Box, StepConnector } from '@mui/material'

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
  stepperColor,
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
            stepperColor={stepperColor}
            sx={{
              '.MuiStepConnector-line': {
                border: `1px dashed  ${stepperColor}`
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
