import React from 'react';
import { Select } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import ArrowBottomIcon from '../../icons/Shipper/ArrowBottomIcon';

const useStyles = makeStyles(() =>
  createStyles({
    dropdown: {
      marginTop: '15px'
    }
  })
);

export default function ShipperSelect({
  className = '',
  children,
  label,
  ...delegated
}: any) {
  const classes = useStyles();

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
  );
}
