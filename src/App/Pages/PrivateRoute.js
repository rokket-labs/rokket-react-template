import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { useAuth } from 'App/context/auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
