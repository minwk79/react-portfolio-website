import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import NavBar from './NavBar';
import Social from './Social';

function App() {
  return (
    <div className=''>
      {/* TODO: Attach a toggle button for dark mode.  */}
      <div className='bg-light-bg dark:bg-dark-bg'>
        <NavBar />
        <Social />
        <Header />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    
    </div>
  )
}

export default App;