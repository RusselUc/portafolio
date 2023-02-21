import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import { ProjectsData } from "../utils/Data";

const Card = ({ children, image, text, title, demo, repo }) => {
  const { lenguage } = useContext(DarkModeContext);
  const { es, en } = ProjectsData;
  return (
    <div>
      <div className="mt-8 flex w-60 flex-col items-center justify-center rounded-xl border bg-white p-2 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-none dark:bg-[#1E2A47] dark:shadow-lg dark:shadow-blue-500/20 dark:hover:shadow-2xl dark:hover:shadow-blue-500/25">
        <div className="flex items-center justify-center">
          <img className="h-40 rounded-xl object-cover" src={image} alt="" />
        </div>
        <div className="p-2">
          <h2 className="mb-2 text-center text-lg font-bold dark:text-gray-200">
            {title}
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-100">{text}</p>
        </div>

        <div className="flex h-9 w-32 justify-between">{children}</div>

        <div className="m-2 flex justify-between gap-10">
          <a
            className="dark: rounded-md bg-[#0079ff] px-3 py-1 text-white transition-all duration-500 ease-in hover:shadow-lg hover:shadow-blue-500/80 dark:hover:shadow-blue-500/90"
            href={demo}
            target="_blank"
          >
            Demo
          </a>
          <a
            className="rounded-md bg-black px-3 py-1 text-white hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-black"
            href={repo}
            target="_blank"
          >
            {lenguage ? en.code : es.code}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
