import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageRevealed, setIsImageRevealed] = useState(false);
  const visionAreas = personalInfo.vision.areas;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visionAreas.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(timer);
  }, [visionAreas.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + visionAreas.length) % visionAreas.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % visionAreas.length);
  };

  const handleReveal = () => {
    setIsImageRevealed(!isImageRevealed);
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[40%] left-[10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen filter blur-[64px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-[30%] right-[15%] w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-[64px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-[20%] left-[20%] w-96 h-96 bg-pink-500/30 rounded-full mix-blend-screen filter blur-[64px]"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start opacity-70">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 mt-8 sm:mt-0 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl text-gray-700 dark:text-gray-300 font-medium"
              >
                Hi, I'm
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium"
              >
                A {personalInfo.title}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Vision Section with Separator */}
            <div className="space-y-4">
              <div className="w-16 h-[1px] bg-gray-300 dark:bg-gray-700 opacity-50" />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="space-y-4"
              >
                <div className="h-24 relative"> {/* Fixed height container */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-2"
                    >
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {visionAreas[currentIndex].title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {visionAreas[currentIndex].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Combined Navigation Controls */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePrevious}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} size="xs" />
                    </motion.button>

                    <div className="flex gap-1">
                      {visionAreas.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-blue-500 w-3' 
                              : 'bg-gray-400 hover:bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleNext}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="flex gap-4"
            >
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href={personalInfo.social.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faBlog} size="2x" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              initial={{ scale: 1.7 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] flex items-center justify-center group cursor-pointer"
              onClick={handleReveal}
            >
              <AnimatePresence mode="wait">
                {!isImageRevealed ? (
                  // Mystery Orb
                  <motion.div
                    key="orb"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: [0.8, 1.1, 0.9],
                      opacity: 1,
                    }}
                    exit={{ 
                      scale: 1.2,
                      opacity: 0,
                      transition: { duration: 0.3 }
                    }}
                    transition={{
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      },
                      opacity: { duration: 0.3 }
                    }}
                    className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full flex items-center justify-center"
                  >
                    {/* Light/Star Effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-24 h-24 
                      bg-white/2 
                      rounded-full 
                      opacity-10"
                      animate={{
                        scale: [0.98, 1.02, 0.98],
                        opacity: [0.05, 0.1, 0.05]
                      }}
                      transition={{
                        scale: {
                          duration: 20,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        },
                        opacity: {
                          duration: 20,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }
                      }}
                    />
                    
                    {/* Pulsing Background */}
                    <motion.div
                      animate={{
                        opacity: [0.4, 0.6, 0.4]
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-xl"
                    />
                    
                    {/* Core Orb */}
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [0.9, 1, 0.9]
                      }}
                      transition={{
                        rotate: {
                          duration: 40,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        scale: {
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-24 h-24 
                      bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-pink-500/5 
                      rounded-full 
                      opacity-30 
                      mix-blend-color-dodge"
                    />
                    
                    {/* Click Prompt */}
                    <span className="relative text-white text-sm sm:text-base font-medium z-10">
                     
                    </span>
                  </motion.div>
                ) : (
                  // Revealed Image
                  <motion.div
                    key="image"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ 
                      scale: 0.8,
                      opacity: 0,
                      transition: { duration: 0.3 }
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                    className="relative w-full p-2"
                  >
                    {/* Gradient Background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-pink-500/10 rounded-full filter blur-xl"
                      animate={{ 
                        scale: [1, 1.03, 1],
                        opacity: [0.9, 0.95, 0.9]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <img 
                      src="/images/shrawanrbg.png" 
                      alt="Shrawan Adhikari"
                      className="w-full h-auto object-contain filter contrast-125 transition-all duration-300 opacity-90 group-hover:opacity-100 max-h-[250px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px]"
                    />
                    
                    {/* Click to Hide Prompt */}
                    <div className="absolute bottom-0 left-0 right-0 text-center pb-2 text-white/70 text-sm">
                      
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;