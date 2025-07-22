import React from 'react';
import { personalInfo } from '../../data/personal';
import ContactForm from '../ui/ContactForm';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Me</h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
            <p className="text-lg text-gray-700 mb-4">
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
            </p>
            <ul className="space-y-4 text-gray-700">
              
              <li>
                <strong>Location:</strong> {personalInfo.location}
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Connect with me</h3>
              <div className="flex space-x-6">
                {personalInfo.socialLinks.github && (
                  <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-800 hover:text-blue-600 transition duration-300">
                    <FaGithub size={30} />
                  </a>
                )}
                {personalInfo.socialLinks.linkedin && (
                  <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-800 hover:text-blue-600 transition duration-300">
                    <FaLinkedin size={30} />
                  </a>
                )}
                {personalInfo.socialLinks.twitter && (
                  <a href={personalInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" title="Twitter" className="text-gray-800 hover:text-blue-600 transition duration-300">
                    <FaTwitter size={30} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
