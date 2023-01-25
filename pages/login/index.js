import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useMainContext } from "../../context/Main";
import { useState } from "react";
const { Title } = Typography;
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { func } = useMainContext();
  const submitHandle = () => {
    func.signIn(email, password);
  };
  return (
    <div
      style={{
        margin: "-8px ",
        backgroundColor: "#f3f4f6",
        height: "100vh",
        // width: "100%",
        padding: "40px",
      }}
    >
      <Form
        // name="basic"
        // wrapperCol={{
        //   span: 10,
        // }}
        style={{
          maxWidth: 600,
          margin: "100px auto 50px auto",
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "14px",
          color: "white",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandle}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title
          style={{
            color: "#075985",
            textAlign: "center",
            fontFamily: "inherit",
          }}
        >
          Welcome Back
        </Title>
        <Title
          level={5}
          style={{
            margin: "-10px auto 10px auto",
            width: "100%",
            textAlign: "center",
            color: "#6b7280",
            fontWeight: "400",
          }}
        >
          Enter your credentials to access your account
        </Title>
        <Form.Item
          // label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            style={{
              width: "400px",
              margin: "30px auto 0px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            placeholder=" Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          // label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            style={{
              width: "400px",
              margin: "0px auto 0px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          style={{
            maxWidth: "130px",
            margin: "auto",
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              padding: "20px 24px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              placeItems: "center",
              margin: "10px auto 0px auto",
              textAlign: "center",
              width: "400px",
            }}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
