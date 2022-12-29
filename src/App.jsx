import React from "react";
import IconReact from "./assets/Icons/IconReact";
import IconTailwind from "./assets/Icons/IconTailwind";
import IconVite from "./assets/Icons/IconVite";
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import DarkModeProvider from "./context/DarkModeProvider";

const App = () => {
  return (
    <DarkModeProvider>
      <Navbar />
      <Home />
      <Aboutme />
      <Projects />
      <footer className="flex items-center justify-center text-center transition-all duration-500 ease-in dark:bg-gray-800 dark:text-gray-300">
        Hecho con
        <span className="mx-2 flex h-12 w-12">
          <IconVite />
          <IconReact />
          <IconTailwind />
        </span>
        Russel Ariel Uc Puc {new Date().getFullYear()}
      </footer>
    </DarkModeProvider>
  );
};

export default App;
