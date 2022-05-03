import { FC } from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/submenu';

const App: FC = () => {
  return (
    <div>
      <div>
        <Menu
          defaultIndex="0"
          onSelect={(index) => console.log(index)}
          // mode="vertical"
          defaultOpenSubMenus={['2']}
        >
          <MenuItem>MenuItem 0</MenuItem>
          <MenuItem disabled>MenuItem 1</MenuItem>
          <SubMenu title="MenuItem 2">
            <MenuItem>SubMenu 0</MenuItem>
            <MenuItem>SubMenu 1</MenuItem>
            <MenuItem>SubMenu 2</MenuItem>
          </SubMenu>
          <MenuItem>MenuItem 3</MenuItem>
        </Menu>
      </div>
      <div></div>
    </div>
  );
};

export default App;
