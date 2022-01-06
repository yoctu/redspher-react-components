import React from 'react'
import style from './ShipperStepper.module.scss'
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  makeStyles,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import clsx from 'clsx'
import themeConstants from '../theme/themeConstants'

const useQontoStepIconStyles = makeStyles({
  root: {
    color: themeConstants.grey.light,
    display: 'flex',
    height: 22,
    zIndex: 9999,
    alignItems: 'center'
  },
  active: {
    color: themeConstants.primary.main
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: themeConstants.primary.main
  },
  completed: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  textActive: {
    color: themeConstants.black.dark
  },
  textNotActive: {
    color: themeConstants.grey.main
  }
})

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles()
  const { active, completed } = props

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active || completed
      })}
    >
      {completed ? (
        <svg
          width='6'
          height='6'
          viewBox='0 0 6 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='3' cy='3' r='3' fill={themeConstants.primary.main} />
        </svg>
      ) : (
        <svg
          width='8'
          height='8'
          viewBox='0 0 8 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='4'
            cy='4'
            r='3'
            fill='white'
            stroke={
              active || completed
                ? themeConstants.primary.main
                : themeConstants.grey.light
            }
            strokeWidth='2'
          />
        </svg>
      )}
    </div>
  )
}

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50%)',
    right: 'calc(50%)'
  },
  active: {
    '& $line': {
      borderColor: themeConstants.primary.main
    }
  },
  completed: {
    '& $line': {
      borderColor: themeConstants.primary.main
    }
  },
  line: {
    borderColor: themeConstants.grey.light,
    borderTopWidth: 2,
    borderRadius: 1
  }
})(StepConnector)

const ShipperStepper = ({ steps, activeStep }) => {
  const classes = useQontoStepIconStyles()
  return (
    <div className={style.stepper}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <Typography
                className={
                  index <= activeStep
                    ? classes.textActive
                    : classes.textNotActive
                }
              >
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default ShipperStepper
