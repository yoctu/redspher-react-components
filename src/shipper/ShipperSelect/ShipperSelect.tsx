import React from 'react';
import { Select } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { SelectProps } from '@mui/material/Select/Select';
import ArrowBottomIcon from '../../icons/Shipper/ArrowBottomIcon';

interface IshipperSelect extends SelectProps {
  className?: any;
  children?: any;
  label?: any;
}

const useStyles = makeStyles(() =>
  createStyles({
    dropdown: {
      marginTop: '15px'
    }
  })
);

/**
 * This is a Mui Select branded for Shipper
 *
 * Demos:
 * - [Selects](https://mui.com/components/selects/)
 *
 * API:
 * - [Select API](https://mui.com/api/select/)
 * - inherits [OutlinedInput API](https://mui.com/api/outlined-input/)
 */
export default function ShipperSelect({
  className = '',
  children,
  label,
  ...delegated
}: IshipperSelect) {
  const classes = useStyles();

  return (
    <Select
      multiline
      variant='standard'
      label={label}
      IconComponent={(props) => <ArrowBottomIcon {...props} />}
      className={className}
      MenuProps={{
        // @ts-ignore
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
