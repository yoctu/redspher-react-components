import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { CheckBoxOutlineBlankRounded, StopRounded } from '@mui/icons-material'

export default function IconCheckboxes({ className = '', ...delegated }) {
  return (
    <Checkbox
      {...delegated}
      className={className}
      color='primary'
      icon={
        <CheckBoxOutlineBlankRounded
          sx={{
            width: (theme) => theme.spacing(2),
            height: (theme) => theme.spacing(2)
          }}
        />
      }
      checkedIcon={
        <React.Fragment>
          <CheckBoxOutlineBlankRounded
            sx={{
              width: (theme) => theme.spacing(2),
              height: (theme) => theme.spacing(2)
            }}
          />
          <StopRounded
            sx={{
              position: 'absolute',
              width: (theme) => `calc(${theme.spacing(2)} - 2px)`,
              height: (theme) => `calc(${theme.spacing(2)} - 2px)`
            }}
          />
        </React.Fragment>
      }
      sx={{
        width: (theme) => theme.spacing(2),
        height: (theme) => theme.spacing(2),
        marginRight: '10px'
      }}
    />
  )
}
