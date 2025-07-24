import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../components/sections/About';
import { personalInfo } from '../data/personal';

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

  it('renders resume download button', () => {
    render(<About />);
    const downloadButton = screen.getByRole('link', { name: /download resume/i });
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveAttribute('href', '/CV__Nutthawoot_P.pdf');
    expect(downloadButton).toHaveAttribute('download');
  });
});
