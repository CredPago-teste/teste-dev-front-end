import React from "react";

import GlobalStyle from "./styles/global";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import AppProvider from "./hooks";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Dashboard />
      <GlobalStyle />
    </AppProvider>
  );
};

export default App;
