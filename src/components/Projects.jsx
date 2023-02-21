import React, { useContext } from "react";
import IconReact from "../assets/Icons/IconReact";
import IconTailwind from "../assets/Icons/IconTailwind";
import IconVite from "../assets/Icons/IconVite";
import todo from "../assets/image/TODO.png";
import githubsearch from "../assets/image/GithubSearch.png";
import { DarkModeContext } from "../context/DarkModeProvider";
import { ProjectsData } from "../utils/Data";
import Card from "./Card";

const Projects = () => {
    const { es, en } = ProjectsData
    const { lenguage } = useContext(DarkModeContext)
  return (
    <div
      className="pt-5 bg-[#F6F8FF] pb-5 transition-all duration-500 ease-in dark:bg-[#141D2F]"
      id="projects"
    >
      <div className=" flex min-h-screen flex-col w-full flex-wrap items-center justify-center gap-4">
        <>
          <h2 className="text-3xl font-bold dark:text-gray-300">
            { lenguage ? en.title : es.title }
          </h2>
        </>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <Card
            image={todo}
            text={ lenguage ? en.project1.text : es.project1.text}
            title="To-Do List"
            demo="https://todo-react-vite-tailwind-russel-uc.netlify.app/"
            repo="https://github.com/RusselUc/ToDo"
          >
            <IconVite />
            <IconReact />
            <IconTailwind />
          </Card>

          <Card
            image={githubsearch}
            text={ lenguage ? en.project1.text : es.project1.text}
            title="Github user search"
            demo="https://sparkly-piroshki-7f4b45.netlify.app/"
            repo="https://github.com/RusselUc/GitHub-Search-User"
          >
            <IconVite />
            <IconReact />
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Projects;
