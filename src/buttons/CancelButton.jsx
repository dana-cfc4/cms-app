import { Link } from "react-router-dom";
import {
  CloseCircleTwoTone,
}
  from '@ant-design/icons'

const CancelButton = (props) => {
  return <Link to={`${props.path}/cancel`}>
    <CloseCircleTwoTone twoToneColor="#eb2f96"  />
  </Link>
}
export default CancelButton