import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws, FaFigma, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiGraphql, SiPostgresql, SiVite, SiSimpleanalytics } from 'react-icons/si';
import { VscOrganization } from "react-icons/vsc";
import { GoBeaker } from "react-icons/go";


export const iconMap: { [key: string]: React.ElementType } = {
  'React': FaReact,
  'TypeScript': SiTypescript,
  'Node.js': FaNodeJs,
  'Docker': FaDocker,
  'Git': FaGitAlt,
  'AWS': FaAws,
  'Figma': FaFigma,
  'Next.js': SiNextdotjs,
  'GraphQL': SiGraphql,
  'PostgreSQL': SiPostgresql,
  'Tailwind CSS': SiTailwindcss,
  'Vite': SiVite,
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'Agile/Scrum': VscOrganization,
  'UI/UX Design': GoBeaker,
  'Tableau': SiSimpleanalytics,
};

interface SkillIconProps {
  skillName: string;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skillName, className }) => {
  const IconComponent = iconMap[skillName];

  if (!IconComponent) {
    return null; // Or a default icon
  }

  return <IconComponent className={className} aria-label={skillName} />;
};

export default SkillIcon;
