import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ListVisits from './pages/ListVisits';
import Profile from './pages/Profile';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
};

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/forgotPassword" exact component={ForgotPassword} />
      <PrivateRoute path="/main" component={ListVisits} />
      <PrivateRoute path="/profile" component={Profile} />
    </BrowserRouter>
  )
}

export default Routes;