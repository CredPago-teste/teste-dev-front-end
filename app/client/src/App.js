import React from "react";
import { Route, Switch } from "react-router-dom";

import Cadastro from "./Pages/Cadastro";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/cadastro" component={Cadastro} exact />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
