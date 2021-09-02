import React, { useState } from "react";
import { Input, Button, Progress, DatePicker, Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { siderIsDisplayed } from '../store/actions/sider'
import { Portal } from 'react-portal'
import EditButton from '../buttons/EditButton'
import CancelButton from '../buttons/CancelButton'
import {
  useLocation
} from "react-router-dom"
import DrawerForm from '../DrawerForm';
import Form from "@rjsf/antd";

const Trainers = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const selectIsToolbarReady = state => state.toolbar
  const { isToolbarReady } = useSelector(selectIsToolbarReady)
  const selectSettings = state => state.settings
  const { settings } = useSelector(selectSettings)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [tags, setTags] = useState('')
  const changeName = (event) => {
    setName(event.target.value)
  }
  const changeDescription = (event) => {
    setDescription(event.target.value)
  }
  const changeImage = (event) => {
    setImage(event.target.value)
  }
  const changeTags = (event) => {
    setTags(event.target.value)
  }
  const modifyForm = () => {
    dispatch(siderIsDisplayed())
  }
  const schema = {
    "title": "Create a new account",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "title": "Name"
      },
      "url": {
        "type": "string",
        "title": "Url"
      },
      "owner": {
        "type": "string",
        "title": "Owner",
        "enum": ["xiao", "mao"],
        "enumNames": ["Xiaoxiao Fu", "Maomao Zhou"]
      },
      "type": {
        "type": "string",
        "title": "Type",
        "enum": ["private", "public"],
        "enumNames": ["Private", "Public"]
      },
      "approver": {
        "type": "string",
        "title": "Approver",
        "enum": ["jack", "tom"],
        "enumNames": ["Jack Ma", "Tom Liu"]
      },
      "date": {
        "type": "string",
        "title": "DateTime"
      },
      "description": {
        "type": "string",
        "title": "Description"
      },
      "progress": {
        "type": "number",
        "title": "Progress"
      }
    }
  }
  const UISchema =
  {
    "name": {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:placeholder": "Please enter user name",
      "ui:column": "xs-6",
      "classNames": "ant-col ant-col-xs-24 ant-col-sm-20 ant-col-lg-20"
    },
    "url": {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:placeholder": "Please enter url",
      "classNames": "ant-col ant-col-xs-24 ant-col-sm-20 ant-col-lg-20",
      "ui:widget": "urlWidget"
    },
    "owner": {
      "ui:placeholder": "Please select an owner",
      "classNames": "ant-col ant-col-xs-24 ant-col-sm-20 ant-col-lg-20"
    },
    "type": {
      "ui:placeholder": "Please choose the type",
      "classNames": "ant-col ant-col-xs-24 ant-col-sm-20 ant-col-lg-20"
    },
    "approver": {
      "ui:placeholder": "Please choose the approver",
      "classNames": "ant-col ant-col-xs-24 ant-col-sm-20 ant-col-lg-20"
    },
    "description": {
      "ui:widget": "textarea",
      "ui:placeholder": "Please enter url description",
      "classNames": "ant-col ant-col-xs-24 ant-col-sm-20 ant-col-lg-20"
    },
    "date": {
      "ui:widget": "dateRangeWidget"
    },
    "progress": {
      "ui:widget": "progressWidget"
    }
  }
  const formData = {
    "firstName": "Chuck",
    "lastName": "Norris",
    "age": 75,
    "bio": "Roundhouse kicking asses since 1940",
    "password": "noneed",
    "progress": 30
  }
  const MyCustomProgressWidget = () => {
    return (
      <Progress percent={30} />)
  }
  const MyUrlInputWidget = () => {
    return (
      <Input
        style={{ width: '100%' }}
        addonBefore="http://"
        addonAfter=".com"
        placeholder="Please enter url"
      />
    )
  }
  const MyDateRangeWidget = () => {
    return (
      <DatePicker.RangePicker
        style={{ float: "left" }}
        getPopupContainer={trigger => trigger.parentElement}
      />
    )
  }
  const widgets = {
    progressWidget: MyCustomProgressWidget,
    urlWidget: MyUrlInputWidget,
    dateRangeWidget: MyDateRangeWidget
  };
  const ObjectFieldTemplate = (props) => {
    return (
      <>
        {props.title}
        <Row gutter={2}>
          {props.properties.map(element =>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }}>
              {element.content}
            </Col>
          )}
        </Row>
      </>
    )
  }

  return (
    <>
      <Form
        schema={schema}
        uiSchema={UISchema}
        formData={formData}
        widgets={widgets}
        ObjectFieldTemplate={ObjectFieldTemplate}>
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button type="primary">
            Submit
          </Button>
        </div>
      </Form>

      <DrawerForm />

      {isToolbarReady &&
        <Portal node={document.getElementById("operationSection")}>
          <EditButton path={location.pathname} />
          <br />
          <CancelButton path={location.pathname} />
        </Portal>}
    </>
  )
}
export default Trainers