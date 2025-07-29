import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skill from '../components/sections/Skill';
import { skills } from '../data/skills';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('Skill', () => {
  it('renders skill categories and skills', () => {
    render(<Skill />);
    
    const categories = [
      { title: 'Frontend', skills: skills.filter(s => s.category === 'frontend') },
      { title: 'Backend', skills: skills.filter(s => s.category === 'backend') },
      { title: 'Tools', skills: skills.filter(s => s.category === 'tools') },
      { title: 'Other', skills: skills.filter(s => s.category === 'other') },
    ];
    
    categories.forEach(category => {
      if (category.skills.length > 0) {
        expect(screen.getByText(category.title)).toBeInTheDocument();
        category.skills.forEach(skill => {
          expect(screen.getByText(skill.name)).toBeInTheDocument();
        });
      }
    });
  });
});
