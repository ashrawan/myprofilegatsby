import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { myPortfolio } from '../data/portfolio';
import { Github, ExternalLink, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof myPortfolio[0] | null>(null);

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
                      src={`/src/images/${project.projectImage.imageName}`}
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
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Project Image */}
                <div className="relative h-64 -mx-6 -mt-6 mb-6">
                  <img
                    src={`/src/images/${selectedProject.projectImage.imageName}`}
                    alt={selectedProject.projectImage.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
                </div>

                {/* Project Content */}
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.caption}</h2>
                
                {selectedProject.longDescription && (
                  <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                )}

                {selectedProject.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.techStack && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-200 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Links */}
                <div className="flex gap-4 mt-6">
                  {selectedProject.link.includes('github.com') && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>View on GitHub</span>
                    </motion.a>
                  )}
                  {!selectedProject.link.includes('github.com') && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Visit Project</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;