import * as React from 'react'
import { Select } from '@mui/material'
import ArrowBottomIcon from '../../icons/Shipper/ArrowBottomIcon'
import { makeStyles } from '@mui/styles'
import themeConstants from '../theme/themeConstants'

const useStyles = makeStyles({
  dropdown: {
    marginTop: '15px',

    '& [class*="MuiMenuItem-root"]': {
      '&:hover, &[class*="Mui-focusVisible"], &[class*="Mui-selected"], &[class*="Mui-selected"]:hover':
        {
          backgroundColor: 'transparent',
          color: themeConstants.primary.main
        }
    }
  }
})

export default function ShipperSelect({
  className = '',
  children,
  label,
  ...delegated
}) {
  const classes = useStyles()

  return (
    <Select
      multiline
      variant='standard'
      label={label}
      IconComponent={(props) => <ArrowBottomIcon {...props} />}
      className={className}
      MenuProps={{
        getContentAnchorEl: null,
        classes: { paper: classes.dropdown },
        elevation: 3
      }}
      {...delegated}
    >
      {children}
    </Select>
  )
}
