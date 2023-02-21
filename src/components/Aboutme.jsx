import React, { useContext } from "react";
import image from "../assets/image/home.svg";
import { DarkModeContext } from "../context/DarkModeProvider";
import { AboutMeData } from "../utils/Data";

const Aboutme = () => {
  const { es, en } = AboutMeData;
  const { lenguage } = useContext(DarkModeContext);
  return (
    <div
      className="flex bg-[#F6F8FF] min-h-screen items-center justify-center transition-all duration-500 ease-in dark:bg-[#141D2F]"
      id="aboutme"
    >
      <div className="container mx-10 flex flex-col  rounded-3xl bg-[#FEFEFE] shadow-lg dark:bg-[#1E2A47] dark:shadow-lg dark:shadow-blue-500/20">
        <div className="flex min-w-full gap-2 py-3 pl-4">
          <span className="top-0 left-0 flex h-3 w-3 rounded-full bg-red-500"></span>
          <span className="top-0 left-0 flex h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="top-0 left-0 flex h-3 w-3 rounded-full bg-green-500"></span>
        </div>

        <div className="items-center justify-center flex flex-wrap lg:flex-nowrap px-10 py-5 md:flex md:flex-col md:items-center md:justify-center md:gap-4 lg:flex-row">
          <div className="mt-8 flex h-36 w-52 items-center justify-center md:h-full md:w-1/2">
            <img
              className="object-cover transition-all duration-500 "
              src={image}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-center text-3xl font-bold text-[#697C9A] dark:text-gray-200">
              {lenguage ? en.title : es.title}
            </h1>
            <p className="mt-8 text-justify text-[#697C9A] dark:text-gray-300">
              {lenguage ? en.p1 : es.p1}
            </p>
            <p className="mt-8 text-justify text-[#697C9A] dark:text-gray-300">
              {lenguage ? en.p2 : es.p2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
