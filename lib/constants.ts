// Discord ve GitHub kullanıcı bilgileri
export const discordId = '337545269845688361'; // Discord kullanıcı ID'nizi buraya girin
export const githubUsername = 'akiracik'; // GitHub kullanıcı adınızı buraya girin

// Sosyal medya linkleri
export const socialLinks = [
  { name: 'GitHub', url: `https://github.com/${githubUsername}`, icon: 'github' },
  { name: 'Twitter', url: 'https://twitter.com/akiracikk', icon: 'twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/akira-slora-406412361', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/akiracikk', icon: 'instagram' },
];

// Beceriler
export const skills = [
  { name: 'React', icon: '/icons/react.svg', category: 'frontend' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', category: 'frontend' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'language' },
  { name: 'JavaScript', icon: '/icons/javascript.svg', category: 'language' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg', category: 'frontend' },
  { name: 'Node.js', icon: '/icons/nodejs.svg', category: 'backend' },
  { name: 'Express', icon: '/icons/express.svg', category: 'backend' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg', category: 'database' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg', category: 'database' },
  { name: 'Figma', icon: '/icons/figma.svg', category: 'design' },
  { name: 'Git', icon: '/icons/git.svg', category: 'tool' },
  { name: 'Docker', icon: '/icons/docker.svg', category: 'tool' },
];

// Projeler (fallback olarak kullanılacak, GitHub'dan çekilemezse)
export const projects = [
  {
    name: 'Portfolio Website',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS',
    image: '/images/projects/portfolio.jpg',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    sourceCode: 'https://github.com/akiracik/portfolio',
    liveDemo: 'https://akira.dev',
  },
  {
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration',
    image: '/images/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    sourceCode: 'https://github.com/akiracik/ecommerce',
    liveDemo: 'https://shop.akira.dev',
  },
  {
    name: 'Task Manager',
    description: 'A task management application with drag-and-drop functionality',
    image: '/images/projects/taskmanager.jpg',
    tags: ['React', 'TypeScript', 'Firebase'],
    sourceCode: 'https://github.com/akiracik/taskmanager',
    liveDemo: 'https://tasks.akira.dev',
  },
];