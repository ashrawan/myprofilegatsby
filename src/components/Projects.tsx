import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { myPortfolio } from '../data/portfolio';
import { Github, ExternalLink, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof myPortfolio[0] | null>(null);

  const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              {/* Project Image */}
              <div className="relative h-64">
                <img
                  src={`/images/${selectedProject.projectImage.imageName}`}
                  alt={selectedProject.projectImage.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-50 p-2 rounded-full bg-gray-800/90 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                      {selectedProject.caption}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        {selectedProject.link.includes('github.com') ? (
                          <>
                            <Github className="w-5 h-5" />
                            <span>GitHub</span>
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                          </>
                        )}
                      </a>
                    )}
                    {selectedProject.blogLink && (
                      <a
                        href={selectedProject.blogLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Blog</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project details */}
                <div className="space-y-4">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-300">Project Overview</h4>
                    <ul className="space-y-3">
                      {selectedProject.longDescription && (
                        <li className="text-gray-300 flex items-start gap-3">
                          <span className="text-purple-400">•</span>
                          <span>{selectedProject.longDescription}</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-300">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack && (
                        selectedProject.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  {(selectedProject.githubLink || selectedProject.demoLink) && (
                    <div className="space-y-4 mt-4">
                      <h4 className="text-lg font-semibold text-gray-300">Project Links</h4>
                      <div className="flex flex-wrap gap-4">
                        {selectedProject.githubLink && (
                          <a
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                            <span>GitHub Repository</span>
                          </a>
                        )}
                        {selectedProject.demoLink && (
                          <a
                            href={selectedProject.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section className="py-20 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myPortfolio.map((project, index) => (
            <motion.div
              key={project.caption}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
              
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
                {/* Project Image */}
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
                  <motion.div
                    initial={false}
                    animate={{
                      scale: hoveredProject === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20" />
                    <img
                      src={`/images/${project.projectImage.imageName}`}
                      alt={project.caption}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.caption}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.desc}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.desc.split(', ').slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-gray-800/80 text-gray-200 border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.desc.split(', ').length > 3 && (
                      <span className="px-3 py-1 text-sm rounded-full bg-gray-800/80 text-gray-200 border border-gray-700/50">
                        +{project.desc.split(', ').length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.link.includes('github.com') && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                      </motion.a>
                    )}
                    {project.blogLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.blogLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Blog</span>
                      </motion.a>
                    )}
                    {!project.link.includes('github.com') && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal selectedProject={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};

export default Projects;