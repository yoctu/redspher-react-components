import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { CheckBoxOutlineBlankRounded, StopRounded } from '@mui/icons-material'
import styles from './styles.module.scss'

export default function IconCheckboxes({ className = '', ...delegated }) {
  return (
    <Checkbox
      {...delegated}
      className={`${styles.sizeStd} ${className}`}
      color='primary'
      icon={<CheckBoxOutlineBlankRounded className={styles.sizeStd} />}
      checkedIcon={
        <React.Fragment>
          <CheckBoxOutlineBlankRounded className={styles.sizeStd} />
          <StopRounded className={styles.checked} />
        </React.Fragment>
      }
    />
  )
}
