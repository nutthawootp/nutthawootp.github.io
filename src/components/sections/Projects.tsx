import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import { useInView } from '../../utils/animation';

const Projects: React.FC = () => {
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
        <div 
          ref={projectsRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 ${
            projectsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-700 delay-${index * 200}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
