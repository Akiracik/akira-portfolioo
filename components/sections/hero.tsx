'use client';

import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';
import { DiscordUserData } from '@/types';
import Image from 'next/image';

interface HeroProps {
  discord: DiscordUserData | null;
}

const Hero = ({ discord }: HeroProps) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Developer & Designer';
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  // Discord avatar URL
  const avatarUrl = discord?.discord_user?.avatar 
    ? `https://cdn.discordapp.com/avatars/${discord.discord_user.id}/${discord.discord_user.avatar}.png?size=256`
    : 'https://cdn.discordapp.com/emojis/1246943959679369216.gif?size=128&quality=lossless';

  return (
    <section className="min-h-[80vh] flex items-center pt-32 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-purple-400 font-medium text-lg mb-3">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-purple-500">
                Akira
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-300 h-8">
                {typedText}<span className="animate-pulse">|</span>
              </h2>
            </div>
            
            <p className="text-zinc-400 text-lg max-w-xl">
              I create exceptional digital experiences that inspire and connect with people.
              Specializing in web development and UI/UX design with a passion for creating
              innovative solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg group flex items-center"
              >
                View My Work <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-zinc-700 hover:border-purple-500 text-zinc-300 hover:text-white rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
            
            <div className="pt-4">
              <p className="text-zinc-500 mb-3">Find me on</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-800 hover:bg-purple-600 rounded-full text-zinc-400 hover:text-white transition-all hover:-translate-y-1"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-800 hover:bg-purple-600 rounded-full text-zinc-400 hover:text-white transition-all hover:-translate-y-1"
                >
                  <FiTwitter size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-800 hover:bg-purple-600 rounded-full text-zinc-400 hover:text-white transition-all hover:-translate-y-1"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-800 hover:bg-purple-600 rounded-full text-zinc-400 hover:text-white transition-all hover:-translate-y-1"
                >
                  <FiInstagram size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-800 hover:bg-purple-600 rounded-full text-zinc-400 hover:text-white transition-all hover:-translate-y-1"
                >
                  <FiYoutube size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative z-10 w-full h-full rounded-full border-2 border-purple-500 p-1 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                  <Image 
                    src={avatarUrl}
                    alt="Akira" 
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-0 right-0 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg px-3 py-1 text-sm animate-float delay-200">
                <span className="font-medium text-purple-400">Developer</span>
              </div>
              
              <div className="absolute bottom-10 left-0 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg px-3 py-1 text-sm animate-float delay-300">
                <span className="font-medium text-purple-400">UI/UX</span>
              </div>
              
              <div className="absolute bottom-0 right-10 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg px-3 py-1 text-sm animate-float delay-400">
                <span className="font-medium text-purple-400">Thinker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;