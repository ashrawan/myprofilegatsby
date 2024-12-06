import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/constants';

interface Experience {
  company: string;
  title: string;
  period: string;
  companyUrl: string;
  subTitle?: string;
  description: string[];
  technologies: string[];
}

interface ExperienceModalProps {
  experience: Experience;
  isOpen: boolean;
  onClose: () => void;
}

const CompanyLogo: React.FC<{ company: string; size?: 'sm' | 'lg' }> = ({ company, size = 'sm' }) => {
  const firstLetter = company.charAt(0);
  const sizeClasses = size === 'lg' ? 'w-16 h-16 text-2xl' : 'w-12 h-12 text-xl';
  
  return (
    <div 
      className={`${sizeClasses} rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-700/50 group-hover:border-gray-600/50 transition-colors`}
    >
      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        {firstLetter}
      </span>
    </div>
  );
};

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, isOpen, onClose }) => {
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
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CompanyLogo company={experience.company} size="lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                  <a 
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-800">
                <span className="text-xl text-purple-400">{experience.title}</span>
                <span className="text-gray-400">{experience.period}</span>
              </div>
              
              {experience.subTitle && (
                <p className="text-gray-500">{experience.subTitle}</p>
              )}

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">Key Achievements</h4>
                <ul className="space-y-3">
                  {experience.description.map((desc, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-3">
                      <span className="text-purple-400">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ExperienceCard: React.FC<{ experience: Experience; index: number; onSelect: () => void }> = ({ 
  experience, 
  index,
  onSelect
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row gap-8 ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="absolute inset-0 rounded-full animate-ping bg-purple-500 opacity-25"></div>
      </div>

      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
        <motion.div
          className="group bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          onClick={onSelect}
        >
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="flex items-center gap-4 mb-4">
            <CompanyLogo company={experience.company} />
            <div>
              <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
              <span className="text-gray-400">{experience.period}</span>
            </div>
          </div>

          <div className="space-y-2 relative">
            <span className="text-xl text-purple-400">{experience.title}</span>
            {experience.subTitle && (
              <p className="text-gray-500 text-sm">{experience.subTitle}</p>
            )}
          </div>

          {/* View Details Button */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={onSelect}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              View Details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black" id="experience">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
          
          <div className="space-y-12">
            {personalInfo.experience.map((exp, index) => (
              <ExperienceCard 
                key={exp.company} 
                experience={exp} 
                index={index}
                onSelect={() => setSelectedExperience(exp)}
              />
            ))}
          </div>
        </div>
      </div>

      <ExperienceModal
        experience={selectedExperience!}
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
};

export default Experience;