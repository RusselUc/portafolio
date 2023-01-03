import React, { useContext } from "react";
import IconFirestore from "../assets/Icons/IconFirestore";
import IconJava from "../assets/Icons/IconJava";
import IconPython from "../assets/Icons/IconPython";
import IconReactColor from "../assets/Icons/IconReactColor";
import IconTailwindColor from "../assets/Icons/IconTailwindColor";
import IconGit from "../assets/Icons/IconGit";
import IconJavaScript from "../assets/Icons/IconJavaScript";
import IconHtml from "../assets/Icons/IconHtml";
import IconBoostrap from "../assets/Icons/IconBoostrap";
import { DarkModeContext } from "../context/DarkModeProvider";
import IconMySQL from "../assets/Icons/IconMySQL";

const Skills = () => {
  const { lenguage } = useContext(DarkModeContext);
  return (
    <div className="flex h-full items-center justify-center transition-all duration-500 ease-in dark:bg-gray-800">
      <div className="container mx-10 flex flex-col items-center justify-center rounded-3xl bg-gray-200 transition-all duration-500 ease-in dark:bg-gray-300">
        <div className="flex min-w-full gap-2 py-3 pl-4">
          <span className="top-0 left-0 flex h-3 w-3 rounded-full bg-red-500"></span>
          <span className="top-0 left-0 flex h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="top-0 left-0 flex h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <h2 className="mt-8 text-center text-3xl font-bold text-black">
          {lenguage ? "Skills" : "Habilidades"}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 p-5">
          <span className="transit mb-12 flex h-1 w-14 duration-300 ease-in hover:-translate-y-2 hover:shadow-2xl">
            <IconJavaScript />
            {/* <span className="hover:block">JavaScript</span> */}
          </span>
          <span className="transit duration-300 ease-in hover:-translate-y-2 hover:shadow-2xl">
            <IconJava />
          </span>
          <span className="transit duration-300 ease-in hover:-translate-y-2 hover:shadow-2xl">
            <IconPython />
          </span>
          <span className="transit duration-300 ease-in hover:-translate-y-2 hover:shadow-2xl">
            <IconHtml />
          </span>
          <span className="transit duration-300 ease-in hover:-translate-y-2 hover:shadow-2xl">
            <IconReactColor />
          </span>
          <span className="transit duration-300 ease-in hover:-translate-y-2 hover:shadow-2xl">
            <IconTailwindColor />
          </span>
          <span className="transit duration-300 ease-in hover:-translate-y-2 hover:shadow-2xl">
            <IconBoostrap />
          </span>
          <span className="transit duration-300 ease-in hover:-translate-y-2 hover:shadow-2xl">
            <IconMySQL />
          </span>
          <span className="transit duration-300 ease-in hover:-translate-y-2 hover:shadow-2xl">
            <IconFirestore />
          </span>
          <span className="transit duration-300 ease-in hover:-translate-y-2 hover:shadow-2xl">
            <IconGit />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
