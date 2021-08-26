import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ParcelIcon from '../../icons/Shipper/ParcelIcon'
import PaletIcon from '../../icons/Shipper/PaletIcon'

export default function ShipperSwitchPackage({
  parcelTranslate,
  paletTranslate
}) {
  const [packageType, setPackageType] = React.useState('parcel')

  const handleAlignment = (event, newPackageType) => {
    if (newPackageType !== null) {
      setPackageType(newPackageType)
    }
  }

  return (
    <ToggleButtonGroup value={packageType} exclusive onChange={handleAlignment}>
      <ToggleButton value='parcel' key='parcel'>
        <ParcelIcon fontSize='small' />
        {parcelTranslate}
      </ToggleButton>
      <ToggleButton value='palet' key='palet'>
        <PaletIcon fontSize='small' />
        {paletTranslate}
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
