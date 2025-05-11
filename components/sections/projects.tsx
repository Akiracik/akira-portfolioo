'use client';

import { useState, useEffect } from 'react';
import SectionHeading from '@/components/ui/section-heading';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiCode } from 'react-icons/fi';
import { GithubRepositoriesData } from '@/types';
import { projects as fallbackProjects } from '@/lib/constants';
import SWR from '@/lib/swr';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<GithubRepositoriesData[]>([]);
  
  const { data: githubRepos, isLoading } = SWR('github');
  
  // GitHub repo'larını filtrele (fork olmayanlar, açıklama içerenler, vb.)
  useEffect(() => {
    if (githubRepos) {
      const repos = githubRepos
        .filter((repo: GithubRepositoriesData) => !repo.fork && repo.description)
        .sort((a: GithubRepositoriesData, b: GithubRepositoriesData) => 
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        .slice(0, 6);
      
      setFilteredProjects(repos);
    }
  }, [githubRepos]);
  
  // Dil filtresi için dilleri topla
  const languages = githubRepos 
    ? Array.from(new Set(githubRepos.map((repo: GithubRepositoriesData) => repo.language).filter(Boolean))) as string[]
    : [];
  
  // Filtreleme fonksiyonu
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredProjects(
        githubRepos
          .filter((repo: GithubRepositoriesData) => !repo.fork && repo.description)
          .sort((a: GithubRepositoriesData, b: GithubRepositoriesData) => 
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          )
          .slice(0, 6)
      );
    } else {
      setFilteredProjects(
        githubRepos
          .filter((repo: GithubRepositoriesData) => 
            !repo.fork && repo.description && repo.language === filter
          )
          .sort((a: GithubRepositoriesData, b: GithubRepositoriesData) => 
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          )
          .slice(0, 6)
      );
    }
  };
  
  // Renk kodları (GitHub dillerine göre)
  const languageColors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Java: '#b07219',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Rust: '#DEA584',
    Dart: '#00B4AB',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
  };
  
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="Repositories"
          subtitle="Check out some of my recent work from GitHub"
        />
        
        {/* Filter Buttons */}
        {languages.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              All
            </button>
            
            {languages.map((language: string) => (
              <button
                key={language}
                onClick={() => handleFilterChange(language)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === language 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        )}
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredProjects && filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <FiGithub size={24} />
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                        aria-label="View source code"
                      >
                        <FiCode size={16} />
                      </a>
                      {project.homepage && (
                        <a 
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                          aria-label="Visit live site"
                        >
                          <FiExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    {project.language && (
                      <div className="flex items-center">
                        <span 
                          className="w-3 h-3 rounded-full mr-1"
                          style={{ backgroundColor: languageColors[project.language] || '#8b949e' }}
                        ></span>
                        <span className="text-sm">{project.language}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center text-sm">
                      <FiStar className="mr-1" />
                      <span>{project.stargazers_count}</span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <FiGitBranch className="mr-1" />
                      <span>{project.forks_count}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Updated on {new Date(project.updated_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallbackProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-secondary/30">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-secondary/50 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      <FiGithub className="mr-1" /> Source Code
                    </a>
                    <a 
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      <FiExternalLink className="mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <a 
            href={`https://github.com/${githubRepos?.[0]?.owner?.login || 'akira'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <FiGithub className="mr-2" /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
