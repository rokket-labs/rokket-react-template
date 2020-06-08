import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Button, Form, Input, notification, Typography } from 'antd'

import { useAuth } from 'App/context/auth'
import styles from './styles.module.css'

const { Text } = Typography

const LoginForm = () => {
  const { mainRoute, signin } = useAuth()
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const onFinish = async values => {
    setLoading(true)
    try {
      const { email, password } = values
      await signin(email, password)
      history.push(mainRoute)
    } catch (error) {
      console.log(error)
      notification.error({
        message: 'Error',
        description: 'Incorrect user or password',
      })
      setLoading(false)
    }
  }

  return (
    <>
      <Form
        layout="vertical"
        name="signup"
        onFinish={onFinish}
        className={styles.form}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your emai!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          <Link to="/reset-password">Forgot your password?</Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" loading={loading} htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Don&apos;t have an account? <Link to="/signup">Sign up</Link>
      </Text>
    </>
  )
}

export default LoginForm
