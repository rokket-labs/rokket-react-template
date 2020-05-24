import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import { Button, Typography } from 'antd'

const { Title } = Typography
const Home = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const logout = async () => {
    setLoading(true)
    try {
      await firebase.auth().signOut()
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Title>Home</Title>
      <Button onClick={logout} loading={loading}>
        Log out
      </Button>
    </>
  )
}

export default Home
