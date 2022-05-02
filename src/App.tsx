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
          mode="vertical"
          defaultOpenSubMenus={['3']}
        >
          <MenuItem>MenuItem 0</MenuItem>
          <MenuItem disabled>MenuItem 1</MenuItem>
          <MenuItem>MenuItem 2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>SubMenu 1</MenuItem>
            <MenuItem>SubMenu 2</MenuItem>
            <MenuItem>SubMenu 3</MenuItem>
          </SubMenu>
        </Menu>
      </div>
      <div></div>
    </div>
  );
};

export default App;
