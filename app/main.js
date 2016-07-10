import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import store from './store/todos';
import { Provider } from 'react-redux';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);