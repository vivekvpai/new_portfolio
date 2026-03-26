/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Landing from './components/Landing';
import ProfessionalJourney from './components/ProfessionalJourney';
import AgenticAISection from './components/AgenticAISection';
import Projects from './components/Projects';
import Hierarcho from './components/Hierarcho';
import NavigationCard from './components/NavigationCard';

export default function App() {
  const [currentSection, setCurrentSection] = useState<'landing' | 'journey' | 'projects'>('landing');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect active section during scroll
  React.useEffect(() => {
    if (currentSection === 'landing') return;

    const observerOptions = {
      root: scrollContainerRef.current,
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'journey' || id === 'projects' || id === 'hierarcho') {
            setCurrentSection(id as 'journey' | 'projects');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // We need to wait for the ref to be stable and elements to be rendered
    const timeoutId = setTimeout(() => {
      const journeyEl = document.getElementById('journey');
      const projectsEl = document.getElementById('projects');
      const hierarchoEl = document.getElementById('hierarcho');
      if (journeyEl) observer.observe(journeyEl);
      if (projectsEl) observer.observe(projectsEl);
      if (hierarchoEl) observer.observe(hierarchoEl);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [currentSection]);

  const handleNavigate = (section: 'landing' | 'journey' | 'projects') => {
    if (section === 'landing') {
      setCurrentSection('landing');
    } else {
      if (currentSection === 'landing') {
        setCurrentSection(section);
        // After transition, scroll to the section
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 850); // Wait for transition
      } else {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(section);
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f4f4f4]">
      {/* Persistent Navigation Card */}
      <NavigationCard 
        isCollapsed={currentSection !== 'landing'} 
        activeSection={currentSection}
        onNavigate={handleNavigate}
      />

      <AnimatePresence initial={false}>
        {currentSection === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-10"
          >
            <Landing onKnowMore={() => handleNavigate('journey')} />
          </motion.div>
        ) : (
          <motion.div
            key="journey-wrapper"
            ref={scrollContainerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-20 overflow-y-auto scroll-smooth"
          >
            <div id="journey">
              <ProfessionalJourney />
              <AgenticAISection scrollContainer={scrollContainerRef} />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <Hierarcho />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

