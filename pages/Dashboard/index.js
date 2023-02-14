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
import { useMainContext } from "../../context/Main";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import InfoSuccess from "@/components/InfoSuccess";

export default function Dashboard() {
  return (
    <>
      {/* {loading ? <Spin /> : ""} */}
      {/* {success ? ( */}
      <Navbar />
      <Hero />

      {/* ) : (
        <div className="h-screen flex flex-col items-center justify-center bg-[#27272a] text-slate-100 ">
          <p className="text-center font-semibold text-[20px]">
            404 | page Not Found!
          </p>
          <Link href="/login" legacyBehavior>
            <a
              href=""
              className="border border-slate-400 hover:border-white transition-all max-w-full mt-10 cursor-pointer rounded-[4px] py-4 px-8"
            >
              Go back
            </a>
          </Link>
        </div>
      )} */}
    </>
  );
}
