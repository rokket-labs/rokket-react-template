import React from 'react'
import { Redirect } from 'react-router-dom'
import { Col, Typography, Row } from 'antd'

import { useAuth } from 'App/context/auth'
import LoginForm from './LoginForm'

const { Title } = Typography

const Login = () => {
  const { currentUser, mainRoute } = useAuth()

  if (currentUser) return <Redirect to={mainRoute} />
  return (
    <>
      <Row justify="center" style={{ padding: '30px 0px' }}>
        <Title>Rokket React Template</Title>
      </Row>

      <Row justify="center">
        <Col span={6}>
          <LoginForm />
        </Col>
      </Row>
    </>
  )
}

export default Login
