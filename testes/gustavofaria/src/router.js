import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Login = lazy(() => import('./pages/Login'));
const Main = lazy(() => import('./pages/Main'));

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);
