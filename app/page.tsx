'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Works from '@/components/sections/works';
import Contact from '@/components/sections/contact';
import FloatingNavbar from '@/components/shared/floating-navbar';
import Loader from '@/components/loader';
import { FiArrowUp } from 'react-icons/fi';
import SWR from '@/lib/swr';
import { DiscordUserData, GithubRepositoriesData } from '@/types';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const discord = SWR('discord');
  const discordUser: DiscordUserData | null = discord.data ? discord.data : null;

  const github = SWR('github');
  const githubUser: GithubRepositoriesData[] | null = github.data ? github.data : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulated loading - daha uzun süre
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 saniye

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="pt-8 pb-24">
        <Hero discord={discordUser} />
        <About />
        <Skills />
        <Projects />
        <Works />
        <Contact />
      </div>
      
      <FloatingNavbar />
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 text-white shadow-lg transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={24} />
      </button>
    </>
  );
}