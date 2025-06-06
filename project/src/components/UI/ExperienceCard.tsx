import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';
import { Experience } from '../../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div 
      className="mb-8 relative pl-8 md:pl-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot and line (hidden on mobile) */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-4 bg-primary-500 rounded-full z-10 relative"></div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      
      {/* Mobile timeline */}
      <div className="md:hidden absolute left-0 top-0 h-full">
        <div className="w-4 h-4 bg-primary-500 rounded-full z-10 relative"></div>
        <div className="absolute top-4 left-2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      </div>
      
      {/* Content */}
      <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md md:w-[calc(50%-2rem)] 
        ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}
      >
        <div className="flex items-center mb-3">
          <BriefcaseIcon className="h-5 w-5 text-primary-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {experience.position}
          </h3>
        </div>
        
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            {experience.company}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {experience.duration}
          </p>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {experience.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span 
              key={skill} 
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;