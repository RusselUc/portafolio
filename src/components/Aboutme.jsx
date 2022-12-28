import React from "react";
import image from "../assets/image/home.svg";

const Aboutme = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center transition-all duration-500 dark:bg-gray-800"
      id="aboutme"
    >
      <div className="container md:flex md:flex-row bg-gray-900 p-10 dark:bg-gray-300 rounded-3xl mx-10">
        <div className="mt-8 flex items-center justify-center">
          <img className="" src={image} />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-3xl font-bold text-white dark:text-black">
            Sobre Mí
          </h1>
          <p className="mt-8 text-justify text-white dark:text-black">
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
