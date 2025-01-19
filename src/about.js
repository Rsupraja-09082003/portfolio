function About() {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-900">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Left side - Hexagon Ring */}
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
                  src="\images\IMG-20240103-WA0031.png" // Change this if needed
                  alt="Profile" 
                  className="w-[900px] h-[500px] object-cover"
                  style={{
                    clipPath: 'polygon(50% 0%, 90% 25%, 90% 75%, 50% 90%, 10% 75%, 10% 25%)',
                    WebkitClipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 91%, 6.7% 75%, 6.7% 25%)',
                  }}
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="max-w-xl text-center md:text-left">
              <p className="text-emerald-400 font-medium mb-2">My Intro</p>
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Frontend developer, I create web pages with UI / UX user interface, 
                I have years of experience and many clients are happy with the 
                projects carried out.
              </p>
              <a href="#contact" className="bg-emerald-400 text-gray-900 px-8 py-3 rounded-lg hover:bg-emerald-500 transition-colors font-medium cursor-pointer">
                Let's Talk
              </a>
                
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;