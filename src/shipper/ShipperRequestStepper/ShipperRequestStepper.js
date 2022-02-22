import React from 'react'
import { Stepper, Step, StepLabel, StepConnector, Box } from '@mui/material'
import { withStyles } from '@mui/styles'

import PinIcon from '../../icons/Shipper/PinIcon'

const Connector = withStyles({
  line: {
    marginTop: -2,
    marginLeft: -7,
    borderColor: (p) => p.$stepperColor,
    border: '1px dashed'
  }
})(StepConnector)

const StepperStyled = withStyles({
  root: {
    padding: 0,
    backgroundColor: 'transparent'
  }
})(Stepper)

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
      <StepperStyled connector={<Connector $stepperColor={stepperColor} />}>
        {steps.map((step, index) => (
          <Step key={`${step}${index}`}>
            <StepLabel
              StepIconComponent={StepIcon}
              StepIconProps={{ iconPrimaryColor, iconSecondaryColor }}
            />
          </Step>
        ))}
      </StepperStyled>
    </Box>
  )
}

export default ShipperStepper
