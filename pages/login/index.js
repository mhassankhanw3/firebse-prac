import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Divider,
  notification,
} from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
// import { NotificationPlacement } from "antd/es/notification/interface";
import { useRouter } from "next/router";
import { Spin } from "antd";
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
  // const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const { func, error, success, setSuccess, loading, setLoading } =
    useMainContext();
  const submitHandle = (e) => {
    // setLoading(false);
    func.signIn(email, password);
    // setLoading(false);
    // setLoading(true);
  };

  const router = useRouter();
  return (
    <>
      <div className="h-screen w-[100%] bg-[#f3f4f6] p-[10px] ">
        <Form
          className="max-w-[600px] bg-white rounded-[14px] mt-[170px] mb-[50px] mx-auto py-[35px] px-[50px] text-white shadow-lg "
          initialValues={{
            remember: true,
          }}
          onFinish={submitHandle}
          onFinishFailed={onFinishFailed}
        >
          <h1 className="text-[#075985] text-center text-[32px] font-semibold ">
            Welcome Back
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

          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            style={{
              maxWidth: "130px",
              margin: "auto",
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
          <Form.Item className="text-center">
            <Button
              // onClick={(e) => setLoading(false)}
              className="bg-blue-600 py-[20px] w-[100%] text-[16px] flex items-center justify-center mt-[10px] mx-auto"
              type="primary"
              htmlType="submit"
            >
              Sign In
            </Button>
          </Form.Item>
          <div>
            {loading ? (
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Spin size="large" />
              </div>
            ) : (
              ""
            )}
            <div>{error ? <FailedAlert msg={error} /> : ""}</div>
          </div>

          {/* <SuccessAlert /> */}
        </Form>
      </div>
    </>
  );
}
// https://github.com/mhassankhanw3/firebse-prac.git
