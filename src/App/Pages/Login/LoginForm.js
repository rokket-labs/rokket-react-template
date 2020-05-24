import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import { Button, Form, Input, notification } from 'antd'

const LoginForm = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const onFinish = async values => {
    setLoading(true)
    try {
      const { email, password } = values
      await firebase.auth().signInWithEmailAndPassword(email, password)
      history.push('/home')
    } catch (error) {
      console.log(error)
      notification['error']({
        message: 'Error',
        description: 'Incorrect user or password',
      })
      setLoading(false)
    }
  }

  return (
    <Form layout="vertical" name="signup" onFinish={onFinish}>
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
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
