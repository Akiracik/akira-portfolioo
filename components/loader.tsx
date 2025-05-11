'use client';

import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');
  const [showName, setShowName] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  
  useEffect(() => {
    // CSS animasyonları için stil ekle
    const addAnimationStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: 1000;
          }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        // Temizlik fonksiyonu
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    };
    
    // Stil ekle
    const cleanup = addAnimationStyles();
    
    // Progress bar animasyonu - daha yumuşak
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Yavaşlayan ilerleme
        const increment = Math.max(1, 10 - Math.floor(prev / 10));
        return Math.min(100, prev + increment);
      });
    }, 100);
    
    // Loading text animasyonu
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        if (prev === 'Initializing') return 'Loading assets';
        if (prev === 'Loading assets') return 'Preparing UI';
        if (prev === 'Preparing UI') return 'Almost ready';
        return 'Welcome';
      });
    }, 800);
    
    // İsim animasyonu
    setTimeout(() => {
      setShowName(true);
      
      // Alt başlık animasyonu
      setTimeout(() => {
        setShowSubtitle(true);
      }, 700);
    }, 500);
    
    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
      cleanup();
    };
  }, []);
  
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Arka plan animasyonu - daha yumuşak */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient arka plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>
        
        {/* Animasyonlu parçacıklar */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
              style={{
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                transform: `scale(${Math.random() * 0.5 + 0.5})`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Animasyonlu çizgiler - window.innerWidth kullanımını kaldırdık */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {[...Array(10)].map((_, i) => {
            const y = Math.random() * 100;
            const animationDuration = Math.random() * 20 + 20;
            return (
              <path 
                key={i}
                d={`M0,${y} Q${Math.random() * 500 + 250},${y + (Math.random() * 100 - 50)} 1000,${y + (Math.random() * 100 - 50)}`}
                stroke="url(#grad1)"
                strokeWidth="1"
                fill="none"
                style={{
                  animation: `dash ${animationDuration}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            );
          })}
        </svg>
      </div>
      
      {/* İsim animasyonu */}
      <div className={`mb-6 transition-all duration-1000 ease-out ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          AKIRA
        </h1>
      </div>
      
      {/* Alt başlık */}
      <div className={`mb-12 transition-all duration-1000 ease-out ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <p className="text-zinc-400 text-xl">Developer & Designer</p>
      </div>
      
      {/* Yükleme göstergesi */}
      <div className="w-64 md:w-96 bg-zinc-800/50 backdrop-blur-sm rounded-full h-2 mb-4 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Yükleme metni */}
      <div className="text-zinc-400 text-sm md:text-base font-light">
        {loadingText}
        <span className="inline-flex w-12">
          <span className="animate-[bounce_1s_ease-in-out_infinite]">.</span>
          <span className="animate-[bounce_1s_ease-in-out_0.2s_infinite]">.</span>
          <span className="animate-[bounce_1s_ease-in-out_0.4s_infinite]">.</span>
        </span>
      </div>
      
      {/* Yükleme yüzdesi */}
      <div className="absolute bottom-8 right-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {progress}%
      </div>
      
      {/* Küçük detaylar */}
      <div className="absolute bottom-8 left-8 text-xs text-zinc-600">
        © {new Date().getFullYear()} Akira • All rights reserved
      </div>
    </div>
  );
};

export default Loader;
