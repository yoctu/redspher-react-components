import * as React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded'
import StopRounded from '@material-ui/icons/StopRounded'

export default function IconCheckboxes() {
  return (
    <div style={{ position: 'relative' }}>
      <Checkbox
        style={{
          width: '14px',
          height: '14px'
        }}
        color='primary'
        icon={
          <CheckBoxOutlineBlankRoundedIcon
            style={{
              width: '14px',
              height: '14px'
            }}
          />
        }
        checkedIcon={
          <div style={{ position: 'relative', width: '14px', height: '14px' }}>
            <CheckBoxOutlineBlankRoundedIcon
              style={{
                position: 'absolute',
                width: '14px',
                height: '14px',
                left: 0
              }}
            />
            <StopRounded
              style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                margin: 'auto',
                left: '1px',
                top: '1px'
              }}
            />
          </div>
        }
      />
    </div>
  )
}
