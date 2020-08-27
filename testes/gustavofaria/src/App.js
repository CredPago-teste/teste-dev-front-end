import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/GlobalStyles';

import Router from './router';

import store from './store';

import Loading from './components/Loading';

export default () => (
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  </Suspense>
);
