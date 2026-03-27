/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import Landing from "./components/Landing";
import ProfessionalJourney from "./components/ProfessionalJourney";
import AgenticAISection from "./components/AgenticAISection";
import Projects from "./components/Projects";
import Hierarcho from "./components/Hireco";
import ShopProp from "./components/ShopProp";
import OtherProjects from "./components/OtherProjects";
import Education from "./components/Education";
import BlogsSection from "./components/BlogsSection";
import ContactUs from "./components/ContactUs";
import NavigationCard from "./components/NavigationCard";

/** All navigable section IDs used by the IntersectionObserver and navigation */
const SECTION_IDS = [
  "journey",
  "projects",
  "hierarcho",
  "shopprop",
  "otherprojects",
  "education",
  "blogs",
  "contact",
] as const;

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>("landing");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect active section during scroll
  React.useEffect(() => {
    if (currentSection === "landing") return;

    const observerOptions = {
      root: scrollContainerRef.current,
      threshold: 0.15, // Threshold lowered for tall sections (better detection)
      rootMargin: "0px 0px -20% 0px", // Trigger slightly before it hits top center
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if ((SECTION_IDS as readonly string[]).includes(id)) {
            setCurrentSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    // Wait for ref to stabilize and elements to render
    const timeoutId = setTimeout(() => {
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [currentSection]);

  const handleNavigate = (section: string) => {
    if (section === "landing") {
      setCurrentSection("landing");
    } else {
      if (currentSection === "landing") {
        setCurrentSection(section);
        // After transition, scroll to the section
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 850); // Wait for transition
      } else {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setCurrentSection(section);
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f4f4f4]">
      {/* Persistent Navigation Card */}
      <NavigationCard
        isCollapsed={currentSection !== "landing"}
        activeSection={currentSection}
        onNavigate={handleNavigate}
      />

      <AnimatePresence initial={false}>
        {currentSection === "landing" ? (
          <motion.div
            key="landing"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-10"
          >
            <Landing onKnowMore={() => handleNavigate("journey")} />
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
            <div id="hierarcho">
              <Hierarcho />
            </div>
            <div id="shopprop">
              <ShopProp />
            </div>
            <div id="otherprojects">
              <OtherProjects />
            </div>
            <Education id="education" />
            <BlogsSection id="blogs" scrollContainer={scrollContainerRef} />
            <ContactUs id="contact" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
