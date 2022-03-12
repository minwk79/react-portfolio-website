import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import NavBar from './NavBar';

function App() {
  return (
    <div className='ui segment'>
      <div className='ui left rail'>
          <NavBar />
      </div>
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
      <br />
      <Footer />
    </div>
  )
}

export default App;