import React from 'react';

function Projects() {
  const projects = [
    {
        id: 1,
        title: 'Sentiment Analysis',
        image: '/images/WhatsApp Image 2024-11-26 at 22.20.24_da7ff456.jpg',
        demoLink: 'https://github.com/Rsupraja-09082003/Sentiment-Analysis'
    },
    {
        id: 2,
        title: 'Parkinsons Detection',
        image: '/images/WhatsApp Image 2024-11-26 at 22.51.19_a783cc25.jpg',
        demoLink: 'https://github.com/Rsupraja-09082003/Parkinsons-detection-model'
      },
    {
        id: 3,
        title: 'Dog vs Cat Detection Model',
        image: '/images/WhatsApp Image 2024-11-26 at 22.54.13_188f001e.jpg',
        demoLink: 'https://github.com/Rsupraja-09082003/Dog-vs-Cat-Image-Classification-using-Transfer-Learning'
      },
    {
        id: 4,
        title: 'Time Series Forecasting Model',
        image: '/images/image.png',
        demoLink: 'https://github.com/Rsupraja-09082003/Hybrid-CEEMDAN-VMD-LSTM-Model-for-Accurate-Non-Stationary-Time-Series-Forecasting'
      },
    {
        id: 5,
        title: 'Fraud Detection',
        image: '/images/MIT-Fraud-Detection-PRESS_0.jpg',
        demoLink: 'https://github.com/Rsupraja-09082003/Fraud-Detection'
      },
    {
        id: 6,
        title: 'Movie Recommendation System',
        image: '/images/WhatsApp Image 2025-01-15 at 18.36.00_1e668c31.jpg',
        demoLink: 'https://github.com/Rsupraja-09082003/movie_recommendation_system'
      }
    // Add more projects as needed
  ];

  return (
    <div className="h-screen container mx-auto px-4 py-24">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-emerald-500">Recent Projects</h2>
    </div>
    
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div 
          key={project.id}
          className="relative group overflow-hidden rounded-lg cursor-pointer h-72
                       border border-gray-700/50 hover:border-emerald-500/50
                       transition-colors duration-300"
        >
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900
                        opacity-0 group-hover:opacity-90 
                        translate-y-full group-hover:translate-y-0 
                        transition-all duration-300 ease-in-out 
                        flex flex-col justify-end p-6">
            <p className="text-emerald-500 text-sm">{project.category}</p>
            <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
            <a href={project.demoLink} className="text-white hover:text-emerald-500 inline-flex items-center">
              Go to GitHub
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Projects;