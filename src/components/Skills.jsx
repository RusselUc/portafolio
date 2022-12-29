import React from "react";
import IconFirestore from "../assets/Icons/IconFirestore";
import IconJava from "../assets/Icons/IconJava";
import IconPython from "../assets/Icons/IconPython";
import IconReactColor from "../assets/Icons/IconReactColor";
import IconTailwindColor from "../assets/Icons/IconTailwindColor";
import IconGit from "../assets/Icons/IconGit";

const Skills = () => {
  return (
    <div className="flex h-full items-center justify-center transition-all duration-500 ease-in dark:bg-gray-800">
      <div className="flex items-center justify-center flex-col container mx-10 rounded-3xl bg-gray-200 transition-all duration-500 ease-in dark:bg-gray-300 p-5">
        <h2 className="mt-8 text-center text-3xl font-bold text-black">
          Habilidades
        </h2>
        <div className="flex gap-2 mt-8">
          <IconReactColor />
          <IconJava/>
          <IconPython/>
        </div>
        <div className="flex gap-2 mt-8">
          <IconTailwindColor/>
          <IconFirestore />
          <IconGit/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
