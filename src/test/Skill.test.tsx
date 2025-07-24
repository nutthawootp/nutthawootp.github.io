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
  it('renders skill categories and skills with levels and correct colors', () => {
    render(<Skill />);
    
    const categories = ['Frontend', 'Backend', 'Tools', 'Other'];
    
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
            item.textContent?.includes(skill.name)
          );
          expect(skillElement).toBeInTheDocument();

          const levelSpan = skillElement?.querySelector('span.ml-2');
          expect(levelSpan).toBeInTheDocument();
          expect(levelSpan).toHaveTextContent(skill.level);

          if (skill.level === 'advanced') {
            expect(levelSpan).toHaveClass('bg-red-200');
            expect(levelSpan).toHaveClass('text-red-800');
          } else if (skill.level === 'intermediate') {
            expect(levelSpan).toHaveClass('bg-blue-200');
            expect(levelSpan).toHaveClass('text-blue-800');
          } else if (skill.level === 'beginner') {
            expect(levelSpan).toHaveClass('bg-green-200');
            expect(levelSpan).toHaveClass('text-green-800');
          }
        });
      }
    });
  });
});