import React from 'react';
import { personalInfo } from '../../data/personal';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="mb-8 transform translate-y-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <img
            src="/images/profile_pic.jpg"
            alt={personalInfo.name}
            className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/160x160?text=Profile';
            }}
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 transform translate-y-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-8 transform translate-y-10 opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          {personalInfo.title}
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto transform translate-y-10 opacity-0 animate-slide-up" style={{ animationDelay: '1.0s' }}>
          {personalInfo.bio}
        </p>
        <div className="flex justify-center space-x-4 transform translate-y-10 opacity-0 animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <a
            href="#projects"
            className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="bg-gray-200 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
