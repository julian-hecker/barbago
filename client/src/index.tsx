import React from 'react';
import ReactDOM from 'react-dom';

import Context from './context';
import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root'),
);
