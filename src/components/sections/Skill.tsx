import React from 'react';
import { skills } from '../../data/skills';
import { useInView } from '../../utils/animation';
import SkillIcon from '../ui/SkillIcon';

const Skill: React.FC = () => {
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    { title: 'Frontend', skills: skills.filter(s => s.category === 'frontend') },
    { title: 'Backend', skills: skills.filter(s => s.category === 'backend') },
    { title: 'Tools', skills: skills.filter(s => s.category === 'tools') },
    { title: 'Other', skills: skills.filter(s => s.category === 'other') },
  ];

  return (
    <div 
      ref={skillsRef}
      className={`transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills & Technologies</h2>
      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className={`flex flex-col items-center transform transition-all duration-500 ${skillsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${skillIndex * 100}ms` }}
                >
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                    {skill.icon && <SkillIcon skillName={skill.name} className="text-4xl text-blue-500" />}
                  </div>
                  <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
