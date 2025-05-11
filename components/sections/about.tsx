'use client';

import SectionHeading from '@/components/ui/section-heading';
import { FiClock, FiMail, FiMapPin, FiUser, FiCalendar, FiCode } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const About = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const istanbulTime = new Date(time.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
  const formattedTime = istanbulTime.toLocaleTimeString();
  const formattedDate = istanbulTime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <section id="about" className="section-padding bg-secondary/5">
      <div className="container-custom">
        <SectionHeading 
          title="About Me"
          subtitle="Get to know more about me and my background"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground/90">
              Hello! I'm Akira, a passionate developer and designer based in Istanbul, Turkey. I specialize in creating beautiful, functional, and user-centered digital experiences.
            </p>
            
            <p className="text-lg text-foreground/90">
              With a background in both design and development, I bring a unique perspective to every project. I believe that good design is not just about aesthetics, but also about creating intuitive and enjoyable user experiences.
            </p>
            
            <p className="text-lg text-foreground/90">
              When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or enjoying the beautiful sights of Istanbul.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FiUser size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Name</p>
                  <p className="font-medium">Akira</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a href="mailto:akira.info@gmail.com" className="font-medium hover:text-primary transition-colors">
                    akira.info@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-medium">Istanbul, Turkey</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FiClock size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Local Time</p>
                  <p className="font-medium">{formattedTime}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-200">
            <div className="relative z-10 bg-card rounded-2xl overflow-hidden shadow-xl">
              <div className="p-1 bg-gradient">
                <div className="bg-card p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Experience</h3>
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <FiCode size={20} />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-primary"></div>
                      <h4 className="text-lg font-semibold">Senior Frontend Developer</h4>
                      <p className="text-muted-foreground">Tech Company • 2021 - Present</p>
                      <p className="mt-2">Leading frontend development for various web applications.</p>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-primary/70"></div>
                      <h4 className="text-lg font-semibold">UI/UX Designer</h4>
                      <p className="text-muted-foreground">Design Studio • 2019 - 2021</p>
                      <p className="mt-2">Designed user interfaces for web and mobile applications.</p>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-primary/50"></div>
                      <h4 className="text-lg font-semibold">Junior Developer</h4>
                      <p className="text-muted-foreground">Startup • 2017 - 2019</p>
                      <p className="mt-2">Developed and maintained web applications.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;