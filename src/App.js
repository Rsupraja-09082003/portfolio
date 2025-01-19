import React from 'react';
import Navbar from './navbar.js';  // lowercase to match your file name
import MainContent from './mainContent.js';  // lowercase to match your file name
import Services from './services.js';
import Projects from './projects.js';
import Contact from './contact.js';
import About from './about.js';  // lowercase to match your file name

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        <section id="home" className="h-screen snap-start">
          <MainContent />
        </section>
        <section id="about" className="h-screen snap-start">
          <About />
        </section>
        {/* Comment out sections that haven't been created yet */}
        <section id="services" className="h-screen snap-start">
          <Services />
        </section>
        <section id="projects" className="h-screen snap-start">
          <Projects />
        </section>
        <section id="contact" className="h-screen snap-start">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;