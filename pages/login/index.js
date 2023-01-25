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
import {
  BorderBottomOutlined,
  BorderTopOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { useMainContext } from "../../context/Main";
import { useState } from "react";
import SuccessAlert from "@/components/SuccessAlert";
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
  const [loadings, setLoadings] = useState([]);
  const { func, error, success } = useMainContext();
  const submitHandle = (e) => {
    // e.preventDefault();
    func.signIn(email, password);
  };

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 500);
  };
  return (
    <>
      <div>{error ? "try Again" : ""}</div>

      {/* <SuccessAlert /> */}
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
          // autoComplete="on"
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
              loading={loadings[1]}
              onClick={() => enterLoading(1)}
              // onClick={submitHandle}
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
            {/* <Button
              type="primary"
              // icon={<PoweroffOutlined />}
              loading={loadings[1]}
              onClick={() => enterLoading(1)}
            >
              Click me!
            </Button> */}
            <div>{success ? <SuccessAlert /> : ""}</div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
