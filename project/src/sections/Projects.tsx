import React, { useState } from 'react';
import AnimatedSection from '../components/UI/AnimatedSection';
import SectionTitle from '../components/UI/SectionTitle';
import ProjectCard from '../components/UI/ProjectCard';
import { PROJECTS } from '../data/portfolio';

type ProjectFilter = 'all' | 'featured' | string;

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  
  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(PROJECTS.flatMap(project => project.tags))
  ).sort();
  
  // Filter projects based on selected filter
  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.tags.includes(activeFilter);
  });

  return (
    <AnimatedSection id="projects">
      <SectionTitle
        title="My Projects"
        subtitle="Here are some of the projects I've worked on. Take a look!"
        centered
      />
      
      <div className="mb-10 overflow-x-auto">
        <div className="flex flex-wrap justify-center gap-2 min-w-max md:min-w-0">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All Projects
          </button>
          
          <button
            onClick={() => setActiveFilter('featured')}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === 'featured'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Featured
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === tag
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No projects found with the selected filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </AnimatedSection>
  );
};

export default Projects;