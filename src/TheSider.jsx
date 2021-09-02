import { useState } from 'react'
import { Form, Button, Checkbox } from 'antd'
import {setSettings} from './store/actions/settings'
import { useDispatch } from 'react-redux'

const TheSider = () => {
  const [displayTags, setDisplayTags] = useState(false)
  const dispatch = useDispatch()
  function onChangeSetttings(e) {
    setDisplayTags(e.target.checked)
  }
  const saveSettings = () => {
    dispatch(setSettings({display: displayTags}))
  }
  return (
    <Form
      name="basic"
      labelCol={{
        span: 12,
      }}
      wrapperCol={{
        span: 8,
      }}
      style={{marginTop: '25px'}}
    >
      <Form.Item
        name="addTags"
        valuePropName="checked"
        wrapperCol={{
          offset: 2,
          span: 14,
        }}
      >
        <Checkbox onChange={onChangeSetttings}>Add a tag</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 2,
          span: 2,
        }}
      >
        <Button onClick={saveSettings} type="primary">
          Save settings
        </Button>
      </Form.Item>
    </Form>
  );
}
export default TheSider



