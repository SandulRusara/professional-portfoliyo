// import React from 'react';
// import { motion } from 'framer-motion';
//
// interface SkillBarProps {
//   name: string;
//   proficiency: number;
//   delay?: number;
// }
//
// const SkillBar: React.FC<SkillBarProps> = ({ name, proficiency, delay = 0 }) => {
//   return (
//     <div className="mb-4">
//       <div className="flex justify-between mb-1">
//         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
//         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{proficiency}%</span>
//       </div>
//       <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//         <motion.div
//           className="h-full bg-primary-600 dark:bg-primary-500 rounded-full"
//           initial={{ width: 0 }}
//           whileInView={{ width: `${proficiency}%` }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: delay * 0.1, ease: 'easeOut' }}
//         />
//       </div>
//     </div>
//   );
// };
//
// export default SkillBar;
//
//


// components/UI/SkillCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
    name: string;
    icon: LucideIcon;
    index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, index }) => {
    return (
        <motion.div
            className="flex items-center gap-4 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-4 rounded-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
        >
            <div className="text-primary-500">
                <Icon className="w-6 h-6" />
            </div>
            <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
        </motion.div>
    );
};

export default SkillCard;

