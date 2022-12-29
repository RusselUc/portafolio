import React from 'react'
import Aboutme from './components/Aboutme'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import DarkModeProvider from './context/DarkModeProvider'

const App = () => {
  return (
    <DarkModeProvider>
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Projects/>
    </DarkModeProvider>
  )
}

export default App