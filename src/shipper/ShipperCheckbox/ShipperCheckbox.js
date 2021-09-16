import * as React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded'
import StopRounded from '@material-ui/icons/StopRounded'
import styles from './styles.module.scss'

export default function IconCheckboxes({ className = '', ...delegated }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Checkbox
        {...delegated}
        className={styles.sizeStd}
        color='primary'
        icon={<CheckBoxOutlineBlankRoundedIcon className={styles.sizeStd} />}
        checkedIcon={
          <React.Fragment>
            <CheckBoxOutlineBlankRoundedIcon className={styles.sizeStd} />
            <StopRounded className={styles.checked} />
          </React.Fragment>
        }
      />
    </div>
  )
}
