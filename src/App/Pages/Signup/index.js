import React from 'react'
import { Redirect } from 'react-router-dom'
import { Col, Row, Typography } from 'antd'

import { useAuth } from 'App/context/auth'
import SignupForm from './SignupForm'

const { Title } = Typography
const Signup = () => {
  const { currentUser, mainRoute } = useAuth()

  if (currentUser) {
    return <Redirect to={mainRoute} />
  }

  return (
    <>
      <Row justify="center">
        <Col>
          <Title>Create your account</Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12}>
          <SignupForm />
        </Col>
      </Row>
    </>
  )
}

export default Signup
