import { useState, useMemo } from 'react';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioFilter from '../components/portfolio/PorfolioFilter';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import ProjectModal from '../components/portfolio/ProjectModal';
import { portfolioProjects } from '../data/portfolio';
import { PortfolioProject, PortfolioCategory } from '../types/portfolio';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: PortfolioCategory[] = ['all', 'web', 'mobile', 'branding'];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return portfolioProjects;
    return portfolioProjects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <PortfolioHero />
      
      <div className="container mx-auto px-6 py-16">
        <PortfolioFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <PortfolioGrid
          projects={filteredProjects}
          onProjectClick={setSelectedProject}
        />
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}