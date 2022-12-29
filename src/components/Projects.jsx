import React from "react";
import IconReact from "../assets/Icons/IconReact";
import IconTailwind from "../assets/Icons/IconTailwind";
import todo from "../assets/image/TODO.png";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="pt-5 pb-5 dark:bg-gray-800" id="projects">
      <div className=" flex min-h-screen w-full flex-col flex-wrap items-center justify-center gap-4">
        <>
          <h2 className="text-3xl font-bold dark:text-gray-300">Proyectos</h2>
        </>
        <Card
          image={todo}
          text="To-Do List, es un proyecto para el ordamiento de tareas."
          title="To-Do List"
          demo="https://todo-react-vite-tailwind-russel-uc.netlify.app/"
          repo="https://github.com/RusselUc/ToDo"
        >
          <IconReact />
          <IconTailwind />
        </Card>
      </div>
    </div>
  );
};

export default Projects;
