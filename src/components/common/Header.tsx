import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import useScrollSpy from '../../hooks/useScrollSpy';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = ['hero', 'about', 'projects', 'contact'];
  const activeSection = useScrollSpy({ sectionIds, offset: 50 });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  const getLinkClassName = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `hover:text-blue-600 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-800'}`;
  };

  const getLinkAriaCurrent = (sectionId: string) => {
    return activeSection === sectionId ? 'page' : undefined;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold text-gray-800">My Portfolio</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')} className={getLinkClassName('hero')} aria-current={getLinkAriaCurrent('hero')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className={getLinkClassName('about')} aria-current={getLinkAriaCurrent('about')}>About</a></li>
          <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className={getLinkClassName('projects')} aria-current={getLinkAriaCurrent('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className={getLinkClassName('contact')} aria-current={getLinkAriaCurrent('contact')}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Mobile menu button" 
            
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div data-testid="mobile-menu" className="md:hidden bg-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')} className={getLinkClassName('hero')} aria-current={getLinkAriaCurrent('hero')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className={getLinkClassName('about')} aria-current={getLinkAriaCurrent('about')}>About</a></li>
            <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className={getLinkClassName('projects')} aria-current={getLinkAriaCurrent('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className={getLinkClassName('contact')} aria-current={getLinkAriaCurrent('contact')}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;