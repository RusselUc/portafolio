import React, { createContext, useState } from 'react'

export const DarkModeContext = createContext()

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);
  const [contacme, setContacme] = useState(false);
  const [lenguage, setLenguage] = useState(false);
  return (
    <DarkModeContext.Provider
      value={{darkMode, setDarkMode, contacme, setContacme, lenguage, setLenguage}}>
        {props.children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider