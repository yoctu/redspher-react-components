import * as React from 'react'
import { Select } from '@mui/material'
import ArrowBottomIcon from '../../icons/Shipper/ArrowBottomIcon'
import { createStyles, makeStyles } from '@mui/styles'
import themeConstants from '../theme/themeConstants'

const useStyles = makeStyles(() => {
  return createStyles({
    dropdown: {
      marginTop: '15px',

      '& .MuiMenuItem-root': {
        '&:hover, &.Mui-focusVisible, &.Mui-selected, &.Mui-selected:hover': {
          backgroundColor: 'transparent',
          color: themeConstants.primary.main
        }
      }
    }
  })
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
