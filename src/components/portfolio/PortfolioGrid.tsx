
import { PortfolioProject } from '../../types/portfolio';
import PortfolioCard from './PortfolioCard';

interface PortfolioGridProps {
  projects: PortfolioProject[];
  onProjectClick: (project: PortfolioProject) => void;
}

export default function PortfolioGrid({ projects, onProjectClick }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <PortfolioCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </div>
  );
}