import MenuItem from '@mui/material/MenuItem';
import { ExtendButtonBase } from '@mui/material/ButtonBase';
import { MenuItemTypeMap } from '@mui/material/MenuItem/MenuItem';

interface IrubiwinMenuItem extends ExtendButtonBase<MenuItemTypeMap> {
  children?: Node;
  className?: string;
}

/**
 * This is a Mui RubiwinMenuItem branded for Rubiwin
 *
 * Demos:
 * - [Menus](https://mui.com/components/menus/)
 *
 * API:
 * - [MenuItem API](https://mui.com/api/menu-item/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
const RubiwinMenuItem = ({
  children,
  className,
  ...props
}: IrubiwinMenuItem) => (
  <MenuItem className={className} {...props}>
    {children}
  </MenuItem>
);

export default RubiwinMenuItem;
