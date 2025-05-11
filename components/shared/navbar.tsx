'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiUser, FiMail, FiCode, FiGithub, FiHeart, FiLayers } from 'react-icons/fi';
import Link from 'next/link';
import { DiscordUserData } from '@/types';

interface NavbarProps {
  discord: DiscordUserData | null;
}

const Navbar = ({ discord }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about', icon: <FiUser size={20} /> },
    { name: 'Skills', to: 'skills', icon: <FiCode size={20} /> },
    { name: 'Projects', to: 'projects', icon: <FiLayers size={20} /> },
    { name: 'Contact', to: 'contact', icon: <FiMail size={20} /> },
  ];

  // Discord avatar URL
  const avatarUrl = discord?.discord_user?.avatar 
    ? `https://cdn.discordapp.com/avatars/${discord.discord_user.id}/${discord.discord_user.avatar}.png?size=128`
    : '/placeholder-avatar.png'; // Placeholder avatar

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/80 backdrop-blur-md text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="text-center text-sm text-zinc-400">My Social Media Accounts</div>
        </div>
      </div>
      
      <nav className="bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo/Avatar */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500">
                  <img 
                    src={avatarUrl} 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-white">
                  {discord?.discord_user?.global_name || discord?.discord_user?.username || 'Akira'}
                </span>
              </Link>
            </div>
            
            {/* Navigation Icons */}
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={`#${link.to}`}
                  className="p-3 text-zinc-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
              
              <a
                href="https://github.com/akiracik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              
              <a
                href="#projects"
                className="p-3 text-zinc-400 hover:text-white transition-colors"
                aria-label="Favorites"
              >
                <FiHeart size={20} />
              </a>
              
              <a
                href="#skills"
                className="p-3 text-zinc-400 hover:text-white transition-colors"
                aria-label="Skills"
              >
                <FiLayers size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;