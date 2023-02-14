import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Divider,
  notification,
  Spin,
} from "antd";
import Link from "next/link";
import { PoweroffOutlined } from "@ant-design/icons";
// import { NotificationPlacement } from "antd/es/notification/interface";
import { useRouter } from "next/router";
import { useMainContext } from "../../context/Main";
import { useState } from "react";
import SuccessAlert from "@/components/SuccessAlert";
import FailedAlert from "@/components/FailedAlert";
const { Title } = Typography;
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const onFinish = (values) => {
  console.log("Success:", values);
};
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const { func, error, success, loading } = useMainContext();
  const submitHandle = (e) => {
    func.signIn(email, password);
  };

  const router = useRouter();
  return (
    <>
      <div className="h-screen w-full bg-[#f3f4f6] flex flex-col justify-center items-center">
        <Form
          className=" w-[550px] bg-white rounded-[14px] my-auto mx-auto px-[50px] pt-[45px] pb-[4px] text-white shadow-lg "
          initialValues={{
            remember: true,
          }}
          onFinish={submitHandle}
          onFinishFailed={onFinishFailed}
        >
          <h1 className="text-[#075985] text-center text-[32px] font-semibold ">
            Login
          </h1>
          <p className="mx-auto mb-[40px] w-[100%] text-center text-[#6b7280] font-medium ">
            Enter your credentials to access your account
          </p>
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item className="text-center">
            <Button
              // onClick={(e) => setLoading(false)}
              className="bg-blue-600 py-[20px] w-[100%] text-[16px] flex items-center justify-center mt-[10px] mx-auto"
              type="primary"
              htmlType="submit"
            >
              Sign In
            </Button>
            <Form.Item className="mt-[20px] flex flex-row justify-center items-center">
              <span className="text-[#71717a]">do not have an account?</span>
              <Link href="/signup" legacyBehavior>
                <a
                  className="ml-2 underline-offset-1 underline text-[#2563eb] hover:text-[#60a5fa] "
                  href="/login"
                >
                  Sign up Here
                </a>
              </Link>
            </Form.Item>
          </Form.Item>
          <div>
            {loading ? (
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Spin />
              </div>
            ) : (
              ""
            )}
            <div>{error ? <FailedAlert msg={error} /> : ""}</div>
            <div>{success ? "" : ""}</div>
          </div>
        </Form>
      </div>
    </>
  );
}
// https://github.com/mhassankhanw3/firebse-prac.git
