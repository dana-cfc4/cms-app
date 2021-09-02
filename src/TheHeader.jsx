import { useState } from 'react';
import { Menu, Button, Drawer } from 'antd'
import { Link } from "react-router-dom";
import { Input } from 'antd';
import {
  MenuOutlined, PlusCircleOutlined, PlusOutlined, MoreOutlined
}
  from '@ant-design/icons'
import { useSelector } from 'react-redux';
import Toolbar from './Toolbar'

const { Search } = Input
const { SubMenu } = Menu

const TheHeader = ({ menu }) => {
  const [searchedValue, setSearchedValue] = useState('')
  const onSearch = (value) => {
    setSearchedValue(value)
  }
  const [visible, setVisible] = useState(false);
  const selectContentTypeItem = state => state.contentTypeItems
  const { contentTypeItems } = useSelector(selectContentTypeItem)
console.log(contentTypeItems)
  const selectContentTypes = state => state.contentTypes
  const { contentTypes } = useSelector(selectContentTypes)

  return (
    <>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} triggerSubMenuAction="click">
        {contentTypeItems.map(contentTypeItem =>
          <Menu.Item key={contentTypeItem.id}>
            <Link
              to={`/page/${contentTypeItem.name}`}>
              {contentTypeItem.name}
            </Link>
          </Menu.Item>
        )}
        <SubMenu key="contentTypes" icon={<PlusCircleOutlined />}>
          {contentTypes.map(contentType =>
            <Menu.Item key={contentType.id}>
              <Link
                to={{
                  pathname: "/page/new",
                  state: { contentType: contentType.name }
                }}>
                {contentType.name}
              </Link>
            </Menu.Item>
          )}
          <Menu.Item>
            <Link to='/templates/new'>
              <PlusOutlined /> Add new type
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </Menu.Item>
        <Menu.Item>
          <Button
            className="menu"
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setVisible(true)}
          />
          <Drawer
            placement="left"
            onClick={() => setVisible(false)}
            onClose={() => setVisible(false)}
            visible={visible}
          >
            <Toolbar />
          </Drawer>
        </Menu.Item>
      </Menu>
    </>
  )
}
export default TheHeader