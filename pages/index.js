import React, { useState } from "react";
import {
  Button,
  Drawer,
  Input,
  Form,
  Typography,
  Space,
  Divider,
  Menu,
} from "antd";
import { GoogleOutlined, CheckOutlined, MenuOutlined } from "@ant-design/icons";
import { GoogleLogin } from "react-google-login";

const Home = (props) => {
  const [visible, setVisible] = useState(false);
  const { Text } = Typography;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <>
      <Menu mode="horizontal" style={{ padding: "0 20px" }}>
        <Space style={{ width: "100vw", justifyContent: "space-between" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/902/902691.png"
            style={{ maxWidth: "25px" }}
          />
          <MenuOutlined />
        </Space>
      </Menu>
      <Space
        direction="vertical"
        style={{
          height: "100vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
        size={"small"}
      >
        <Text style={{ fontSize: "1.1em", fontWeight: "700" }}>
          Create your account
        </Text>
        <Text
          style={{ fontSize: "0.8em", textAlign: "center", lineHeight: "0" }}
        >
          Please Enter your details.
        </Text>
        <Space direction="vertical" style={{ marginTop: "50px" }}>
          <Form>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Email is required!",
                },
              ]}
              style={{ marginBottom: "10px" }}
            >
              <Input placeholder="Enter your email" style={{ width: "90vw" }} />
            </Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              style={{
                width: "90vw",
                backgroundColor: "#0D0D0D",
                color: "#B3B3B3",
                borderRadius: "5px",
              }}
            >
              Submit
            </Button>
          </Form>
        </Space>
        <Divider plain>OR</Divider>
        <Space direction="vertical">
          <GoogleLogin
            clientId="754838923196-fd6oi74bc9086jdss6p7h7tts8vefr0l.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button onClick={renderProps.onClick} style={{ width: "90vw" }}>
                <GoogleOutlined />
                Continue with Google
              </Button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <GoogleLogin
            clientId="754838923196-fd6oi74bc9086jdss6p7h7tts8vefr0l.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button onClick={renderProps.onClick} style={{ width: "90vw" }}>
                <GoogleOutlined />
                Continue with Google
              </Button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <GoogleLogin
            clientId="754838923196-fd6oi74bc9086jdss6p7h7tts8vefr0l.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button onClick={renderProps.onClick} style={{ width: "90vw" }}>
                <GoogleOutlined />
                Continue with Google
              </Button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Space>
        <Space>
          <Text style={{ textAlign: "center" }}>
            Already have an account? <strong>Sign up</strong>
          </Text>
        </Space>
      </Space>
      <Space
        style={{
          width: "100vw",
          padding: "10px",
          justifyContent: "center",
          fontSize: "0.8em",
          color: "#5F6061",
        }}
      >
        <Text>
          &copy; {new Date().getFullYear()} Copyright. All Right Reserved.
        </Text>
      </Space>
    </>
  );
};

export default Home;
