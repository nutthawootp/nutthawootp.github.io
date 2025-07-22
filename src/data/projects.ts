import type { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript. Features include smooth scrolling, dynamic content sections, and a contact form.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageUrl: '/images/portfolio.jpg',
    liveUrl: 'https://nutthawootp.github.io',
    githubUrl: 'https://github.com/nutthawootp/nutthawootp.github.io',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management Application',
    description: 'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: '/images/task-manager.jpg',
    githubUrl: 'https://github.com/nutthawootp/task-manager',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard application that provides real-time weather data and forecasts using the OpenWeather API.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
    imageUrl: '/images/weather-app.jpg',
    liveUrl: 'https://weather.nutthawootp.dev',
    githubUrl: 'https://github.com/nutthawootp/weather-dashboard',
    featured: false,
  }
];
