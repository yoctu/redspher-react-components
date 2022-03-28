import React from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography,
  Box
} from '@mui/material'
import themeConstants from '../theme/themeConstants'

function StepIcon(props) {
  const { active, completed, onClick } = props

  return (
    <Box
      sx={{
        display: 'flex',
        height: 22,
        zIndex: 999,
        alignItems: 'center',
        color: active || completed ? 'primary.main' : 'grey.light',
        completedMiddle: {
          '&:hover': {
            cursor: completed ? 'pointer' : 'default'
          }
        }
      }}
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
    </Box>
  )
}

const ShipperStepper = ({ steps, activeStep }) => {
  const getClassNameTypo = (index) => {
    if (index < activeStep) {
      return {
        color: 'black.dark',
        '&:hover': {
          cursor: 'pointer'
        }
      }
    } else if (index === activeStep) {
      return {
        color: 'black.dark'
      }
    } else {
      return {
        color: 'grey.main'
      }
    }
  }

  const getClassNameIcon = (index) => {
    if (index < activeStep) {
      return {
        '&:hover': {
          cursor: 'pointer'
        }
      }
    } else if (index === activeStep) {
      return {}
    } else {
      return {}
    }
  }

  const onClickAction = (index, step) => {
    if (index < activeStep) {
      step.onClick()
    }
  }

  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={
          <StepConnector
            sx={(theme) => ({
              '&.MuiStepConnector-alternativeLabel': {
                top: 10,
                left: 'calc(-50%)',
                right: 'calc(50%)',
                '& .MuiStepConnector-line': {
                  borderColor: 'grey.light'
                }
              },
              '&.Mui-active': {
                '& .MuiStepConnector-line': {
                  borderColor: 'primary.main'
                }
              },
              '&.Mui-completed': {
                '& .MuiStepConnector-line': {
                  borderColor: 'primary.main'
                }
              },
              '&.MuiStepConnector-line': {
                borderColor: theme.palette.secondary.main,
                borderTopWidth: 2,
                borderRadius: 1
              }
            })}
          />
        }
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={StepIcon}
              StepIconProps={{
                onClick: step.onClick
              }}
              sx={{
                '& .MuiStepLabel-labelContainer': {
                  width: 200,
                  '& .MuiStepLabel-alternativeLabel': {
                    marginTop: 0
                  }
                }
              }}
            >
              <Typography
                sx={getClassNameTypo(index)}
                onClick={() => {
                  onClickAction(index, step)
                }}
              >
                {step.label}
              </Typography>
              <Box display='flex' justifyContent='center' sx={{ mt: -9 }}>
                <Box
                  sx={getClassNameIcon(index)}
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
    </Box>
  )
}

export default ShipperStepper
