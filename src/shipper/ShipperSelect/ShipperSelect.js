import * as React from 'react'
import { Select } from '@material-ui/core'
import { ArrowBottomIcon } from '../../index'
import styles from './styles.module.scss'

export default function ShipperSelect({
  className = '',
  children,
  ...delegated
}) {
  return (
    <Select
      multiline
      IconComponent={(props) => <ArrowBottomIcon {...props} />}
      className={`${styles.select} ${className}`}
      MenuProps={{
        classes: { paper: styles.dropdown },
        elevation: 3
      }}
      {...delegated}
    >
      {children}
    </Select>
  )
}
