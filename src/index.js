import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import store from './store';

render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.querySelector('#app')
);
