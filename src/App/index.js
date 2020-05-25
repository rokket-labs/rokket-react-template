import React from 'react'
import firebase from 'firebase'
import 'antd/dist/antd.css'

import Pages from './Pages'
import { AuthProvider } from 'App/context/auth'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
})

const App = () => {
  return (
    <AuthProvider>
      <Pages />
    </AuthProvider>
  )
}

export default App
