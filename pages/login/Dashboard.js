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
} from "antd";
const { Title } = Typography;
import { IoIosLogOut } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { useRouter } from "next/router";
import { useMainContext } from "../../context/Main";
import InfoSuccess from "@/components/InfoSuccess";

export default function Dashboard() {
  const { func, loading, setLoading, logout, setLogout } = useMainContext();
  const router = useRouter();
  const mainHandle = () => {
    router.push("/");
  };

  const logoutaccount = () => {
    func.logOut();
    setLoading(true);
    // router.push
  };

  // const showMessage = () => {

  // };
  const items = [
    {
      label: <a onClick={mainHandle}>create account</a>,
      key: "0",
    },
    {
      label: <a onClick={logoutaccount}>Log out</a>,
      key: "1",
    },
    // {
    //   type: "divider",
    // },
    // {
    //   label: "3rd menu item",
    //   key: "3",
    // },
  ];

  return (
    <>
      <nav className="bg-[#1f2937] py-[10px] px-[30px] flex flex-row items-center justify-between w-full max-w-full ">
        <h1 className="text-[white] font-medium text-[24px]">Dashboard</h1>

        <Dropdown
          placement="bottomLeft"
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <a className="text-center">
            {/* <Space> */}
            <div
              onClick={(e) => e.preventDefault()}
              className="bg-[white] text-[18px]  cursor-pointer w-[40px] h-[40px] rounded-[50px] text-center flex flex-row items-center justify-center hover:bg-[#e5e7eb] "
            >
              <SlOptionsVertical
                onClick={(e) => e.preventDefault()}
                className="fill-slate-700 font-light text-[18px] "
              />
            </div>
            {/* </Space> */}
          </a>
        </Dropdown>
        {/* <IoIosLogOut /> */}
        {/* </div> */}
      </nav>
    </>
  );
}
