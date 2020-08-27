import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import 'assets/styles/global.css'

import App from './app'

const Root = () => {
  return (
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  )
}

export default Root
