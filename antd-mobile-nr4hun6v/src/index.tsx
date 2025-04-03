import { Button } from 'antd-mobile';
import * as React from 'react';
import { FC } from 'react';
import { render } from 'react-dom';
import './style.css';

const App: FC = () => {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
