import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import App from './App.js';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
