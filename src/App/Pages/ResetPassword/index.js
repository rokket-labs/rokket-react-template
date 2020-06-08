import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Input, Button, Typography, notification } from 'antd'

import { useAuth } from 'App/context/auth'
import styles from './styles.module.css'

const { Text, Title } = Typography

const ResetPassword = () => {
  const [loading, setLoading] = useState(false)
  const [displaySuccessText, setDisplaySuccessText] = useState(false)

  const { sendPasswordResetEmail } = useAuth()

  const onFinish = async ({ email }) => {
    setLoading(true)
    try {
      await sendPasswordResetEmail(email)
      setDisplaySuccessText(true)
    } catch (error) {
      console.log(error)
      notification.error({
        message: 'Error',
        description: error.message,
      })
    }
    setLoading(false)
  }
  const renderForm = () => {
    return (
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item>
          Enter the email address associated with your account and we&apos;ll
          send you a link to reset your password.
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" loading={loading} htmlType="submit" block>
            Send password reset email
          </Button>
        </Form.Item>
      </Form>
    )
  }
  const renderSuccessText = () => {
    return (
      <Text>
        Thanks, check your email for instructions to reset your password.
      </Text>
    )
  }
  return (
    <>
      <Row justify="center" style={{ padding: '30px 0px' }}>
        <Title>Rokket React Template</Title>
      </Row>
      <Row justify="center">
        <Col span={6}>
          <div className={styles.container}>
            {displaySuccessText ? renderSuccessText() : renderForm()}
          </div>

          <Text>
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </Text>
        </Col>
      </Row>
    </>
  )
}

export default ResetPassword
