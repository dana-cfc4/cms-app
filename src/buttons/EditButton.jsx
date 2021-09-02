import { Link } from "react-router-dom";
import {
  SaveTwoTone,
}
  from '@ant-design/icons'

const EditButton = (props) => {
  return <Link to={`${props.path}/edit`}>
    <SaveTwoTone twoToneColor="#52c41a"/>
  </Link>
}
export default EditButton;