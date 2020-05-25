import React from 'react'
import firebase from 'firebase'
import 'antd/dist/antd.css'

import Pages from './Pages'
import { AuthProvider } from 'App/context/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyAUBie9o9FWeXyW4ex8IwQ1_2r89ijG5Dk',
  authDomain: 'latam-bio-prod.firebaseapp.com',
})

const App = () => {
  return (
    <AuthProvider>
      <Pages />
    </AuthProvider>
  )
}

export default App
