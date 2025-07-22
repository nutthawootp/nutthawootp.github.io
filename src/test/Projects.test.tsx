import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Projects from '../components/sections/Projects';
import { projects } from '../data/projects';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('Projects', () => {
  it('renders projects section title', () => {
    render(<Projects />);
    expect(screen.getByText(/my projects/i)).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects />);
    
    projects.forEach(project => {
      const projectEl = screen.getByText(project.title);
      const card = projectEl.closest('.bg-white') as HTMLElement;
      if (!card) throw new Error('Project card not found');

      // Check basic content
      expect(within(card).getByText(project.description)).toBeInTheDocument();
      
      // Check project image
      const image = within(card).getByRole('img', { name: project.title });
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', project.imageUrl);
      
      // Check technologies
      project.technologies.forEach(tech => {
        const techElement = within(card).getByText((_, element) => 
          element?.textContent === tech
        );
        expect(techElement).toBeInTheDocument();
      });

      // Check links
      if (project.liveUrl) {
        const liveLink = within(card).getByRole('link', { name: /live demo/i });
        expect(liveLink).toHaveAttribute('href', project.liveUrl);
      }
      
      if (project.githubUrl) {
        const githubLink = within(card).getByRole('link', { name: /github/i });
        expect(githubLink).toHaveAttribute('href', project.githubUrl);
      }
    });
  });

  it('applies proper loading attributes to project images', () => {
    render(<Projects />);
    
    const images = screen.getAllByRole('img');
    images.forEach(image => {
      expect(image).toHaveAttribute('loading', 'lazy');
      expect(image).toHaveClass('opacity-0');
    });
  });
});
