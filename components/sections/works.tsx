'use client';

import { useState } from 'react';
import SectionHeading from '@/components/ui/section-heading';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image from 'next/image';

// Örnek projeler - kendi projelerinizle değiştirebilirsiniz
const projects = [
  {
    title: 'Modern Portfolio',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS.',
    image: 'https://via.placeholder.com/600x340',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/akira/portfolio',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration.',
    image: 'https://via.placeholder.com/600x340',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/akira/ecommerce',
  },
  {
    title: 'Task Manager',
    description: 'A task management application with drag-and-drop functionality.',
    image: 'https://via.placeholder.com/600x340',
    tags: ['React', 'TypeScript', 'Firebase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/akira/taskmanager',
  },
  {
    title: 'Weather App',
    description: 'A weather application that shows current weather and forecasts.',
    image: 'https://via.placeholder.com/600x340',
    tags: ['JavaScript', 'API', 'CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/akira/weather-app',
  },
];

// Proje kategorileri
const categories = ['All', 'Web', 'Mobile', 'Design', 'Other'];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => {
        // Bu kısmı kendi kategorilerinize göre düzenleyin
        if (activeCategory === 'Web') return project.tags.includes('React') || project.tags.includes('Next.js');
        if (activeCategory === 'Mobile') return project.tags.includes('React Native') || project.tags.includes('Flutter');
        if (activeCategory === 'Design') return project.tags.includes('UI/UX') || project.tags.includes('Figma');
        return false;
      });

  return (
    <section id="works" className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Works"
          subtitle="Check out some of my recent projects"
        />
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative aspect-video">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={340} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-semibold">{project.title}</h3>
                      <div className="flex space-x-2">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-zinc-800/80 hover:bg-purple-600 rounded-full text-white transition-colors"
                          aria-label="Visit website"
                        >
                          <FiExternalLink size={16} />
                        </a>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-zinc-800/80 hover:bg-purple-600 rounded-full text-white transition-colors"
                          aria-label="View source code"
                        >
                          <FiGithub size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-zinc-800 rounded-md text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;