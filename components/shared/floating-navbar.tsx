'use client';

import { useState } from 'react';
import { FiUser, FiMail, FiGithub, FiBriefcase, FiCode } from 'react-icons/fi';
import Link from 'next/link';

const FloatingNavbar = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const navItems = [
    { icon: <FiUser size={20} />, label: 'Profile', href: '#about' },
    { icon: <FiMail size={20} />, label: 'Contact', href: '#contact' },
    { icon: <FiGithub size={20} />, label: 'My Repositories', href: '#projects' },
    { icon: <FiBriefcase size={20} />, label: 'Works', href: '#works' },
    { icon: <FiCode size={20} />, label: 'Skills', href: '#skills' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full px-4 py-3 flex items-center shadow-xl">
        <div className="flex items-center space-x-1">
          <Link href="/" className="text-purple-400 font-bold px-3">
            Akira
          </Link>
          
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <a
                href={item.href}
                className="p-2 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-125 rounded-full block"
                aria-label={item.label}
                onMouseEnter={() => setActiveTooltip(item.label)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                {item.icon}
              </a>
              
              {activeTooltip === item.label && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded whitespace-nowrap">
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;