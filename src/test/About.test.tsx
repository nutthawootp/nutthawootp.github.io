import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../components/sections/About';
import { personalInfo } from '../data/personal';
import { skills } from '../data/skills';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('About', () => {
  it('renders biography content', () => {
    render(<About />);
    expect(screen.getByText(personalInfo.bio)).toBeInTheDocument();
  });

  it('renders skill categories and skills with levels', () => {
    render(<About />);
    
    const categories = ['Frontend', 'Backend', 'Tools'];
    
    categories.forEach(category => {
      const categorySkills = skills.filter(skill => 
        skill.category.toLowerCase() === category.toLowerCase()
      );
      
      if (categorySkills.length > 0) {
        // Check category heading
        expect(screen.getByText(category)).toBeInTheDocument();
        
        // For each skill in this category, check both name and level
        categorySkills.forEach(skill => {
          const skillElement = screen.getAllByRole('listitem').find(item =>
            item.textContent?.includes(skill.name) && item.textContent?.includes(skill.level)
          );
          expect(skillElement).toBeInTheDocument();
        });
      }
    });
  });

  it('renders resume download button', () => {
    render(<About />);
    const downloadButton = screen.getByRole('link', { name: /download resume/i });
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveAttribute('href', '/CV__Nutthawoot_P.pdf');
    expect(downloadButton).toHaveAttribute('download');
  });
});
