import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { useAuth } from 'App/context/auth'
import AppLayout from './AppLayout'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return <Redirect to="/login" />
  }
  return (
    <AppLayout>
      <Route {...rest} render={props => <Component {...props} />} />
    </AppLayout>
  )
}

export default PrivateRoute
