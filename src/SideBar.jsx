import React from "react";
import { Layout } from "antd";
import "./SideBar.css"
import Toolbar from "./Toolbar";

const SideBar = ({ menu }) => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      <Toolbar/>
   </Layout.Sider>
   );
};
export default SideBar;