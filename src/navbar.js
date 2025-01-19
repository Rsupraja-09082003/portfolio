import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Options for the observer
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5 // 50% of the section needs to be visible
    };

    // Callback for the observer
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          console.log('Now viewing:', entry.target.id);
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(callback, options);

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm bg-gray-900/70 z-50">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-xl font-bold">
            <span className="text-white">Supraja</span>
            <span className="text-emerald-400"> R</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`
                  transition-colors duration-300 capitalize
                  ${activeSection === item ? 'text-emerald-400 font-medium' : 'text-white hover:text-emerald-400'}
                `}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;