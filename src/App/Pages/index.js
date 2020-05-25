import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Landing from './Landing'
import Login from './Login'
import Signup from './Signup'
import PrivateRoute from './PrivateRoute'

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/rokkets" component={() => <h1>Rokkets</h1>} />
        <PrivateRoute path="/labs" component={() => <h1>Labs</h1>} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </Router>
  )
}

export default Pages
