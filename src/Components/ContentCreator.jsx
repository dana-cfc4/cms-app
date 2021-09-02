import { useState } from 'react'
import Form from "@rjsf/antd"
import widgets from '../widgets/widgets'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addContentTypeItem } from '../store/actions/contentTypeItems'
import { Input } from 'antd'

const ContentCreator = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({})
  const [title, setTitle] = useState('')
  const location = useLocation()
  const selectContentType = state => state.contentTypes
  const { contentTypes } = useSelector(selectContentType)
  const contentType = contentTypes.find(contentType => contentType.name === location.state.contentType)
  const onSubmit = ({ formData }, e) => {
    console.log(formData)
    setData(formData)
  }
  const submitPage = ({ formData }, e) => {
    const page = {
      name: title,
      contentType: location.state.contentType,
      formData: data
    }
    dispatch(addContentTypeItem(page))
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const uiSchema = {
    "ui:placeholder": "Enter text",
    "addable": true
  }
  
  return <div style={{marginTop: '25px'}}>
    <Input
      placeholder="Enter title"
      onChange={onChangeTitle}
      value={title} />
    <Form schema={contentType.schema} uiSchema = {uiSchema} onSubmit={onSubmit} />
    <h2>Preview</h2>
    <Form schema={contentType.schema} onSubmit={submitPage} formData={data} uiSchema={contentType.UISchema} widgets={widgets} />
  </div>
}
export default ContentCreator