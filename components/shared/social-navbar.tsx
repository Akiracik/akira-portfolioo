'use client';

import { useState, useEffect } from 'react';
import { FiUser, FiMail, FiCode, FiBox, FiHeart, FiLayers, FiPackage } from 'react-icons/fi';
import Link from 'next/link';

const SocialNavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/80 backdrop-blur-md text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="text-center text-sm text-zinc-400">My Social Media Accounts</div>
        </div>
      </div>
      
      <nav className="bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center">
            <div className="bg-zinc-900 rounded-full px-4 py-2 flex items-center space-x-4 border border-zinc-800">
              <Link href="/" className="text-purple-400 font-bold">
                Akira
              </Link>
              
              <a
                href="#"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Profile"
              >
                <FiUser size={20} />
              </a>
              
              <a
                href="#"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Mail"
              >
                <FiMail size={20} />
              </a>
              
              <a
                href="#"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Code"
              >
                <FiCode size={20} />
              </a>
              
              <a
                href="#"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Projects"
              >
                <FiBox size={20} />
              </a>
              
              <a
                href="#"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Favorites"
              >
                <FiHeart size={20} />
              </a>
              
              <a
                href="#"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Collections"
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

export default SocialNavbar;