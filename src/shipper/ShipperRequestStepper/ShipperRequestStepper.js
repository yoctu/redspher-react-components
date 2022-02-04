import React from 'react'
import { Stepper, Step, StepLabel, StepConnector, Box } from '@mui/material'
import { withStyles } from '@mui/styles'

import themeConstants from '../theme/themeConstants'
import PinIcon from '../../icons/Shipper/PinIcon'

const Connector = withStyles({
  line: {
    marginTop: -2,
    marginLeft: -7,
    borderColor: themeConstants.white.main,
    border: '1px dashed'
  }
})(StepConnector)

const StepperStyled = withStyles({
  root: {
    padding: 0,
    backgroundColor: 'transparent'
  }
})(Stepper)

function StepIcon() {
  return (
    <div>
      <PinIcon
        primarycolor={themeConstants.white.main}
        secondarycolor={themeConstants.white.main}
      />
    </div>
  )
}

const ShipperStepper = () => {
  const steps = Array.apply('poney', Array(2))
  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      <StepperStyled connector={<Connector />}>
        {steps.map((step, index) => (
          <Step key={`${step}${index}`}>
            <StepLabel StepIconComponent={StepIcon} />
          </Step>
        ))}
      </StepperStyled>
    </Box>
  )
}

export default ShipperStepper
