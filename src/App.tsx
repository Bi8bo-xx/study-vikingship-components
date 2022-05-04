import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/submenu';
import Transition from './components/Transition';

library.add(fas);

const App: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Menu>
        <MenuItem>active</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem>xyz</MenuItem>
        <MenuItem index="8">index test</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>SubMenu 0</MenuItem>
          <MenuItem>SubMenu 1</MenuItem>
          <MenuItem>SubMenu 2</MenuItem>
        </SubMenu>
      </Menu>
      <div>
        <Button onClick={() => setShow(!show)}>Toggle</Button>
        <Transition in={show} timeout={300} animation="zoom-in-right" wrapper>
          <Button onClick={() => setShow(!show)}>Toggle</Button>
        </Transition>
        <Transition in={show} timeout={300} animation="zoom-in-left">
          <div>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default App;
