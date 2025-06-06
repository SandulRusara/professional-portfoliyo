import React from 'react';
import AnimatedSection from '../components/UI/AnimatedSection';
import SectionTitle from '../components/UI/SectionTitle';
import ExperienceCard from '../components/UI/ExperienceCard';
import { EXPERIENCES, EDUCATION } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="bg-gray-50 dark:bg-gray-800">
      <SectionTitle
        title="Experience & Education"
        subtitle="My professional journey and academic background."
        centered
      />
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">Work Experience</h3>
        
        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full">
            <div className="w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          
          <div className="space-y-0">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceCard 
                key={experience.company} 
                experience={experience} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">Education</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <div
              key={edu.institution}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {edu.degree}
              </h4>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {edu.duration}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;