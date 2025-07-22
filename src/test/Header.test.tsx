import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/common/Header';

// Mock IntersectionObserver and scroll behavior
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('Header', () => {
  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
    // Reset window scroll position
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0
    });
    // Clear window listeners between tests
    window.onscroll = null;
  });

  it('renders desktop navigation links', () => {
    render(<Header />);
    
    const desktopNav = screen.getAllByRole('list')[0];
    const navLinks = ['Home', 'About', 'Projects', 'Contact'];
    
    navLinks.forEach(link => {
      const linkElement = within(desktopNav).getByRole('link', { name: link });
      expect(linkElement).toBeInTheDocument();
    });
  });

  it('handles mobile menu interactions correctly', async () => {
    const user = userEvent.setup();
    render(<Header />);
    
    // Initially mobile menu should not exist in the DOM
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
    
    // Click hamburger button to open menu
    const menuButton = screen.getByRole('button');
    await user.click(menuButton);
    
    // Menu should be visible with all links
    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu).toBeInTheDocument();
    
    const links = ['Home', 'About', 'Projects', 'Contact'];
    links.forEach(link => {
      expect(within(mobileMenu).getByRole('link', { name: link })).toBeInTheDocument();
    });

    // Click hamburger button again to close menu
    await user.click(menuButton);
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  it('adds background on scroll', () => {
    render(<Header />);
    
    // Initially should have transparent background
    const header = screen.getByRole('banner');
    expect(header).not.toHaveClass('bg-white');
    
    // Simulate scroll
    window.scrollY = 20;
    fireEvent.scroll(window);
    
    // Should have white background
    expect(header).toHaveClass('bg-white');
  });

  it('handles smooth scroll when clicking navigation links', async () => {
    const user = userEvent.setup();
    render(<Header />);
    
    // Mock section elements
    const sections = ['hero', 'about', 'projects', 'contact'];
    sections.forEach(id => {
      const section = document.createElement('div');
      section.id = id;
      document.body.appendChild(section);
    });
    
    // Click each nav link
    const links = screen.getAllByRole('link');
    for (const link of links) {
      await user.click(link);
      // Verify scrollIntoView was called
      expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    }
    
    // Cleanup
    sections.forEach(id => {
      document.getElementById(id)?.remove();
    });
  });
});
