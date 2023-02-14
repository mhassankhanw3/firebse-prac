import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { async } from "@firebase/util";

// const data = {
//   id: "abc-news",
//   name: "ABC News",
//   description:
//     "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
//   url: "https://abcnews.go.com",
//   category: "general",
//   language: "en",
//   country: "us",
// };
export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [readMore, setReadMore] = useState(false);
  // const dataHandle = async () => {
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(
          "https://newsapi.org/v2/top-headlines/sources?apiKey=6357dd427e084bedafb6d040cee2d9ca"
        )
        .then((response) => {
          setLoading(true);
          setNewsData(response.data.sources);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "err");
        });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }, []);

  // };
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="max-w-full w-full h-fit bg-gray-100 p-[10px] ">
      <h1 className="font-bold text-[48px] font-poppins mx-auto text-center mt-[40px] text-[#0284c7]">
        Latest News
      </h1>
      <div className=" max-w-[95%] mx-auto px-[10px] flex flex-row flex-wrap items-start justify-between">
        {loading &&
          newsData.map((i, index) => (
            <div
              className=" bg-white p-[20px] mt-[28px] shadow-md hover:shadow-xl rounded-[20px] col-span-1 w-[450px] "
              key={index.toLocaleString()}
            >
              <p className="text-gray-600 mt-[4px] font-poppins text-[22px] font-bold ">
                {readMore ? i.description.slice(0, 50) : i.description}
                <span
                  className="font-light text-blue-500 text-[18px] cursor-pointer "
                  onClick={toggleReadMore}
                >
                  {readMore ? "...read more" : "show less"}
                </span>
              </p>
              <div className="flex flex-row items-center justify-between my-[10px]">
                <h1 className="text-[16px] font-semibold text-gray-500 ">
                  {i.name}
                </h1>
                <div className="flex flex-row items-center justify-center">
                  <span className="text-gray-800">Country:</span>
                  <span className="ml-[4px] text-sky-600 font-medium">
                    {i.country.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* <div className="flex flex-row items-center justify-between mt-[6px]">
            <div className="flex flex-row items-center">
              <span className="text-[#6366f1] ">Category:</span>
              <span className="ml-[2px] text-red-600 font-medium">
                {data.category}
              </span>
            </div>
            <div className="flex flex-row items-center ">
              <span className="text-[#6366f1] ">Language:</span>
              <span className="ml-[2px] text-red-600 font-medium">
                {data.language}
              </span>
            </div>
          </div> */}
              <div className="mt-[20px]">
                <Link href={i.url} legacyBehavior>
                  <a
                    href={i.url ? i.url : "https://www.thenews.com.pk/"}
                    target="_blank"
                    className="bg-[#0369a1] flex flex-row items-center justify-center max-w-[130px] px-[22px] py-[8px] text-white rounded-[50px] "
                  >
                    Read News
                  </a>
                </Link>
              </div>
            </div>
          ))}
      </div>
      {/* <button className="bg-black text-white" onClick={dataHandle}>
          data
        </button> */}
    </div>
  );
}
