import React from 'react'
import { Redirect } from 'react-router-dom'
import { Col, Typography, Row } from 'antd'

import { useAuth } from 'App/context/auth'
import LoginForm from './LoginForm'

const { Title } = Typography

const Login = () => {
  const { currentUser } = useAuth()

  if (currentUser) {
    return <Redirect to="/home" />
  }

  return (
    <>
      <Row justify="center">
        <Title>Login</Title>
      </Row>

      <Row justify="center">
        <Col span={8}>
          <LoginForm />
        </Col>
      </Row>
    </>
  )
}

export default Login
