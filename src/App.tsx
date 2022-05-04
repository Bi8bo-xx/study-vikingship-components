import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import Icon from './components/Icon/icon';

library.add(fas);

const App: FC = () => {
  return (
    <div>
      <Icon icon="coffee" theme="danger" size="2x" />
    </div>
  );
};

export default App;
