import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/UI/AnimatedSection';
import SectionTitle from '../components/UI/SectionTitle';
import { ABOUT_ME } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <SectionTitle title={ABOUT_ME.title} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200 to-secondary-200 dark:from-primary-900 dark:to-secondary-900 rounded-lg blur-lg opacity-30" />
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={ABOUT_ME.image}
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {ABOUT_ME.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;