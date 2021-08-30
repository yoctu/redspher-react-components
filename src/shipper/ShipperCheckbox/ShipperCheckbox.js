import * as React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded'
import StopRounded from '@material-ui/icons/StopRounded'


export default function IconCheckboxes() {
  return (
    <div style={{ position: 'relative', width: '10px', height: '10px' }}>
      <Checkbox
        style={{
          width: '10px',
          height: '10px'
        }}
        color='primary'
        icon={
          <CheckBoxOutlineBlankRoundedIcon
            style={{
              width: '10px',
              height: '10px'
            }}
          />
        }
        checkedIcon={
          <div style={{ position: 'absolute', width: '10px', height: '10px' }}>
            <CheckBoxOutlineBlankRoundedIcon
              style={{
                position: 'absolute',
                width: '10px',
                height: '10px',
                left: 0
              }}
            />
            <StopRounded
              style={{
                position: 'absolute',
                width: '10px',
                height: '10px',
                left: 0
              }}
            />
          </div>
        }
      />
    </div>
  )
}
