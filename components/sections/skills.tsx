'use client';

import { useState } from 'react';
import SectionHeading from '@/components/ui/section-heading';
import { 
  SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiNodedotjs, SiDiscord, 
  SiMongodb, SiExpress, SiTypescript, SiLua, SiGnometerminal, SiGit, 
  SiNpm, SiAdobephotoshop, SiAdobepremierepro 
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa'; // Bun için geçici ikon

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    { name: 'All', color: 'bg-purple-600' },
    { name: 'Frontend', color: 'bg-zinc-700' },
    { name: 'Backend', color: 'bg-zinc-700' },
    { name: 'Languages', color: 'bg-zinc-700' },
    { name: 'Tools', color: 'bg-zinc-700' },
    { name: 'Design', color: 'bg-zinc-700' },
  ];
  
  const skills = [
    // Frontend
    { name: 'JavaScript', icon: <SiJavascript size={20} />, category: 'Frontend' },
    { name: 'HTML5', icon: <SiHtml5 size={20} />, category: 'Frontend' },
    { name: 'CSS', icon: <SiCss3 size={20} />, category: 'Frontend' },
    { name: 'Bootstrap', icon: <SiBootstrap size={20} />, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', icon: <SiNodedotjs size={20} />, category: 'Backend' },
    { name: 'Discord.js', icon: <SiDiscord size={20} />, category: 'Backend' },
    { name: 'MongoDB', icon: <SiMongodb size={20} />, category: 'Backend' },
    { name: 'Express.js', icon: <SiExpress size={20} />, category: 'Backend' },
    { name: 'TypeScript', icon: <SiTypescript size={20} />, category: 'Backend' },
    { name: 'Lua', icon: <SiLua size={20} />, category: 'Backend' },
    
    // Tools
    { name: 'Terminal', icon: <SiGnometerminal size={20} />, category: 'Tools' },
    { name: 'Git', icon: <SiGit size={20} />, category: 'Tools' },
    { name: 'pnpm', icon: <SiNpm size={20} />, category: 'Tools' },
    { name: 'Bun', icon: <FaDatabase size={20} />, category: 'Tools' },
    
    // Design
    { name: 'Photoshop', icon: <SiAdobephotoshop size={20} />, category: 'Design' },
    { name: 'Premiere Pro', icon: <SiAdobepremierepro size={20} />, category: 'Design' },
  ];

  // Filtreleme
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Stack"
          subtitle="Languages and technologies I use"
        />
        
        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.name 
                  ? 'bg-purple-600 text-white' 
                  : `${category.color} text-zinc-400 hover:text-white`
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Beceriler Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-zinc-900 rounded-lg p-3 flex items-center space-x-2 hover:bg-zinc-800/80 transition-all duration-300"
            >
              <div className="text-white">
                {skill.icon}
              </div>
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;