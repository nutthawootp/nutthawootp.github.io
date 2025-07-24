import React from 'react';
import { skills } from '../../data/skills';
import { useInView } from '../../utils/animation';

const Skill: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  const otherSkills = skills.filter(skill => skill.category === 'other');
  
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });

  return (
    <div 
      ref={skillsRef}
      className={`md:w-1/2 transform transition-all duration-700 ${
        skillsInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      }`}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Technologies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                {skill.name}
                <span 
                  className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold 
                    ${skill.level === 'advanced' ? 'bg-red-200 text-red-800' : ''}
                    ${skill.level === 'intermediate' ? 'bg-blue-200 text-blue-800' : ''}
                    ${skill.level === 'beginner' ? 'bg-green-200 text-green-800' : ''}
                  `}
                >
                  {skill.level}
                </span>
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
                {skill.name}
                <span 
                  className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold 
                    ${skill.level === 'advanced' ? 'bg-red-200 text-red-800' : ''}
                    ${skill.level === 'intermediate' ? 'bg-blue-200 text-blue-800' : ''}
                    ${skill.level === 'beginner' ? 'bg-green-200 text-green-800' : ''}
                  `}
                >
                  {skill.level}
                </span>
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
                {skill.name}
                <span 
                  className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold 
                    ${skill.level === 'advanced' ? 'bg-red-200 text-red-800' : ''}
                    ${skill.level === 'intermediate' ? 'bg-blue-200 text-blue-800' : ''}
                    ${skill.level === 'beginner' ? 'bg-green-200 text-green-800' : ''}
                  `}
                >
                  {skill.level}
                </span>
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
                {skill.name}
                <span 
                  className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold 
                    ${skill.level === 'advanced' ? 'bg-red-200 text-red-800' : ''}
                    ${skill.level === 'intermediate' ? 'bg-blue-200 text-blue-800' : ''}
                    ${skill.level === 'beginner' ? 'bg-green-200 text-green-800' : ''}
                  `}
                >
                  {skill.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Skill;
