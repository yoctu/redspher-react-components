import React from 'react'
import style from './ShipperStepper.module.scss'
import { Stepper, Step, StepLabel } from '@material-ui/core'

const ShipperStepper = ({ steps, activeStep }) => {
  return (
    <div className={style.rangeSlider}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps = {}
          const labelProps = {}

          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </div>
  )
}

export default ShipperStepper
