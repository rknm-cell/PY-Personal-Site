import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience,  Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import "./index.css"

const App = () => {
  return (
    <BrowserRouter>
  <div className='relative z-0 bg-primary '>
    <div id="app-navbar-div" className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <div className="gradient">

      <Hero />
      </div>
    </div>
    <div style={{ marginTop: '50px' }}>
      <About />
      <Tech />
      <Works />
      <Experience />
      {/* <Feedbacks /> */}
    </div>
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
  </div>
</BrowserRouter>
  );
}

export default App