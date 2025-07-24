import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ui/ProjectCard';

describe('ProjectCard', () => {
  const mockProject = {
    id: '1',
    title: 'Test Project',
    description: 'This is a test project description.',
    technologies: ['React', 'TypeScript'],
    imageUrl: '/images/test-project.jpg',
    liveUrl: 'https://test.com',
    githubUrl: 'https://github.com/test/test-project',
    featured: false,
  };

  it('renders project details correctly', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description.')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /test project/i })).toHaveAttribute('src', '/images/test-project.jpg');
    expect(screen.getByRole('link', { name: /live demo/i })).toHaveAttribute('href', 'https://test.com');
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/test/test-project');
  });

  it('renders featured tag when project is featured', () => {
    const featuredProject = { ...mockProject, featured: true };
    render(<ProjectCard project={featuredProject} />);

    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('does not render featured tag when project is not featured', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.queryByText('Featured')).not.toBeInTheDocument();
  });

  it('does not render Live Demo link if liveUrl is not provided', () => {
    const projectWithoutLiveUrl = { ...mockProject, liveUrl: undefined };
    render(<ProjectCard project={projectWithoutLiveUrl} />);

    expect(screen.queryByRole('link', { name: /live demo/i })).not.toBeInTheDocument();
  });
});