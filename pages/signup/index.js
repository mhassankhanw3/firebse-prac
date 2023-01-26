import { Inter } from "@next/font/google";
import { useMainContext } from "../../context/Main";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useState } from "react";
import Link from "next/link";
// import SuccessAlert from "@/components/SuccessAlert";
const { Title } = Typography;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const inter = Inter({ subsets: ["latin"] });

export default function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { func, loading, setLoading } = useMainContext();
  const submitHandle = () => {
    func.newUser(email, password);
    setLoading(true);
  };
  return (
    <>
      <Title>Sign Up</Title>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandle}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* <SuccessAlert /> */}
    </>
  );
}
