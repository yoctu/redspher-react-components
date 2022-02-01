import React from 'react'
import style from './ShipperRequestStepper.module.scss'
import { Stepper, Step, StepLabel, StepConnector } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import PinIcon from '../../icons/Shipper/PinIcon'

const Connector = withStyles({
  line: {
    marginTop: -2,
    marginLeft: -7,
    borderColor: (p) => p.$stepperColor,
    border: '1px dashed'
  },
  props: {
    poney: 'prout'
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
    <div className={style.stepper}>
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
    </div>
  )
}

export default ShipperStepper
