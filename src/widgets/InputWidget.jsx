import { Input } from 'antd'

const InputWidget= (props) => {
  const onChangeText = (event) => {
    props.onChange(event.target.value)
  }
  return <>
  <Input 
  style={{width:'50%'}}
  readOnly
  bordered={false}
  placeholder="Your text" 
  onChange={onChangeText} 
  value={props.value} />
</>
}
export default InputWidget