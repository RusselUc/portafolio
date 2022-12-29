import React, { useContext } from "react";
import home from "../assets/image/dark.svg";
import homeDark from "../assets/image/light.svg";
import image from "../assets/image/home.svg";
import { DarkModeContext } from "../context/DarkModeProvider";
import Button from "./Button";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className="flex min-h-screen items-center justify-center transition-all duration-500 dark:bg-gray-800"
      id="home"
    >
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-semibold tracking-widest dark:text-gray-300">
            Hola, mi nombre es Russel
          </h1>
          <p className="mt-8 text-xl dark:text-gray-300">
            Desarrollador junior
          </p>
          <div className="flex gap-4">
            <Button text="Contactame" icon="send-outline" />
            <Button
              text="Descargar CV"
              icon="document-outline"
              href="https://drive.google.com/file/d/1Tz9Huqw5BMRU0xeB1FRRc2vhAoiCD44-/view?usp=share_link"
              target="_blank"
            />
          </div>
        </div>
        <div className="md:h-10/12 mt-8 flex h-72 w-72 items-center justify-center md:w-1/2">
          {
            <img
              className="object-cover transition-all duration-500 "
              src={darkMode ? home : homeDark}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
