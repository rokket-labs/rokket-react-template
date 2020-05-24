import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Input, notification } from 'antd'

const SignupForm = () => {
  const [loading, setLoading] = useState(false)

  // Replace this function
  const onFinish = async values => {
    setLoading(true)
    notification['info']({
      message: 'Sign up',
      description: 'Replace the onFinish function in order to make this work',
    })
  }

  return (
    <Form layout="vertical" name="signup" onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>
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
      <Form.Item>
        <Button type="primary" loading={loading} htmlType="submit" block>
          Create
        </Button>
        By creating an account, you agree to the <Link>Terms of Service</Link>.
      </Form.Item>
    </Form>
  )
}

export default SignupForm
