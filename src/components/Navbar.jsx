import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { DarkModeContext } from "../context/DarkModeProvider";
import { NavbarData } from "../utils/Data";
import mexicanFlag from '../assets/image/mexico.png'
import UEFlag from '../assets/image//estados-unidos.png'

const Navbar = () => {
  const { es, en } = NavbarData;
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode, setContacme, lenguage, setLenguage } =
    useContext(DarkModeContext);

  const urls = [
    { name: "Inicio", uri: "home" },
    { name: "Sobre mi", uri: "aboutme" },
    { name: "Proyectos", uri: "projects" },
    { name: "Contacto", uri: "home" },
  ];

  const handleClick = (name) => {
    if (name === "Contacto" || name === "Contact") {
      setContacme(true);
    }
    setOpen(false);
  };

  const handleLenguage = () => {
    setLenguage(!lenguage);
  };

  useEffect(() => {
    let elemento = document.getElementById("theme");
    if (darkMode) {
      document.documentElement.classList.add("dark");
      elemento.setAttribute("content", "#1F2937");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      elemento.setAttribute("content", "#F6F8FF");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#F6F8FF] transition-all duration-500 dark:bg-[#141D2F]">
      <div className="py-4 px-7 transition-all duration-500 ease-in dark:bg-[#141D2F] md:flex md:justify-between md:px-10">
        <div className="flex items-center gap-4 text-2xl font-bold text-gray-800 md:cursor-pointer">
          <span
            className="mr-1 pt-2 text-3xl dark:text-gray-300"
            onClick={() => setDarkMode(!darkMode)}
          >
            <ion-icon
              name={darkMode ? "sunny-outline" : "moon-outline"}
            ></ion-icon>
          </span>
          <button
            className="mt-1 dark:text-gray-300"
            onClick={() => handleLenguage()}
          >
            <img src={lenguage ? UEFlag : mexicanFlag} width={42}/>
          </button>
        </div>
        <div className="absolute right-8 top-6 flex gap-4 text-3xl dark:text-gray-300 md:top-8 md:hidden md:cursor-pointer">
          <span onClick={() => setOpen(!open)}>
            <ion-icon name={open ? "close-outline" : "grid-outline"}></ion-icon>
          </span>
        </div>
        <ul
          className={`absolute left-0 w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in dark:bg-[#141D2F] md:static md:z-auto
          md:flex md:w-auto md:items-center md:bg-transparent md:pb-0 md:pl-0  md:dark:bg-transparent ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          {urls.map((url, index) => (
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
                onClick={() => handleClick(url.name)}
              >
                <span>{lenguage ? en[index] : es[index]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
