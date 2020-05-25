import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

const Sidebar = () => {
  const location = useLocation()
  return (
    <Sider style={{ height: '100vh' }}>
      <div
        style={{
          height: 32,
          backgroundColor: '#ffffff33',
          margin: 16,
        }}
      />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={location.pathname}>
        <Menu.Item key="/home" icon={<UserOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="/rokkets" icon={<VideoCameraOutlined />}>
          <Link to="/rokkets">Rokkets</Link>
        </Menu.Item>
        <Menu.Item key="/labs" icon={<UploadOutlined />}>
          <Link to="/labs">Labs</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
