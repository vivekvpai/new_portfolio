import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Clock, X, Info } from 'lucide-react';
import { PROFESSIONAL_JOURNEY, JourneyItem } from '../constants/journey';

// Typewriter component for the rotating roles — wrapped in React.memo to prevent parent re-renders
const Typewriter = React.memo(({ roles }: { roles: string[] }) => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  // RGB Colors from the PAI theme
  const colors = ['#FF4B4B', '#54C64D', '#3D8FF0'];
  const currentColor = colors[roleIndex % colors.length];

  React.useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const fullText = currentRole;

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <span className="relative">
      <span style={{ color: currentColor }} className="font-bold transition-colors duration-500">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        style={{ backgroundColor: currentColor }}
        className="inline-block w-[3px] md:w-[5px] h-[0.9em] ml-2 align-middle transition-colors duration-500"
      />
    </span>
  );
});

Typewriter.displayName = 'Typewriter';

const ProfessionalJourney = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedJourney, setSelectedJourney] = useState<JourneyItem | null>(null);

  // Auto-open folder after 1 second
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Map journey items to file colors
  const colors = ['text-[#FF4B4B]', 'text-[#54C64D]', 'text-[#3D8FF0]'];

  const getFileTransform = (index: number, total: number) => {
    if (isOpen) {
      // OPEN STATE: Spread them out dynamically based on total count
      const centerIndex = (total - 1) / 2;
      const position = index - centerIndex;
      const xOffset = position * 220; 
      const yOffset = -280; 
      const rotation = position * 6; 
      
      return `translate(calc(-50% + ${xOffset}px), ${yOffset}px) rotate(${rotation}deg) scale(1)`;
    } else {
      // CLOSED STATE: Stacked in the pocket
      const baseScale = 0.85; 
      const baseYOffset = 55; 
      const basePeek = isHovered ? -16 : 0; 
      
      const staggerY = index * -8; 
      const yOffset = baseYOffset + basePeek + staggerY;
      
      const scale = baseScale - (index * 0.02); 
      
      return `translate(-50%, ${yOffset}px) rotate(0deg) scale(${scale})`;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] relative overflow-hidden font-sans text-black">
      {/* 1. Top Left Header - Now Typewriter only */}
      <header className="absolute top-12 left-12 z-20 pointer-events-none">
        <div className="flex flex-col m-0 p-0">
          {/* Typewriter Title */}
          <div className="flex items-center text-[60px] md:text-[80px] font-bold leading-[0.85] tracking-tighter text-black">
            {/* Typewriter Effect as the main title */}
            <div className="flex items-center whitespace-nowrap">
              <span className="text-black">I'm a&nbsp;</span>
              <Typewriter 
                roles={[
                  "software engineer",
                  "developer",
                  "open source contributor",
                  "tech speaker",
                  "freelancer"
                ]} 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Character Image */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
        <img 
          src="/images/character_journey.png" 
          alt="Character Journey" 
          className="h-[60vh] w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Folder Animation Section - Centered in the 70% space between image and nav, at the bottom */}
      <div className="absolute bottom-12 left-[20%] right-[10%] flex justify-center pointer-events-none">
        <div className="flex flex-col items-center pointer-events-auto">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-black/80 mb-1 tracking-tight">Professional Journey</h2>
            <p className="text-black/40 text-sm">Click the folder to explore my career path</p>
          </div>

          <div 
            className="relative w-48 h-36 cursor-pointer group [perspective:1500px]"
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
          >
            {/* --- FOLDER BACK --- */}
            <div className="absolute bottom-0 w-full h-32 z-0">
              <div className="absolute -top-4 left-0 w-16 h-6 bg-[#3D8FF0] rounded-t-lg" />
              <div className="absolute top-0 w-full h-full bg-[#3D8FF0] rounded-b-xl rounded-tr-xl shadow-inner" />
            </div>

            {/* --- FILES WRAPPER --- */}
            <div className="absolute bottom-0 left-0 w-full h-full z-10 pointer-events-none [clip-path:inset(-1000%_-1000%_0_-1000%)]">
              {PROFESSIONAL_JOURNEY.map((journey, index) => {
                const colorClass = colors[index % colors.length];
                
                return (
                  <div
                    key={journey.hash}
                    onClick={(e) => {
                      if (isOpen) {
                        e.stopPropagation();
                        setSelectedJourney(journey);
                      }
                    }}
                    className={`absolute left-1/2 bottom-0 w-48 h-56 bg-white rounded-xl shadow-2xl border border-black/5 flex flex-col p-4 transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom pointer-events-auto hover:translate-y-[-10px]`}
                    style={{
                      transform: getFileTransform(index, PROFESSIONAL_JOURNEY.length),
                      zIndex: isOpen 
                        ? 20 + (PROFESSIONAL_JOURNEY.length - 1 - index) 
                        : 10 + (PROFESSIONAL_JOURNEY.length - 1 - index),
                    }}
                  >
                    {/* File Header */}
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1 pr-2">
                        <span className="text-[10px] font-bold text-black block leading-tight truncate">
                          {journey.company}
                        </span>
                        <span className="text-[8px] font-medium text-black/40 block truncate">
                          {journey.role}
                        </span>
                      </div>
                      <div className={`${colorClass} opacity-60`}>
                        <Info size={14} strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* File Description */}
                    <p className="text-[9px] text-black/60 line-clamp-4 leading-relaxed mb-3">
                      {journey.description}
                    </p>
                    
                    {/* File Keywords (Tech Stack) */}
                    <div className="mt-auto flex flex-wrap gap-1">
                      {journey.techStack.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="text-[7px] px-1.5 py-0.5 bg-black/5 rounded text-black/40 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {journey.techStack.length > 4 && (
                        <span className="text-[7px] text-black/20">
                          +{journey.techStack.length - 4}
                        </span>
                      )}
                    </div>
                    
                    {/* Decorative lines at the very bottom */}
                    <div className="absolute bottom-2 left-4 right-4 h-[1px] bg-black/5" />
                  </div>
                );
              })}
            </div>

            {/* --- FOLDER FRONT --- */}
            <div 
              className="absolute bottom-0 w-full h-28 bg-[#3D8FF0]/90 backdrop-blur-sm rounded-xl shadow-2xl z-30 transition-all duration-[600ms] ease-out origin-bottom border-t border-white/20 flex items-center justify-center"
              style={{
                transform: isOpen ? 'rotateX(35deg)' : isHovered ? 'rotateX(10deg)' : 'rotateX(0deg)',
                boxShadow: isOpen 
                  ? '0 25px 50px -12px rgba(61, 143, 240, 0.5)' 
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
              }}
            >
              <Briefcase size={32} className="text-white/40" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Detailed View Modal */}
      <AnimatePresence>
        {selectedJourney && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJourney(null)}
              className="absolute inset-0 bg-black/20 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/5"
            >
              {/* Modal Header */}
              <div className="p-8 pb-0 flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold text-black tracking-tight">
                    {selectedJourney.role}
                  </h3>
                  <p className="text-xl font-medium text-[#3D8FF0]">
                    {selectedJourney.company}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedJourney(null)}
                  className="p-2 rounded-full hover:bg-black/5 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap gap-4 text-sm font-medium text-black/40">
                  <div className="flex items-center gap-2 bg-black/5 px-3 py-1.5 rounded-full">
                    <Calendar size={16} />
                    {selectedJourney.date}
                  </div>
                  <div className="flex items-center gap-2 bg-black/5 px-3 py-1.5 rounded-full">
                    <Clock size={16} />
                    {selectedJourney.duration}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-black/20">Description</h4>
                  <p className="text-black/70 leading-relaxed text-lg">
                    {selectedJourney.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-black/20">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJourney.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 bg-black/5 text-black/60 rounded-lg text-sm font-medium border border-black/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Decoration */}
              <div className="h-2 w-full flex">
                <div className="flex-1 bg-[#FF4B4B]" />
                <div className="flex-1 bg-[#54C64D]" />
                <div className="flex-1 bg-[#3D8FF0]" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfessionalJourney;
