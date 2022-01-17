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
  },
  active: {
    '& $line': {
      borderColor: themeConstants.primary.light,
      borderLeftStyle: 'dashed'
    }
  }
})(StepConnector)

const Content = withStyles({
  root: {
    borderColor: themeConstants.primary.light,
    borderLeftStyle: 'dashed',
    '& [class*="MuiCollapse-wrapperInner"]': {
      marginTop: '-35px'
    }
  },
  last: {
    border: 'none'
  }
})(StepContent)

const ShipperAddressStepper = ({ icons, nbItems, childrenComponent }) => {
  return (
    <Stepper connector={<Connector />} orientation='vertical'>
      {Array.apply(null, Array(nbItems)).map((_item, index) => (
        <Step key={index} active>
          <StepLabel
            StepIconComponent={StepIcon}
            StepIconProps={{
              index,
              nbItems,
              icons
            }}
          />
          <Content>{childrenComponent[index]}</Content>
        </Step>
      ))}
    </Stepper>
  )
}

export default ShipperAddressStepper
