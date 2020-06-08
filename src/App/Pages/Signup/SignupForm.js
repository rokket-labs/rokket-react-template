import React, { useState } from 'react'
import firebase from 'firebase'
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, Input } from 'antd'

import { useAuth } from 'App/context/auth'

const SignupForm = () => {
  const history = useHistory()
  const { mainRoute } = useAuth()
  const [loading, setLoading] = useState(false)

  const onFinish = async ({ email, password }) => {
    setLoading(true)
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      history.push(mainRoute)
    } catch (error) {
      setLoading(false)
      console.log(error)
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
          Create
        </Button>
        By creating an account, you agree to the <Link>Terms of Service</Link>.
      </Form.Item>
    </Form>
  )
}

export default SignupForm
