import React from 'react'
import style from './ShipperRequestStepper.module.scss'
import { Stepper, Step, StepLabel, StepConnector } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

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
    <div className={style.stepper}>
      <Stepper connector={<Connector />}>
        {steps.map((step, index) => (
          <Step key={`${step}${index}`}>
            <StepLabel StepIconComponent={StepIcon} />
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default ShipperStepper
