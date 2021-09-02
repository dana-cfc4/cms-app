import Form from "@rjsf/antd"
import widgets from '../widgets/widgets'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ContentTypeDisplay = ({ contentType }) => {
  const params = useParams()
  const selectContentTypeItem = state => state.contentTypeItems
  const { contentTypeItems } = useSelector(selectContentTypeItem)
  const contentTypeItem = contentTypeItems.find(contentTypeItem => contentTypeItem.name === params.pageId)
  return <Form
    schema={contentType.schema}
    formData={contentTypeItem.formData}
    uiSchema={contentType.UISchema}
    widgets={widgets} />
}
export default ContentTypeDisplay