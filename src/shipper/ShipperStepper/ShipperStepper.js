import React from 'react'
import style from './ShipperStepper.module.scss'
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography,
  Box
} from '@mui/material'
import { withStyles, makeStyles } from '@mui/styles'
import clsx from 'clsx'
import themeConstants from '../theme/themeConstants'

const useStepIconStyles = makeStyles({
  root: {
    color: themeConstants.grey.light,
    display: 'flex',
    height: 22,
    zIndex: 999,
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
    backgroundColor: 'currentColor',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  textActive: {
    color: themeConstants.black.dark,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  textNotActive: {
    color: themeConstants.grey.main
  },
  textCurrent: {
    color: themeConstants.black.dark
  },
  stepLabel: {
    marginTop: 0
  },
  alternativeLabel: {},
  labelContainer: {
    width: 200,
    '& $alternativeLabel': {
      marginTop: 0
    }
  },
  iconActive: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  iconCurrent: {},
  iconNotActive: {},
  completedMiddle: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
})

function StepIcon(props) {
  const classes = useStepIconStyles()
  const { active, completed, onClick } = props

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active || completed,
        [classes.completedMiddle]: completed
      })}
      onClick={() => {
        if (completed) {
          onClick()
        }
      }}
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

const Connector = withStyles({
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
  const classes = useStepIconStyles()

  const getClassNameTypo = (index) => {
    if (index < activeStep) {
      return classes.textActive
    } else if (index === activeStep) {
      return classes.textCurrent
    } else {
      return classes.textNotActive
    }
  }

  const getClassNameIcon = (index) => {
    if (index < activeStep) {
      return classes.iconActive
    } else if (index === activeStep) {
      return classes.iconCurrent
    } else {
      return classes.iconNotActive
    }
  }

  const onClickAction = (index, step) => {
    if (index < activeStep) {
      step.onClick()
    }
  }

  return (
    <div className={style.stepper}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<Connector />}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={StepIcon}
              StepIconProps={{
                onClick: step.onClick
              }}
              classes={{
                labelContainer: classes.labelContainer,
                alternativeLabel: classes.alternativeLabel
              }}
            >
              <Typography
                className={getClassNameTypo(index)}
                onClick={() => {
                  onClickAction(index, step)
                }}
              >
                {step.label}
              </Typography>
              <Box
                display='flex'
                justifyContent='center'
                style={{ marginTop: -70 }}
              >
                <Box
                  className={getClassNameIcon(index)}
                  onClick={() => {
                    onClickAction(index, step)
                  }}
                >
                  {step.icon}
                </Box>
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default ShipperStepper
