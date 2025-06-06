// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import AnimatedSection from '../components/UI/AnimatedSection';
// import SectionTitle from '../components/UI/SectionTitle';
// import SkillBar from '../components/UI/SkillBar';
// import { SKILLS } from '../data/portfolio';
// import { Code, Server, PenTool, Box } from 'lucide-react';
//
// type SkillCategory = 'all' | 'frontend' | 'backend' | 'design' | 'other';
//
// const Skills: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
//
//   const filteredSkills = activeCategory === 'all'
//     ? SKILLS
//     : SKILLS.filter(skill => skill.category === activeCategory);
//
//   const categories = [
//     { id: 'all', name: 'All Skills', icon: <Box className="h-5 w-5" /> },
//     { id: 'frontend', name: 'Frontend', icon: <Code className="h-5 w-5" /> },
//     { id: 'backend', name: 'Backend', icon: <Server className="h-5 w-5" /> },
//     { id: 'design', name: 'Design', icon: <PenTool className="h-5 w-5" /> },
//     { id: 'other', name: 'Other', icon: <Box className="h-5 w-5" /> },
//   ];
//
//   return (
//     <AnimatedSection id="skills" className="bg-gray-50 dark:bg-gray-800">
//       <SectionTitle
//         title="Skills & Expertise"
//         subtitle="Here are some of the technologies and tools I specialize in."
//         centered
//       />
//
//       <div className="mb-10">
//         <div className="flex flex-wrap justify-center gap-2 md:gap-4">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id as SkillCategory)}
//               className={`flex items-center px-4 py-2 rounded-full transition-colors ${
//                 activeCategory === category.id
//                   ? 'bg-primary-500 text-white'
//                   : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
//               }`}
//             >
//               <span className="mr-2">{category.icon}</span>
//               {category.name}
//             </button>
//           ))}
//         </div>
//       </div>
//
//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 gap-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {filteredSkills.map((skill, index) => (
//           <SkillBar
//             key={skill.name}
//             name={skill.name}
//             proficiency={skill.proficiency}
//             delay={index}
//           />
//         ))}
//       </motion.div>
//     </AnimatedSection>
//   );
// };
//
// export default Skills;
//
//
//


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, PenTool, Box } from 'lucide-react';
import AnimatedSection from '../components/UI/AnimatedSection';
import SectionTitle from '../components/UI/SectionTitle';

import { SKILLS } from '../data/portfolio';
import SkillCard from "../components/UI/SkillBar.tsx";

type SkillCategory = 'all' | 'frontend' | 'backend' | 'design' | 'other';

const iconMap: Record<string, any> = {
    code: Code,
    server: Server,
    'pen-tool': PenTool,
    box: Box,
    'git-branch': Box,
    database: Server,
};

const Skills: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

    const filteredSkills = activeCategory === 'all'
        ? SKILLS
        : SKILLS.filter(skill => skill.category === activeCategory);

    const categories = [
        { id: 'all', name: 'All Skills', icon: <Box className="h-5 w-5" /> },
        { id: 'frontend', name: 'Frontend', icon: <Code className="h-5 w-5" /> },
        { id: 'backend', name: 'Backend', icon: <Server className="h-5 w-5" /> },
        { id: 'design', name: 'Design', icon: <PenTool className="h-5 w-5" /> },
        { id: 'other', name: 'Other', icon: <Box className="h-5 w-5" /> },
    ];

    return (
        <AnimatedSection id="skills" className="bg-gray-50 dark:bg-gray-800">
            <SectionTitle
                title="Skills & Expertise"
                subtitle="Technologies I work with regularly"
                centered
            />

            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id as SkillCategory)}
                        className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                            activeCategory === category.id
                                ? 'bg-primary-500 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                    >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                    </button>
                ))}
            </div>

            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {filteredSkills.map((skill, index) => (
                    <SkillCard
                        key={skill.name}
                        name={skill.name}
                        icon={iconMap[skill.icon] || Box}
                        index={index}
                    />
                ))}
            </motion.div>
        </AnimatedSection>
    );
};

export default Skills;

