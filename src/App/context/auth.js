import React, { createContext, useContext, useState, useEffect } from 'react'
import firebase from 'firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user)
      setPending(false)
    })
  }, [])

  if (pending) {
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
