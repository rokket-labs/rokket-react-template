import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Dropdown, Menu, Row, Button, Col } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { useAuth } from 'App/context/auth'

const { Sider, Header, Content, Footer } = Layout
const AppLayout = ({ children }) => {
  const history = useHistory()
  const { currentUser, signout } = useAuth()
  const [loading, setLoading] = useState(false)

  const logout = async () => {
    setLoading(true)
    try {
      await signout()
      history.push('/')
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const menu = (
    <Menu onClick={() => {}}>
      <Menu.Item
        key="1"
        icon={<UserOutlined />}
        onClick={logout}
        loading={loading}>
        Log out
      </Menu.Item>
    </Menu>
  )
  return (
    <Layout>
      <Sider style={{ height: '100vh' }}>
        <div
          style={{
            height: 32,
            backgroundColor: '#ffffff33',
            margin: 16,
          }}
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: '#fff' }}>
          <Row justify="end">
            <Col style={{ marginRight: 20 }}>
              <Dropdown overlay={menu}>
                <Button>
                  {currentUser.email} <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              backgroundColor: '#fff',
              height: '100%',
            }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Rokket Labs 2020</Footer>
      </Layout>
    </Layout>
  )
}

export default AppLayout
