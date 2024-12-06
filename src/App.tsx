import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SpaceBackground from './components/SpaceBackground';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { initGA, logPageView } from './utils/analytics';

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-950">
        <SEO />
        <div className="fixed inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
          <SpaceBackground />
        </div>
        
        <Navbar />
        <ErrorBoundary>
          <main className="relative">
            {/* Hero section with full space background visibility */}
            <section id="hero" className="relative min-h-screen">
              <Hero />
            </section>

            {/* Content sections with gradient overlay */}
            <div className="relative">
              {/* Gradient overlay for smooth transition */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-gray-950/95 pointer-events-none" />
              
              <div className="relative z-10">
                <section id="projects">
                  <Projects />
                </section>
                <section id="tech-stack">
                  <TechStack />
                </section>
                <section id="experience">
                  <Experience />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </div>
            </div>
          </main>
          <Footer />
        </ErrorBoundary>
      </div>
    </HelmetProvider>
  );
}

export default App;