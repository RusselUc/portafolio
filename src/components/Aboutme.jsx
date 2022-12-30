import React, { useContext } from "react";
import image from "../assets/image/home.svg";
import { DarkModeContext } from "../context/DarkModeProvider";
import { AboutMeData } from "../utils/Data";

const Aboutme = () => {
  const { es, en } = AboutMeData;
  const { lenguage } = useContext(DarkModeContext);
  return (
    <div
      className="flex min-h-screen items-center justify-center transition-all duration-500 ease-in dark:bg-gray-800"
      id="aboutme"
    >
      <div
        className="container mx-10 flex flex-col items-center justify-center rounded-3xl bg-gray-900 p-10 dark:bg-gray-300
            md:flex md:flex-col md:items-center md:justify-center md:gap-4 lg:flex-row"
      >
        <div className=" mt-8 flex h-36 w-52 items-center justify-center md:h-full md:w-1/2">
          <img
            className="object-cover transition-all duration-500 "
            src={image}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-3xl font-bold text-gray-300 dark:text-black">
            {lenguage ? en.title : es.title}
          </h1>
          <p className="mt-8 text-justify text-gray-300 dark:text-black">
            {lenguage ? en.p1 : es.p1}
          </p>
          <p className="mt-8 text-justify text-gray-300 dark:text-black">
            {lenguage ? en.p2 : es.p2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
