import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Divider,
  notification,
  Dropdown,
  Space,
  App,
  Spin,
} from "antd";
const { Title } = Typography;
import { IoIosLogOut } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { useRouter } from "next/router";
import { useMainContext } from "../context/Main";
import Link from "next/link";

export default function Navbar() {
  const { func } = useMainContext();
  const router = useRouter();
  const mainHandle = () => {
    router.push("/");
  };

  const logoutaccount = () => {
    func.logOut();
  };
  const items = [
    {
      label: <a onClick={mainHandle}>create account</a>,
      key: "0",
    },
    {
      label: <a onClick={logoutaccount}>Log out</a>,
      key: "1",
    },
  ];
  return (
    <nav className="bg-[#0369a1] py-[10px] px-[30px] flex flex-row items-center justify-between w-full max-w-full ">
      <h1 className="text-[white] font-medium text-[24px] ml-10">
        News Monkey
      </h1>
      <Dropdown
        placement="bottomLeft"
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a className="text-center">
          <div
            onClick={(e) => e.preventDefault()}
            className="bg-[white] text-[18px]  cursor-pointer w-[40px] h-[40px] rounded-[50px] text-center flex flex-row items-center justify-center hover:bg-[#e5e7eb] "
          >
            <SlOptionsVertical
              onClick={(e) => e.preventDefault()}
              className="fill-slate-700 font-light text-[18px] "
            />
          </div>
        </a>
      </Dropdown>
    </nav>
  );
}
