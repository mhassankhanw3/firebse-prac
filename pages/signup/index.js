import { Inter } from "@next/font/google";
import { useMainContext } from "../../context/Main";
import { Button, Checkbox, Form, Input, Typography, Spin } from "antd";
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
  };
  return (
    <>
      <div className="bg-gray-200  w-[100%] h-screen flex flex-col items-center justify-center ">
        <Form
          className="border mt-[10px] bg-white border-none text-white rounded-[14px] shadow-lg px-[40px] pt-[35px] pb-[4px] w-[550px] mx-auto"
          initialValues={{
            remember: true,
          }}
          onFinish={submitHandle}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1 className="text-[#075985] text-center text-[32px] font-semibold">
            Sign Up
          </h1>
          <p className="mx-auto mb-[10px] w-[100%] text-center text-[#6b7280] font-medium ">
            Create your account
          </p>
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
          <Form.Item className="flex flex-row justify-center items-center">
            <span className="text-[#71717a]">Already a user?</span>
            <Link href="/login" legacyBehavior>
              <a
                className="ml-2 underline-offset-1 underline text-[#2563eb] hover:text-[#60a5fa] "
                href="/login"
              >
                Sign in Here
              </a>
            </Link>
          </Form.Item>
          <div>
            {loading ? (
              <div
                className="pb-[20px]"
                style={{
                  textAlign: "center",
                }}
              >
                <Spin size="" />
              </div>
            ) : (
              ""
            )}
          </div>
        </Form>
      </div>
      {/* <SuccessAlert /> */}
    </>
  );
}
