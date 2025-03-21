
import { X, ExternalLink, Figma } from 'lucide-react';
import { PortfolioProject } from '../../types/portfolio';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - View ${index + 1}`}
                className="w-full rounded-lg shadow-md"
              />
            ))}
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Challenge</h3>
              <p className="text-gray-600">{project.challenge}</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Approach</h3>
              <p className="text-gray-600">{project.approach}</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Outcome</h3>
              <p className="text-gray-600">{project.outcome}</p>
            </section>

            <div className="flex gap-4 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Live Project
                </a>
              )}
              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <Figma className="w-5 h-5 mr-2" />
                  View in Figma
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}