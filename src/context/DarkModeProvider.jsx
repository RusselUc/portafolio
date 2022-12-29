import React, { createContext, useState } from 'react'

export const DarkModeContext = createContext()

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);
  return (
    <DarkModeContext.Provider
      value={{darkMode, setDarkMode}}>
        {props.children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider