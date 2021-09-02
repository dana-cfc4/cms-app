import { useEffect } from 'react'
import { Menu } from 'antd'
import {
  UserOutlined,
  UsergroupDeleteOutlined,
  LineChartOutlined,
  CalendarOutlined,
  SettingOutlined
}
  from '@ant-design/icons'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { toolbarIsReady } from './store/actions/toolbar'

const Toolbar = () => {
  const dispatch = useDispatch()
  useEffect(
    () => dispatch(toolbarIsReady()),
    [],
  );

  return (
    <Menu
      mode="inline"
      style={{
        height: '100%',
        textAlign: 'center'
      }}
    >
      <Menu.Item>
        <Link to='/templates'>
          <SettingOutlined />
        </Link>
      </Menu.Item>
      <Menu.Item key="7">
        <UserOutlined />
      </Menu.Item>
    </Menu>
  )
}
export default Toolbar