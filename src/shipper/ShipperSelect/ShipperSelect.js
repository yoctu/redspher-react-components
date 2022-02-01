import * as React from 'react'
import { Select } from '@mui/material'
import ArrowBottomIcon from '../../icons/Shipper/ArrowBottomIcon'
import styles from './styles.module.scss'

export default function ShipperSelect({
  className = '',
  children,
  label,
  ...delegated
}) {
  return (
    <Select
      multiline
      variant='standard'
      label={label}
      IconComponent={(props) => <ArrowBottomIcon {...props} />}
      className={`${styles.select} ${className}`}
      MenuProps={{
        getContentAnchorEl: null,
        classes: { paper: styles.dropdown },
        elevation: 3
      }}
      {...delegated}
    >
      {children}
    </Select>
  )
}
