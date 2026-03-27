import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowDown, Linkedin, Mail, Github, Home, Briefcase, GraduationCap, FolderCode, Phone, FileDown } from 'lucide-react';
import IconCircle from './ui/IconCircle';
import SocialSquare from './ui/SocialSquare';
import { NavigationCardProps } from '../types';

const NavigationCard = ({ isCollapsed, activeSection, onNavigate }: NavigationCardProps) => {
  const navItems = [
    { id: 'landing', label: 'Home', icon: <Home size={16} /> },
    { id: 'journey', label: 'Journey', icon: <Briefcase size={16} /> },
    { id: 'projects', label: 'Projects', icon: <FolderCode size={16} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Phone size={16} /> },
    { id: 'resume', label: 'Resume', icon: <FileDown size={16} /> },
  ];

  return (
    <motion.nav 
      layout
      initial={false}
      animate={{
        width: isCollapsed ? 64 : 300,
        height: isCollapsed ? 'auto' : 'auto',
        borderRadius: isCollapsed ? 16 : 24,
        padding: isCollapsed ? 12 : 28,
        top: isCollapsed ? '50%' : 48,
        right: 48,
        y: isCollapsed ? '-50%' : 0,
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute z-50 bg-white/25 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)] ring-1 ring-inset ring-white/30 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isCollapsed ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Corner Triangle Borders */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#FF4B4B]/30 [clip-path:polygon(0_0,100%_0,0_100%)]" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#54C64D]/30 [clip-path:polygon(0_0,100%_0,100%_100%)]" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[#3D8FF0]/30 [clip-path:polygon(0_100%,100%_100%,0_0)]" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-black/10 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

            {/* Languages Section */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[17px] font-medium tracking-tight">Languages</span>
                <ArrowRight size={18} className="text-black transform transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </div>
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3">
                  <IconCircle>Py</IconCircle>
                  <div className="flex-1 h-1 bg-black/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF4B4B] rounded-full" style={{ width: '60%' }} />
                  </div>
                  <span className="text-[10px] font-medium text-black/40 w-6 text-right">60%</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconCircle>Ts</IconCircle>
                  <div className="flex-1 h-1 bg-black/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#54C64D] rounded-full" style={{ width: '80%' }} />
                  </div>
                  <span className="text-[10px] font-medium text-black/40 w-6 text-right">80%</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconCircle>Js</IconCircle>
                  <div className="flex-1 h-1 bg-black/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#3D8FF0] rounded-full" style={{ width: '80%' }} />
                  </div>
                  <span className="text-[10px] font-medium text-black/40 w-6 text-right">80%</span>
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-black/10 mb-5" />

            {/* Me Section */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-[17px] font-medium tracking-tight">Me</span>
                <ArrowRight size={18} className="text-black transform transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </div>
              <div className="flex gap-1.5 mb-5">
                <a href="https://www.linkedin.com/in/vivek-v-pai/" target="_blank" rel="noopener noreferrer">
                  <SocialSquare><Linkedin size={11} strokeWidth={2} className="fill-current" /></SocialSquare>
                </a>
                <a href="https://github.com/vivekvpai" target="_blank" rel="noopener noreferrer">
                  <SocialSquare><Github size={11} strokeWidth={2} className="fill-current" /></SocialSquare>
                </a>
                <a href="mailto:itspaivivek@gmail.com">
                  <SocialSquare><Mail size={12} strokeWidth={2} /></SocialSquare>
                </a>
              </div>
            </div>

            <div className="w-full h-[1px] bg-black/10 mb-5" />

            {/* Resume Section */}
            <div className="group cursor-pointer flex justify-between items-center">
              <span className="text-[17px] font-medium tracking-tight">Download Resume</span>
              <div className="w-[22px] h-[22px] rounded-full border border-black/50 flex items-center justify-center transition-colors bg-white/40 backdrop-blur-sm group-hover:bg-black group-hover:border-black group-hover:text-white">
                <ArrowDown size={12} strokeWidth={2} />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            {navItems.map((item) => {
              const isActive = 
                item.id === 'education' ? (activeSection === 'education' || activeSection === 'blogs') :
                item.id === 'projects' ? ['projects', 'hierarcho', 'shopprop', 'otherprojects'].includes(activeSection) :
                activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'landing' || item.id === 'journey' || item.id === 'projects' || item.id === 'education' || item.id === 'contact') {
                      onNavigate(item.id);
                    }
                  }}
                  className={`group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 overflow-hidden ${
                    isActive 
                      ? 'shadow-lg shadow-black/10' 
                      : 'hover:bg-black/5'
                  }`}
                  title={item.label}
                >
                  {isActive && (
                    <div 
                      className="absolute inset-0 rounded-xl opacity-100 shadow-inner blur-[8px] scale-150"
                      style={{ 
                        background: `
                          radial-gradient(circle at 0% 0%, #FF4B4B 0%, transparent 75%),
                          radial-gradient(circle at 100% 40%, #54C64D 0%, transparent 75%),
                          radial-gradient(circle at 50% 100%, #3D8FF0 0%, transparent 75%)
                        `,
                        backgroundColor: '#FF4B4B'
                      }}
                    >
                      {/* Subtle glass overlay to keep it consistent */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
                    </div>
                  )}
                  <div className={`relative z-10 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-black/60 group-hover:text-black'
                  }`}>
                    {item.icon}
                  </div>
                  {/* Tooltip-like label on hover */}
                  <span className="absolute right-full mr-4 px-2 py-1 rounded bg-black text-white text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationCard;
