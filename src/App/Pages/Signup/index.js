import React from 'react'
import { Col, Row, Typography } from 'antd'

import SignupForm from './SignupForm'

const { Title } = Typography
const Signup = () => {
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
