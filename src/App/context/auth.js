import React, { createContext, useContext, useState, useEffect } from 'react'
import firebase from 'firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [pending, setPending] = useState(true)

  const mainRoute = '/home'

  const signin = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  }

  const signout = async () => {
    await firebase.auth().signOut()
  }
  const sendPasswordResetEmail = async email => {
    await firebase.auth().sendPasswordResetEmail(email)
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged(currentUser => {
      setCurrentUser(currentUser)
      setPending(false)
    })
  }, [])

  if (pending) return <>Loading...</>

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        sendPasswordResetEmail,
        signin,
        signout,
        mainRoute,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
