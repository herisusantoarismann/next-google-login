import React, { useState, useEffect } from "react";
import {
  Button,
  Drawer,
  Input,
  Form,
  Typography,
  Space,
  Divider,
  Menu,
  Grid,
  Row,
  Col,
} from "antd";
import {
  GoogleOutlined,
  MenuOutlined,
  TwitterOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import { useGoogleLogin } from "@react-oauth/google";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState("xs");
  const { Text } = Typography;
  const { useBreakpoint } = Grid;

  const style = {
    xs: {
      button: "90vw",
    },
    md: {
      button: "24rem",
    },
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  // const screens = useBreakpoint();
  // let sc = function functionOne() {
  //   return new Promise((resolve, reject) => {
  //     let value = Object.entries(screens)
  //       .filter((item) => item[1])
  //       .slice(-1)[0];
  //     if (value) {
  //       resolve(value);
  //     } else {
  //       reject("Rejected");
  //     }
  //   });
  // };
  // sc().then((w) => setWidth(w[0]));

  return (
    <>
      <Menu mode="horizontal" style={{ padding: "0 20px" }}>
        <Space style={{ width: "100vw", justifyContent: "space-between" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/902/902691.png"
            style={{ maxWidth: "25px" }}
          />
          <MenuOutlined onClick={showDrawer} />
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            visible={visible}
            width={"50%"}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
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
        <img
          src="https://cdn-icons-png.flaticon.com/512/1239/1239719.png"
          style={{ maxWidth: "50px" }}
        />
        <Text style={{ fontSize: "1.1em", fontWeight: "700" }}>
          Create your account
        </Text>
        <Text
          style={{ fontSize: "0.8em", textAlign: "center", lineHeight: "0" }}
        >
          Please Enter your details.
        </Text>
        <Space
          direction="vertical"
          style={{
            marginTop: "50px",
            width: "100vw",
          }}
        >
          <Form
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Email is required!",
                },
              ]}
              style={{
                marginBottom: "10px",
              }}
            >
              <Row justify="center">
                <Col xs={22} sm={10}>
                  <Input placeholder="Enter your email" />
                </Col>
              </Row>
            </Form.Item>
            <Row justify="center">
              <Col xs={22} sm={10}>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{
                    backgroundColor: "#0D0D0D",
                    color: "#B3B3B3",
                    borderRadius: "5px",
                  }}
                  block
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Space>
        <Divider plain>OR</Divider>
        <Space direction="vertical" style={{ width: "100vw" }}>
          <Row justify="center">
            <Col xs={22} sm={10}>
              <Button onClick={() => login()} block>
                <GoogleOutlined />
                Continue with Google
              </Button>
            </Col>
          </Row>
          {/* <GoogleLogin
            clientId="754838923196-fd6oi74bc9086jdss6p7h7tts8vefr0l.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button onClick={renderProps.onClick} style={{ width: "90vw" }}>
                <FacebookFilled />
                Continue with Facebook
              </Button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <GoogleLogin
            clientId="1053448259398-hn6a5jr3jocrv9gil6s3r989h9a0r2i5.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button onClick={renderProps.onClick} style={{ width: "90vw" }}>
                <TwitterOutlined />
                Continue with Twitter
              </Button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
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
          marginTop: "30px",
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
