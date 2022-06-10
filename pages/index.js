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
  Row,
  Col,
  Image,
} from "antd";
import { GoogleOutlined, MenuOutlined } from "@ant-design/icons";
import { useGoogleLogin } from "@react-oauth/google";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [profile, setProfile] = useState({});
  const { Text } = Typography;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const getGoogleData = (token) => {
    fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setGoogleLogin(res))
      .catch((err) => console.log(err));
  };

  const setGoogleLogin = (user) => {
    setIsLogin(true);
    setProfile({
      name: user.name,
      email: user.email,
      picture: user.picture,
    });
    setVisible(true);
  };

  const setGoogleLogout = () => {
    setIsLogin(false);
    setProfile({});
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getGoogleData(tokenResponse.access_token);
    },
  });

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
            title={`${isLogin ? "Profile" : "Please Login!"}`}
            placement="right"
            onClose={onClose}
            visible={visible}
            width={"50%"}
          >
            {isLogin ? (
              <>
                <Row justify="center">
                  <Col>
                    <Image
                      width={50}
                      src={profile.picture}
                      fallback="data:image/png;base64,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"
                      style={{
                        borderRadius: "50%",
                        border: "1px solid black",
                      }}
                    />
                  </Col>
                </Row>
                <Row justify="center">
                  <Col>
                    <Text>{profile.name}</Text>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col>
                    <Text>{profile.email}</Text>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col>
                    <Button
                      type="primary"
                      danger
                      onClick={() => setGoogleLogout()}
                    >
                      Logout
                    </Button>
                  </Col>
                </Row>
              </>
            ) : (
              <Text>Please Login!</Text>
            )}
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
            <Col xs={22} sm={10} xl={6}></Col>
          </Row>
          <Row justify="center">
            <Col xs={22} sm={10} xl={6}></Col>
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
