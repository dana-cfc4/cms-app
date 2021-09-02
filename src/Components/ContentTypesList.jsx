import { useSelector } from 'react-redux'
import { List } from 'antd';
import { Link } from 'react-router-dom'
import {
  PlusCircleOutlined
}
  from '@ant-design/icons'

const ContentTypesList = () => {
  const selectContentType = state => state.contentTypes
  const { contentTypes } = useSelector(selectContentType)

  return (
    <>
      <h2>Templates</h2>
      <Link to='/templates/new'>
        <PlusCircleOutlined />
      </Link>
      <List
        itemLayout="vertical"
        dataSource={contentTypes}
        renderItem={item => (
          <List.Item>
            <Link to={`/teplates/${item.name}`}>
              <List.Item.Meta
                title={item.name}
              />
            </Link>
          </List.Item>
        )}
      />
    </>
  )
}
export default ContentTypesList;