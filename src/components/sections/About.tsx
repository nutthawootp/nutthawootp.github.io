import React from 'react';
import { personalInfo } from '../../data/personal';
import { skills } from '../../data/skills';
import { useInView } from '../../utils/animation';

const About: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  const otherSkills = skills.filter(skill => skill.category === 'other');
  
  const [bioRef, bioInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });

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

          <div 
            ref={skillsRef}
            className={`md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 transform transition-all duration-700 ${
              skillsInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {frontendSkills.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Frontend</h3>
                <ul className="space-y-2 text-gray-700">
                  {frontendSkills.map((skill, index) => (
                    <li 
                      key={index} 
                      className="flex items-center transform transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {skill.name} - <span className="text-sm text-gray-500 ml-1">{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {backendSkills.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Backend</h3>
                <ul className="space-y-2 text-gray-700">
                  {backendSkills.map((skill, index) => (
                    <li 
                      key={index} 
                      className="flex items-center transform transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {skill.name} - <span className="text-sm text-gray-500 ml-1">{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {toolsSkills.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  {toolsSkills.map((skill, index) => (
                    <li 
                      key={index} 
                      className="flex items-center transform transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {skill.name} - <span className="text-sm text-gray-500 ml-1">{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {otherSkills.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Other</h3>
                <ul className="space-y-2 text-gray-700">
                  {otherSkills.map((skill, index) => (
                    <li 
                      key={index} 
                      className="flex items-center transform transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {skill.name} - <span className="text-sm text-gray-500 ml-1">{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
