import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

export default function ShipperSwitch({
  firstValueTranslate,
  firstValue,
  firstIcon,
  secondValueTranslate,
  secondValue,
  secondIcon
}) {
  const [defaultValue, setDefaultValue] = React.useState(firstValue)

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setDefaultValue(newValue)
    }
  }

  return (
    <ToggleButtonGroup
      value={defaultValue}
      exclusive
      onChange={handleAlignment}
    >
      <ToggleButton value={firstValue} key={firstValue}>
        {firstIcon}
        {firstValueTranslate}
      </ToggleButton>
      <ToggleButton value={secondValue} key={secondValue}>
        {secondIcon}
        {secondValueTranslate}
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
