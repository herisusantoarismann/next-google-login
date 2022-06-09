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
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import FacebookLogin from "react-facebook-login";
import TwitterLogin from "react-twitter-login";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const { Text } = Typography;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const responseFacebook = (response) => {
    console.log(response);
  };

  const authHandler = (err, data) => {
    console.log(err, data);
  };

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
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
        size={"small"}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1239/1239719.png"
          style={{ maxWidth: "50px", paddingTop: "50px" }}
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
            paddingTop: "50px",
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
                <Col xs={22} sm={10} xl={6}>
                  <Input placeholder="Enter your email" />
                </Col>
              </Row>
            </Form.Item>
            <Row justify="center">
              <Col xs={22} sm={10} xl={6}>
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
            <Col xs={22} sm={10} xl={6}>
              <Button onClick={() => login()} block>
                <GoogleOutlined />
                Continue with Google
              </Button>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={22} sm={10} xl={6}>
              <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
              />
              {/* <FacebookLogin
                appId="744677026984520"
                autoLoad
                fields="name,email,picture"
                render={() => (
                  <Button onClick={() => responseFacebook()} block>
                    <FacebookFilled />
                    Continue with Facebook
                  </Button>
                )}
              /> */}
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={22} sm={10} xl={6}>
              <TwitterLogin
                authCallback={authHandler}
                consumerKey={CONSUMER_KEY}
                consumerSecret={CONSUMER_SECRET}
              />
            </Col>
          </Row>
        </Space>
        <Space>
          <Text style={{ textAlign: "center" }}>
            Already have an account? <strong>Sign up</strong>
          </Text>
        </Space>
      </Space>
      <Space
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          width: "100vw",
          padding: "30px 10px",
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
