import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { DarkModeContext } from "../context/DarkModeProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {darkMode, setDarkMode} = useContext(DarkModeContext)

  const urls = [
    { name: "Inicio", uri: "home" },
    { name: "Sobre mi", uri: "aboutme" },
    { name: "Proyectos", uri: "projects" },
    { name: "Contacto", uri: "" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      console.log(darkMode);
    } else {
      document.documentElement.classList.remove("dark");
      console.log(darkMode);
    }
  }, [darkMode]);

  return (
    <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-800 transition-all duration-500">
      <div className="py-4 px-7 transition-all duration-500 ease-in dark:bg-gray-800  md:flex md:justify-between md:px-10">
        <div className="flex items-center gap-4 text-2xl font-bold text-gray-800 md:cursor-pointer">
          <span
            className="mr-1 pt-2 text-3xl dark:text-gray-300"
            onClick={() => setDarkMode(!darkMode)}
          >
            <ion-icon
              name={darkMode ? "sunny-outline" : "moon-outline"}
            ></ion-icon>
          </span>
        </div>
        <div className="absolute right-8 top-6 flex gap-4 text-3xl dark:text-gray-300 md:top-8 md:hidden md:cursor-pointer">
          <span onClick={() => setOpen(!open)}>
            <ion-icon name={open ? "close-outline" : "grid-outline"}></ion-icon>
          </span>
        </div>
        <ul
          className={`absolute bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent left-0 w-full pb-12 pl-9 transition-all duration-500 ease-in
          md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0  md:pl-0 ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          {urls.map((url) => (
            <li
              key={url.name}
              className="my-5 text-xl dark:text-gray-300 md:my-0 md:ml-8"
            >
              <Link
                to={url.uri}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer text-gray-800  hover:text-gray-400 dark:text-gray-300 dark:hover:text-white"
                onClick={() => setOpen(false)}
              >
                <span>{url.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
