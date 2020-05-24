import React from 'react'
import firebase from 'firebase'
import 'antd/dist/antd.css'

import Pages from './Pages'
import { AuthProvider } from 'App/context/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyAUBie9o9FWeXyW4ex8IwQ1_2r89ijG5Dk',
  authDomain: 'latam-bio-prod.firebaseapp.com',
  databaseURL: 'https://latam-bio-prod.firebaseio.com',
  projectId: 'latam-bio-prod',
  storageBucket: 'latam-bio-prod.appspot.com',
  messagingSenderId: '453750678067',
  appId: '1:453750678067:web:c770ae2ab3788899857946',
})

const App = () => {
  return (
    <AuthProvider>
      <Pages />
    </AuthProvider>
  )
}

export default App
