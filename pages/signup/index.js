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
      <div className="bg-gray-200  w-[100%] h-screen py-[10px] px-[20px] ">
        <h1 className="text-center mt-[50px] text-gray-700  font-bold text-[40px] ">
          Sign Up
        </h1>
        <Form
          className="border mt-[10px] bg-white border-none text-white rounded-[14px]  shadow-lg px-[40px] pt-[45px] pb-[20px] w-[550px] mx-auto "
          initialValues={{
            remember: true,
          }}
          onFinish={submitHandle}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              placeholder="Enter your user name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            className="text-center"
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item className="text-center">
            <Button
              className="bg-blue-600 py-[18px] flex items-center justify-center w-[100%] text-white mx-auto"
              htmlType="submit"
              type="primary"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* <SuccessAlert /> */}
    </>
  );
}
