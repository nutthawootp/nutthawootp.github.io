import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BackToTop from '../components/common/BackToTop';

describe('BackToTop', () => {
  // Mock window.pageYOffset and window.scrollTo
  const mockScrollTo = vi.fn();
  Object.defineProperty(window, 'pageYOffset', { writable: true, value: 0 });
  Object.defineProperty(window, 'scrollTo', { writable: true, value: mockScrollTo });

  it('does not render the button initially when not scrolled', () => {
    render(<BackToTop />);
    expect(screen.queryByLabelText('Scroll to top')).not.toBeInTheDocument();
  });

  it('renders the button when scrolled down past 300px', () => {
    render(<BackToTop />);
    
    // Simulate scroll
    window.pageYOffset = 301;
    fireEvent.scroll(window);
    
    expect(screen.getByLabelText('Scroll to top')).toBeInTheDocument();
  });

  it('hides the button when scrolled back up', () => {
    render(<BackToTop />);
    
    // Simulate scroll down
    window.pageYOffset = 301;
    fireEvent.scroll(window);
    expect(screen.getByLabelText('Scroll to top')).toBeInTheDocument();

    // Simulate scroll up
    window.pageYOffset = 299;
    fireEvent.scroll(window);
    expect(screen.queryByLabelText('Scroll to top')).not.toBeInTheDocument();
  });

  it('scrolls to top when the button is clicked', () => {
    render(<BackToTop />);
    
    // Simulate scroll down to make button visible
    window.pageYOffset = 301;
    fireEvent.scroll(window);
    
    const button = screen.getByLabelText('Scroll to top');
    fireEvent.click(button);
    
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
