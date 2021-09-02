import { Link } from "react-router-dom";
import {
  FileAddTwoTone,
}
  from '@ant-design/icons'

const AddButton = (props) => {
  return <Link to={`${props.path}/add`}>
    <FileAddTwoTone />
  </Link>
}
export default AddButton;
