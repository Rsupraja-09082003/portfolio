import React from 'react';

function Contact() {
  return (
    <div className="h-screen flex items-center justify-center container mx-auto px-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-emerald-500 mb-2">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white">Contact Me</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gray-700 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-gray-400">suprajar003@gmail</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gray-700 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Location</h3>
                <p className="text-gray-400">Tirunelveli, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gray-700 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Social Media</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="https://www.instagram.com/supraja_ramesh_/" className="text-gray-400 hover:text-emerald-500 transition-colors">Instagram</a>
                  <a href="https://www.linkedin.com/in/suprajaramesh/" className="text-gray-400 hover:text-emerald-500 transition-colors">LinkedIn</a>
                  <a href="https://github.com/Rsupraja-09082003" className="text-gray-400 hover:text-emerald-500 transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;