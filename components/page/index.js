import { useMainContext } from "@/context/Main";
import { useRouter } from "next/router";
const router = useRouter();
export default function Page({ children }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
