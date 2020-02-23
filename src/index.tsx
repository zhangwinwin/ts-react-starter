import React from 'react';
import ReactDOM from 'react-dom';

// import Provider from '@store/index';
import App from './app.tsx';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const Root = document.getElementById('root');

ReactDOM.render(
  <App />,
  Root
);
