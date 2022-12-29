import React from "react";
import image from "../assets/image/home.svg";
import Skills from "./Skills";

const Aboutme = () => {
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
            Sobre Mí
          </h1>
          <p className="mt-8 text-justify text-gray-300 dark:text-black">
            Estudiante de último semestre en ingeniería sistemas
            computacionales, con gran interés en acceder al mercado laboral para
            poner en práctica mis conocimientos.
          </p>
          <p className="mt-8 text-justify text-white dark:text-black">
            Soy trabajador, comunicativo, comprometido y dedicado a mejorar mis
            habilidades a través del aprendizaje práctico y el trabajo de
            desarrollo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
