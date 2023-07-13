import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
function App() {
  

  return (
    <><Routes>

      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects /> } />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      
    </Routes>
    </>
  )
}

export default App
