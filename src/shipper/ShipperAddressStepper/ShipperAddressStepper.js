import React from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  StepContent
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import themeConstants from '../theme/themeConstants'

function StepIcon(props) {
  const { index, nbItems, icons } = props

  const icon = icons.middle
  if (index === 0) {
    return icons.first
  } else if (index === nbItems - 1) {
    return icons.last
  }

  return <div>{icon}</div>
}

const Connector = withStyles({
  line: {},
  completed: {
    '& $line': {
      borderColor: themeConstants.primary.light,
      borderLeftStyle: 'dashed'
    }
  }
})(StepConnector)

const ShipperStepper = ({ icons, nbItems, childrens }) => {
  return (
    <Stepper
      activeStep={nbItems}
      connector={<Connector />}
      orientation='vertical'
    >
      {Array.apply(null, Array(nbItems)).map((_item, index) => (
        <Step key={index}>
          <StepLabel
            StepIconComponent={StepIcon}
            StepIconProps={{
              index,
              nbItems,
              icons
            }}
          />
          <StepContent>{childrens[index]}</StepContent>
        </Step>
      ))}
    </Stepper>
  )
}

export default ShipperStepper
