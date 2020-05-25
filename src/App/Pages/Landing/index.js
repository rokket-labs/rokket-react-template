import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { Button, Col, Row, Space, Typography } from 'antd'

import { useAuth } from 'App/context/auth'

const { Title } = Typography

const Landing = () => {
  const history = useHistory()
  const { currentUser, mainRoute } = useAuth()

  if (currentUser) {
    return <Redirect to={mainRoute} />
  }

  return (
    <>
      <Row justify="center">
        <Col>
          <Title>Landing Page</Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Space size={40}>
            <Button
              type="primary"
              size={'large'}
              onClick={() => history.push('/signup')}>
              Sign up
            </Button>
            <Button size={'large'} onClick={() => history.push('/login')}>
              Login
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  )
}

export default Landing
