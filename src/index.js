import React from 'react';
import { render } from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.querySelector('#app')
);
