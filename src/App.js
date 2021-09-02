// import './App.css';
// import React from 'react'
// import {
//   BrowserRouter as Router,
// } from "react-router-dom"
// import Toolbar from './Toolbar'
// import TheRouter from './TheRouter';
// import TheHeader from './TheHeader'
// import { Layout } from 'antd';
// import TheSider from './TheSider';
// import { useSelector } from 'react-redux'
// const { Header, Content, Sider } = Layout;

// function App() {
//   const selectIsSiderDisplayed = state => state.sider
//   const { isSiderDisplayed } = useSelector(selectIsSiderDisplayed)

//   return (
//     <div className="App">
//       <Router>
//         <Layout>
//           <Header className="header">
//             <TheHeader />
//           </Header>
//           <Layout>
//             <Sider>
//               <Toolbar />
//             </Sider>
//             <Content>
//               <TheRouter />
//             </Content>
//             {/* <Sider theme="light" trigger={null} collapsed={isSiderDisplayed} collapsedWidth={0}>
//               <TheSider />
//             </Sider> */}
//           </Layout>
//         </Layout>
//       </Router>
//     </div>
//   );
// }

// export default App;




import React from "react";
import { Layout } from "antd";
import TheHeader from './TheHeader'
import "./App.css";
import {
  BrowserRouter as Router,
} from "react-router-dom"
import SideBar from "./SideBar";
import TheRouter from "./TheRouter"

function App() {
  return (
    <div className="App">
      <Router>
      <TheHeader />
      <Layout>
        <SideBar />
        <Layout.Content className="content">
        <TheRouter />
        </Layout.Content>
      </Layout>
      </Router>
    </div>
  );
}
export default App;