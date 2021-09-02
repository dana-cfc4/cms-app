import { Image, Input } from 'antd'
import React, { useState } from 'react'
const ImageWidget= (props) => {
  const [imageSource, setImageSource] = useState("")
  const changeImageSource = (event) => {
    setImageSource(event.target.value)
    props.onChange(event.target.value)
  }
  return <>
    <Image
       width={200}
       height={200}
       src={imageSource}
    />
    <Input value={props.value} onChange={changeImageSource} placeholder="Enter image source"/>
  </>
}
export default ImageWidget