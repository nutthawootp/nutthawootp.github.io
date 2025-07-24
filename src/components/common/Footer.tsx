import React from 'react';
import { personalInfo } from '../../data/personal';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 p-6 text-center border-t border-gray-200">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name} All rights reserved.</p>
        <p className="text-sm mt-1 flex items-center justify-center">
          Built with <FaReact className="mx-1 text-blue-500" /> React & <SiTailwindcss className="mx-1 text-teal-500" /> Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
