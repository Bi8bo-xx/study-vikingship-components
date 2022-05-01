import { FC } from 'react';
import Button from './components/Button/button';
import { ButtonSize, ButtonType } from './components/Button/types';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

const App: FC = () => {
  return (
    <div>
      <div>
        <Menu
          defaultIndex={0}
          onSelect={(index) => console.log(index)}
          mode="vertical"
        >
          <MenuItem>MenuItem 0</MenuItem>
          <MenuItem disabled>MenuItem 1</MenuItem>
          <MenuItem>MenuItem 2</MenuItem>
        </Menu>
      </div>
      <div>
        <Button>默认按钮</Button>
        <Button disabled>禁用按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Small Danger
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">
          Baidu Link
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
          Disabled Link
        </Button>
      </div>
    </div>
  );
};

export default App;
