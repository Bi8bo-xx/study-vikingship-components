import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './submenu';
import { IMenuComponent } from './types';

const TransMenu = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
