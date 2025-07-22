import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../components/sections/Hero';
import { personalInfo } from '../data/personal';

describe('Hero', () => {
  it('renders personal information correctly', () => {
    render(<Hero />);
    
    // Check if name and title are rendered
    expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
    expect(screen.getByText(personalInfo.title)).toBeInTheDocument();
    expect(screen.getByText(personalInfo.bio)).toBeInTheDocument();
  });

  it('renders profile image with correct attributes', () => {
    render(<Hero />);
    
    const image = screen.getByAltText(personalInfo.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/profile_pic.jpg');
    expect(image).toHaveAttribute('loading', 'eager');
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);
    
    expect(screen.getByRole('link', { name: /view work/i })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: /contact me/i })).toHaveAttribute('href', '#contact');
  });

  it('handles image loading error correctly', () => {
    render(<Hero />);
    
    const image = screen.getByAltText(personalInfo.name);
    fireEvent.error(image);
    
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/160x160?text=Profile');
  });
});
