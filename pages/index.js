import { Inter } from "@next/font/google";
import { useMainContext } from "@/context/Main";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import Signup from "./signup";

const { Title } = Typography;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Signup />
    </>
  );
}
