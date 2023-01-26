import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Divider,
  notification,
} from "antd";
const { Title } = Typography;
import { IoIosLogOut } from "react-icons/io";
export default function Dashboard() {
  return (
    <>
      <nav className="bg-[#1f2937] py-[10px] px-[30px] flex flex-row items-center justify-between w-full max-w-full ">
        <h1 className="text-[white] font-medium text-[24px]">Dashboard</h1>
        <div className="bg-[white] text-[18px] cursor-pointer w-[40px] h-[40px] rounded-[50px] text-center flex flex-row items-center justify-center hover:bg-[#f3f4f6] ">
          <IoIosLogOut />
        </div>
      </nav>
    </>
  );
}
