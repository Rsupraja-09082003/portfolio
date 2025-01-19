    function MainContent() {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side - Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                Hello, <span className="text-emerald-400">I'm</span>
              </h1>
              <h2 className="text-5xl md:text-6xl font-bold text-emerald-400 mb-4">
                Supraja R
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Data Scientist
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                With knowledge in AI/ML and EDA, I offer 
                the best projects resulting in quality work.
              </p>
              <a 
  href="#contact" // Link to the contact section
  className="bg-emerald-400 text-gray-900 px-8 py-3 rounded-lg hover:bg-emerald-500 transition-colors font-medium cursor-pointer"
>
  Let's Talk
</a>
              
              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/Rsupraja-09082003" className="text-white bg-gray-800 p-3 rounded-lg hover:bg-emerald-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/supraja_ramesh_/" className="text-white bg-gray-800 p-3 rounded-lg hover:bg-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="4" ry="4" stroke-width="1" />
                  <circle cx="12" cy="12" r="3.5" stroke-width="1" />
                  <circle cx="16.5" cy="7.5" r="0.5" fill="currentColor" />
                </svg>
                </a>
                <a href="https://www.linkedin.com/in/suprajaramesh/" className="text-white bg-gray-800 p-3 rounded-lg hover:bg-emerald-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Right side - Hexagon Image */}
            <div className="relative w-[400px] h-[400px]">
              {/* SVG Hexagon Outline */}
              <svg 
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path 
                  d="M50 3 L93.3 25 L93.3 75 L50 97 L6.7 75 L6.7 25 L50 3"
                  stroke="#00DC82"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              {/* Image with Hexagonal Clip Path */}
              <div className="absolute inset-[20px] "style={{ top: '-80px' }}>
                <img 
                  src="/images/IMG-20240103-WA0025 (1).png" // Change this if needed
                  alt="Profile" 
                  className="w-[900px] h-[500px] object-cover"
                  style={{
                    clipPath: 'polygon(50% 0%, 90% 25%, 90% 75%, 50% 90%, 10% 75%, 10% 25%)',
                    WebkitClipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 91%, 6.7% 75%, 6.7% 25%)',
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
  
  export default MainContent;