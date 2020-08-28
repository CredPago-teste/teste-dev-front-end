import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './styles';

import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>,
  document.getElementById('root')
);