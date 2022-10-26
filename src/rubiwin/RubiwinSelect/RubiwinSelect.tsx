import Select from '@mui/material/Select';
import { SelectProps } from '@mui/material/Select/Select';
import RubiwinCaretBottomIcon from '../../icons/Rubiwin/CaretBottomIcon';
import themeConstants from '../theme/themeConstants';

interface IrubiwinSelect extends SelectProps {
  autoWidth?: boolean;
  children?: Node;
  className?: string;
  id?: string;
  inputProps?: object;
  multiple?: boolean;
  open?: boolean;
  value?: any;
}

/**
 * This is a Mui Select branded for Rubiwin
 *
 * Demos:
 * - [Selects](https://mui.com/components/selects/)
 *
 * API:
 * - [Select API](https://mui.com/api/select/)
 * - inherits [OutlinedInput API](https://mui.com/api/outlined-input/)
 */
const RubiwinSelect = ({
  children,
  className,
  autoWidth,
  id,
  inputProps,
  multiple,
  open,
  value,
  ...props
}: IrubiwinSelect) => (
  <Select
    autoWidth={autoWidth}
    id={id}
    inputProps={inputProps}
    multiple={multiple}
    open={open}
    value={value}
    className={className}
    IconComponent={(props) => (
      <RubiwinCaretBottomIcon
        primarycolor={
          /MuiSelect-iconOpen/.test(props?.className)
            ? themeConstants.primary.main
            : themeConstants.grey.main
        }
        {...props}
      />
    )}
    {...props}
  >
    {children}
  </Select>
);

export default RubiwinSelect;
