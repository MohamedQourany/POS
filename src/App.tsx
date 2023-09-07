import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sider from "antd/es/layout/Sider";
import { Card, Image, Menu, Typography } from "antd";
import {
  ArrowsAltOutlined,
  BorderOuterOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sider
        className="sider"
        theme="light"
        style={{ height: "100vh", padding: 10 }}
      >
        <Typography.Text>Logo</Typography.Text>
        <Menu theme="light" style={{ height: "100vh", marginTop: 10 }}>
          <Card className="card">
            <Typography.Text>New Order</Typography.Text>
            <BorderOuterOutlined />
          </Card>
          <Card className="card">
            <Typography.Text>Dashboard</Typography.Text>
            <BorderOuterOutlined />
          </Card>
          <Card className="card">
            <Typography.Text>Settings</Typography.Text>
            <BorderOuterOutlined />
          </Card>
          <Card className="card">
            <Typography.Text>Logout</Typography.Text>
            <BorderOuterOutlined />
          </Card>
        </Menu>
      </Sider>
    </>
  );
}

export default App;
