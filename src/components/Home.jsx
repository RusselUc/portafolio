import React, { useContext } from "react";
import home from "../assets/image/dark.svg";
import homeDark from "../assets/image/light.svg";
import { DarkModeContext } from "../context/DarkModeProvider";
import Button from "./Button";
import { HomeData } from "../utils/Data";

const Home = () => {
  const { darkMode, contacme, setContacme, lenguage } =
    useContext(DarkModeContext);
  const { es, en } = HomeData;
  const cvEn = "https://drive.google.com/file/d/1fjgwkkKaSJ1QgGtZqgg-kcXRdRfG1ABG/view?usp=sharing"
  const cvEs = "https://drive.google.com/file/d/1WMzlUczWlMioX77Lr9U4piwD9NbrkOdq/view?usp=share_link"
  return (
    <div
      className="flex min-h-screen items-center justify-center transition-all duration-500 ease-in dark:bg-gray-800"
      id="home"
    >
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-semibold tracking-widest dark:text-gray-300">
            {lenguage ? en.title : es.title}
          </h1>
          <p className="mt-8 text-xl dark:text-gray-300">
            {lenguage ? en.subtitle : es.subtitle}
          </p>
          <div className="flex gap-4 ">
            <Button
              text={lenguage ? en.contact : es.contact}
              icon="send-outline"
              onClick={() => setContacme(!contacme)}
            />
            <Button
              text={lenguage ? en.cv : es.cv}
              icon="document-outline"
              href={ lenguage ? cvEn : cvEs}
              target="_blank"
            />
          </div>

          {contacme && (
            <div
              className={`mt-8 flex flex-col transition-all duration-500 ease-in-out`}
            >
              <div className="flex gap-4 transition-all duration-500 ease-in">
                <span className="w-12 text-3xl dark:text-gray-300">
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <span className="text-md dark:text-gray-300">
                  russelarielucpuc@gmail.com
                </span>
              </div>

              <a
                className="flex items-center justify-start gap-4 overflow-hidden transition-all duration-500"
                href="https://www.linkedin.com/in/russel-uc-5819141b0/"
              >
                <span className="w-12 text-3xl dark:text-gray-300">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                <span className="text-md dark:text-gray-300">
                  www.linkedin.com/in/russel-uc-5819141b0
                </span>
              </a>
            </div>
          )}
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
