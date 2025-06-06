import { Project, Skill, SocialLink, NavItem, Education, Experience } from '../types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '#home',
    icon: 'home',
  },
  {
    label: 'About',
    href: '#about',
    icon: 'user',
  },
  {
    label: 'Skills',
    href: '#skills',
    icon: 'code',
  },
  {
    label: 'Projects',
    href: '#projects',
    icon: 'folder',
  },
  {
    label: 'Experience',
    href: '#experience',
    icon: 'briefcase',
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: 'mail',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/SandulRusara',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sandul-rusara-94a9a72ab/',
    icon: 'linkedin',
  },
  // {
  //   name: 'Twitter',
  //   url: 'https://twitter.com/yourusername',
  //   icon: 'twitter',
  // },
  {
    name: 'Email',
    url: 'mailto:sandulrusara8@gmail.com',
    icon: 'mail',
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: 'React',
    icon: 'code',
    proficiency: 90,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: 'code',
    proficiency: 85,
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    icon: 'code',
    proficiency: 95,
    category: 'frontend',
  },
  {
    name: 'HTML/CSS',
    icon: 'code',
    proficiency: 90,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: 'code',
    proficiency: 85,
    category: 'frontend',
  },
  // Backend
  {
    name: 'Node.js',
    icon: 'server',
    proficiency: 80,
    category: 'backend',
  },
  {
    name: 'Express',
    icon: 'server',
    proficiency: 75,
    category: 'backend',
  },
  {
    name: 'MongoDB',
    icon: 'database',
    proficiency: 70,
    category: 'backend',
  },
  {
    name: 'PostgreSQL',
    icon: 'database',
    proficiency: 65,
    category: 'backend',
  },
  // Design
  {
    name: 'Figma',
    icon: 'pen-tool',
    proficiency: 80,
    category: 'design',
  },
  {
    name: 'Adobe XD',
    icon: 'pen-tool',
    proficiency: 75,
    category: 'design',
  },
  // Other
  {
    name: 'Git',
    icon: 'git-branch',
    proficiency: 85,
    category: 'other',
  },
  {
    name: 'Docker',
    icon: 'box',
    proficiency: 70,
    category: 'other',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Chat Application',
    description: 'The Java Chat Application is a real-time messaging platform developed using Java, designed to enable seamless communication between users over a network. It supports both client-server architecture and peer-to-peer chat features, allowing for flexible deployment in LAN or internet environments.',
    image: 'src/images/Java-TCP-Client-Server-Applications.png',
    tags: ['Java', 'Socket', 'HTML', 'FXML'],
    demoLink: 'https://github.com/SandulRusara/ChatApplication-sandul.git',
    codeLink: 'https://github.com/SandulRusara/ChatApplication-sandul.git',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Green Shadow',
    description: 'Development a system with secure data management, robust functionality, and a dynamic user interface.',
    image: 'src/images/greenshadow.jpeg',
    tags: ['Springboot', 'JWT', 'MySQL', 'Context API','Hibernate'],
    demoLink: 'https://github.com/SandulRusara/green-shadow-final-backend.git',
    codeLink: 'https://github.com/SandulRusara/green-shadow-final-backend.git',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Hey Doggy',
    description: 'Hey Doggy is a pet care app built with React Native,MomgoDB and an Express API.It offers a user-friendly interface for managing and taraking pet care, ensuring reliable data handaling.',
    image: 'src/images/doggy.jpg',
    tags: ['React Native', 'MongoDB', 'Express API', 'Responsive Design'],
    demoLink: 'https://github.com/SandulRusara/mobileApplication.git',
    codeLink: 'https://github.com/SandulRusara/mobileApplication.git',
    featured: false,
  },
  {
    id: 'project-4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with HTML and CSS. Features smooth animations, responsive design, and showcases projects and skills.',
    image: 'src/images/Port-poliyo .png',
    tags: ['HTML', 'CSS', 'Java Script', 'Responsive'],
    demoLink: 'https://github.com/SandulRusara/port-poliyo.git',
    codeLink: 'https://github.com/SandulRusara/port-poliyo.git',
    featured: false,
  },
  {
    id: 'project-5',
    title: 'Recipe Finder App',
    description: 'An application that helps users discover recipes based on available ingredients. Integrates with a food API and provides filtering options for dietary restrictions.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'API Integration', 'CSS Grid', 'Responsive Design'],
    demoLink: 'https://github.com/SandulRusara/recipe-app-new.git',
    codeLink: 'https://github.com/SandulRusara/recipe-app-new.git',
    featured: false,
  },
  {
    id: 'project-6',
    title: 'Juice Bar',
    description: 'Juice Bar is a vibrant and health-focused beverage spot dedicated to serving fresh, nutritious, and delicious juices, smoothies, and wellness shots. We use only the finest fruits, vegetables, and natural ingredients  with no artificial additives  to energize your day and support a healthy lifestyle.',
    image: 'src/images/juiceBar.jpg',
    tags: ['FXML', 'Layerd', 'Authentication'],
    demoLink: 'https://github.com/SandulRusara/first-sem-fina.git',
    codeLink: 'https://github.com/SandulRusara/first-sem-fina.git',
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: '3Sixty innovations Pvt Ltd',
    position: 'Front-end Developer',
    duration: 'Aug 2023 - Present',
    description: 'I have worked as a front end developer on a project to build a system for an eye examination hospital.',
    skills: ['HTML,CSS'],
  },
  {
    company: '3Sixty innovations Pvt Ltd',
    position: 'Front-end Developer',
    duration: 'Aug 2023 - Present',
    description: 'I have worked as a front end developer on a project to build a system for an eye examination hospital.',
    skills: ['HTML,CSS'],
  },
  // {
  //   company: 'WebTech Startup',
  //   position: 'Junior Developer',
  //   duration: 'Jun 2017 - Feb 2019',
  //   description: 'Contributed to the development of the company\'s web application. Implemented UI components and integrated APIs.',
  //   skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
  // },
];

export const EDUCATION: Education[] = [
  {
    institution: 'Kalutara Vidyalaya',
    degree: 'GCE Advanced Level & GCE Ordinary Level In Sri Lanka',
    duration: '2021 - 2018',
    description: 'Studied  as a school student',
  },
  {
    institution: 'IJSE - Institute of Software Engineering',
    degree: 'Graduate Diploma in Computer Science',
    duration: '2023 - 2025',
    description: 'Graduated with honors. Coursework included data structures, algorithms, database systems, and web development.',
  },
];

export const ABOUT_ME = {
  title: 'About Me',
  description: `Hello! I'm Sandul Rusara, a 22-year-old aspiring Full Stack Developer based in Kalutara, Sri Lanka. I am currently pursuing my studies at IJSE (Institute of Java and Software Engineering), where I’ve been given the essential tools and guidance to develop my skills in programming.

From the beginning, I’ve been passionate about using technology to solve real-world problems. I believe that being a programmer means constantly thinking creatively, learning continuously, and finding efficient solutions to complex challenges. That mindset drives me every day.

I’ve chosen this path because I see endless opportunities in it — opportunities to grow, innovate, and make a real impact. My ultimate goal is to become a skilled and reliable Full Stack Developer, capable of building powerful and user-friendly web applications from end to end.

I’m currently expanding my knowledge in both frontend and backend technologies, including JavaScript, React, Node.js, Express, databases, and more — and I’m excited to continue growing in this ever-evolving field.`,
  image: 'src/images/homePagePhoto.jpg',
};