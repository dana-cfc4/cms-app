import React, { useState } from 'react'
import Form from "@rjsf/antd"
import widgets from '../widgets/widgets'
import { useDispatch } from 'react-redux'
import { addContentType } from '../store/actions/contentTypes'
import {Input, Button} from 'antd'

const ContentTypeCreator = () => {
  const [name, setName] = useState('')
  const changeName = (event) => {
    setName(event.target.value)
  }

  const widgetsList = Object.keys(widgets)
  const dispatch = useDispatch()
  const initialSchema = {
    "type": "array",
    items: {
      "type": 'string',
      "enum": widgetsList
    }
  };
  const uiSchema = {
    "ui:options": {
      orderable: false
    },
    "additionalProperties": {
      "ui:options": {
        label: false
      }
    }
  }
  const onSubmit = ({ formData }, e) => {
    const { ["contentType"]: contentType, ...newItems } = formData
    const keys = Object.keys(newItems)
    const properties = keys.reduce((acc, curr) => (acc[curr] = { "type": 'string' }, acc), {});
    const contentSchema = { type: "object", properties: properties }
    const uiSchema = keys.reduce((acc, curr) => (acc[curr] = { "ui:widget": newItems[curr] }, acc), {});
    const contentTypeToAdd = { name: name, schema: contentSchema, UISchema: uiSchema }
    console.log(contentTypeToAdd)
    dispatch(addContentType(contentTypeToAdd))
  }

  return (
    <>
    <div style={{marginTop: '25px', marginBottom: '20px'}}>
    <Input value={name} onChange={changeName} label="Name" placeholder="Please input name"></Input>
    </div>
    <Form schema={initialSchema} onSubmit={onSubmit} uiSchema={uiSchema}/>
    </>
  )
}
export default ContentTypeCreator;