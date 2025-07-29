import type { Skill } from './types';

export const skills: Skill[] = [
  // Frontend skills
  {
    name: 'HTML',
    category: 'frontend',
    level: 'advanced',
    icon: 'FaHtml5',
  },
  {
    name: 'CSS',
    category: 'frontend',
    level: 'advanced',
    icon: 'FaCss3Alt',
  },
  {
    name: 'React',
    category: 'frontend',
    level: 'advanced',
    icon: 'FaReact',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 'advanced',
    icon: 'SiTypescript',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'advanced',
    icon: 'SiTailwindcss',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 'advanced',
    icon: 'SiNextdotjs',
  },
  // Backend skills
  {
    name: 'GraphQL',
    category: 'backend',
    level: 'intermediate',
    icon: 'SiGraphql',
  },
  {
    name: 'PostgreSQL',
    category: 'backend',
    level: 'intermediate',
    icon: 'SiPostgresql',
  },
  {
    name: 'Node.js',
    category: 'backend',
    level: 'intermediate',
    icon: 'FaNodeJs',
  },
  // Tools & Technologies
  { name: 'Docker', category: 'tools', level: 'intermediate', icon: 'FaDocker' },
  {
    name: 'Git',
    category: 'tools',
    level: 'advanced',
    icon: 'FaGitAlt',
  },
  { name: 'AWS', category: 'tools', level: 'intermediate', icon: 'FaAws' },
  { name: 'Vite', category: 'tools', level: 'intermediate', icon: 'SiVite' },
  { name: 'Figma', category: 'tools', level: 'beginner', icon: 'FaFigma' },
  { name: 'Tableau', category: 'tools', level: 'intermediate', icon: 'SiSimpleanalytics' },
    // Other Skills
  { name: 'Agile/Scrum', category: 'other', level: 'intermediate', icon: 'VscOrganization' },
  { name: 'UI/UX Design', category: 'other', level: 'beginner', icon: 'GoBeaker' },
];
