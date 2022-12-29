import React from "react";

const Card = ({ children, image, text, title, demo, repo }) => {
  return (
    <div>
      <div className="mt-8 flex w-60 flex-col items-center justify-center rounded-xl border bg-white p-2 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-500 dark:bg-gray-400">
        <div className="flex items-center justify-center">
          <img className="h-40 rounded-xl object-cover" src={image} alt="" />
        </div>
        <div className="p-2">
          <h2 className="mb-2 text-center text-lg font-bold ">{title}</h2>

          <p className="text-sm text-gray-600 dark:text-black">{text}</p>
        </div>

        <div className="flex h-9 w-32 justify-between">{children}</div>

        <div className="m-2 flex justify-between gap-10">
          <a
            className="rounded-md bg-black px-3 py-1 text-white hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-black"
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
            Repositorio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
