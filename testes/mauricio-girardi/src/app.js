import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import { HOME, REGISTER, LOGIN } from 'routes'
import RoutesPrivate from 'components/Routes/Private'
import StoreProvider from 'components/Store/provider'

const Login = lazy(() => import('pages/Login'))
const MainPage = lazy(() => import('pages/MainPage'))
const Register = lazy(() => import('pages/Register'))

function App() {
  return (
    <Suspense fallback={<h1>Carregando ...</h1>}>
      <StoreProvider>
        <Switch>
          <RoutesPrivate path={HOME} exact component={MainPage} />
          <Route path={LOGIN} component={Login} />
          <Route path={REGISTER} component={Register} />
        </Switch>
      </StoreProvider>
    </Suspense>
  )
}

export default App
