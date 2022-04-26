import { FC } from 'react';
import Button from './components/Button/button';
import { ButtonSize, ButtonType } from './components/Button/types';

const App: FC = () => {
  return (
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
  );
};

export default App;
