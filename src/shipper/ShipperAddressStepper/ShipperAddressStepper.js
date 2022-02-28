import React, { useState } from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  StepContent
} from '@mui/material'
import { withStyles } from '@mui/styles'
import themeConstants from '../theme/themeConstants'
import DeleteIcon from '../../icons/Shipper/DeleteIcon'

function StepIcon(props) {
  const { index, nbItems, icons, removeStepMethod } = props
  const [hover, setHover] = useState(false)

  let icon = icons.middle
  if (index === 0) {
    icon = icons.first
  } else if (index === nbItems - 1) {
    icon = icons.last
  }

  const onClickMethod = () => {
    removeStepMethod(index)
  }
  return (
    <div
      onClick={hover && nbItems > 2 ? onClickMethod : undefined}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover && nbItems > 2 ? <DeleteIcon /> : icon}
    </div>
  )
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
    '& .MuiCollapse-wrapperInner': {
      marginTop: '-35px'
    }
  },
  last: {
    border: 'none'
  }
})(StepContent)

const ShipperAddressStepper = ({
  icons,
  nbItems,
  childrenComponent,
  removeStepMethod,
  ...delegated
}) => {
  return (
    <Stepper connector={<Connector />} orientation='vertical' {...delegated}>
      {Array.apply(null, Array(nbItems)).map((_item, index) => (
        <Step key={index} active>
          <StepLabel
            StepIconComponent={StepIcon}
            StepIconProps={{
              index,
              nbItems,
              icons,
              removeStepMethod
            }}
          />
          <Content>{childrenComponent[index]}</Content>
        </Step>
      ))}
    </Stepper>
  )
}

export default ShipperAddressStepper
