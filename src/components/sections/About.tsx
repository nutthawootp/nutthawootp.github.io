import React from 'react';
import { personalInfo } from '../../data/personal';
import { useInView } from '../../utils/animation';
import Skill from './Skill';

const About: React.FC = () => {
  const [bioRef, bioInView] = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>

        <div className="flex flex-col gap-8 items-center">
          <div 
            ref={bioRef}
            className={`text-lg text-gray-700 leading-relaxed text-justify transform transition-all duration-700 ${
              bioInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Story</h2>
            <p className="mb-6 indent-8">{personalInfo.bio}</p>
            <p className="mb-6 indent-8">
              I started my career in medical diagnostics, uncovering truths hidden in biological samples. Over time, I discovered a deeper calling: connecting those truths to public health action.
              I’ve built my career at the intersection of health and technology. I’ve learned that data is only powerful when it moves people—and systems—to act.
            </p>
            <p className="mb-6 indent-8">
              Today, I continue shaping data into tools that inform decisions, elevate insights, and drive impact—locally and globally. Whether collaborating with health ministries or visualizing trends for policymakers, I’m committed to creating systems that empower action and scale solutions. This portfolio reflects that journey: grounded in science, sharpened by technology, and guided by purpose.
          
            </p>
            <div className="text-center">
              <a
                href="/CV__Nutthawoot_P.pdf"
                download
                className="mt-6 inline-block bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-600 transition duration-300 ease-in-out shadow-md"
              >
                Download CV
              </a>
            </div>
          </div>
          <Skill />
        </div>
      </div>
    </section>
  );
};

export default About;
