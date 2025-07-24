import React from 'react';
import { personalInfo } from '../../data/personal';
import { useInView } from '../../utils/animation';
import Skill from './Skill';

const About: React.FC = () => {
  const [bioRef, bioInView] = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div 
            ref={bioRef}
            className={`md:w-1/2 text-lg text-gray-700 leading-relaxed transform transition-all duration-700 ${
              bioInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h2>
            <p className="mb-6">{personalInfo.bio}</p>
            <p className="mb-6">
              I am passionate about building scalable and user-friendly applications. 
              My journey in software development has equipped me with a diverse skill set, 
              allowing me to tackle challenges from front-end design to back-end logic.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to 
              open-source projects, and staying updated with the latest industry trends.
            </p>
            <a
              href="/CV__Nutthawoot_P.pdf"
              download
              className="mt-6 inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 ease-in-out shadow-md"
            >
              Download Resume
            </a>
          </div>
          <Skill />
        </div>
      </div>
    </section>
  );
};

export default About;
