import {
  useParams
} from "react-router-dom";
import { useSelector } from 'react-redux'
import { List } from 'antd';

const ContentType = () => {
  const params = useParams()
  const selectContentTypeItem = state => state.contentTypeItems
  const { contentTypeItems } = useSelector(selectContentTypeItem)
  const items= contentTypeItems
  .filter(contentTypeItem =>
     contentTypeItem.contentType === params.contentTypeId)
  return <>
    <h2>Page</h2>
    <List
        itemLayout="vertical"
        dataSource={items}
        renderItem={item => (
          <List.Item>
              <List.Item.Meta
                title={item.name}
              />
          </List.Item>
        )}
      />
  </>
}
export default ContentType