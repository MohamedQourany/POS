import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sider from "antd/es/layout/Sider";
import { Button, Card, Image, Menu, Typography } from "antd";
import {
  ArrowsAltOutlined,
  BorderOuterOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Sider
        className="sider"
        theme="light"
        style={{ height: "100vh", padding: 10 }}
      >
        <Typography.Text>Logo</Typography.Text>
        <Menu theme="light" style={{ height: "100vh", marginTop: 10 }}>
          <Card className="card">
            <Button>
              <Link to={"/NewOrder"}>New Order</Link>
            </Button>
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
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
