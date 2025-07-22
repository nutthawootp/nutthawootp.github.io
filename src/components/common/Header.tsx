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
    return `hover:text-blue-600 ${activeSection === sectionId ? 'text-blue-500 font-bold' : 'text-gray-800'}`;
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
          <li><a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')} className={getLinkClassName('hero')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className={getLinkClassName('about')}>About</a></li>
          <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className={getLinkClassName('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className={getLinkClassName('contact')}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div data-testid="mobile-menu" className="md:hidden bg-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')} className={getLinkClassName('hero')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className={getLinkClassName('about')}>About</a></li>
            <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className={getLinkClassName('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className={getLinkClassName('contact')}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;