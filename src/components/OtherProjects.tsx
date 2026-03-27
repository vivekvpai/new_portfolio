import React from 'react';
import { motion } from 'motion/react';
import { OTHER_PROJECTS } from '../constants/otherProjects';

const OtherProjects: React.FC = () => {
  return (
    <section className="w-full bg-[#f4f4f4] relative flex flex-col items-center pt-24 pb-0 overflow-visible">
      
      {/* Oversized Background Title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none pt-20 z-0">
        <h2 className="text-[12vw] font-black text-black/[0.08] leading-none tracking-tighter uppercase italic whitespace-nowrap">
          OTHER PROJECTS
        </h2>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative w-[95%] mr-auto mt-32 z-10 pb-0">
        {OTHER_PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="sticky flex flex-col items-start justify-start w-full"
            style={{ 
              top: `calc(10vh + ${index * 40}px)`, 
              marginBottom: '80vh' 
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full min-h-[70vh] bg-white/60 backdrop-blur-3xl border border-white/60 border-l-0 rounded-r-[40px] shadow-[20px_30px_80px_rgba(0,0,0,0.12)] p-6 md:p-12 flex flex-col md:flex-row gap-12 items-center origin-top"
            >
              {/* Image side */}
              <div className="w-full md:w-3/5 h-[30vh] md:h-[50vh] rounded-[24px] overflow-hidden border border-white/50 shadow-inner bg-white/40 shrink-0">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90" 
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Text side */}
              <div className="w-full md:w-2/5 flex flex-col gap-4 pr-4 md:pr-12">
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none" style={{ color: project.color }}>
                  {project.title}
                </h3>
                <p className="text-xl font-bold text-black/50 leading-tight tracking-tight mt-2">
                  {project.desc}
                </p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold tracking-wide uppercase transition-transform hover:scale-105 active:scale-95 w-max shadow-lg"
                  style={{ 
                    backgroundColor: project.color,
                    boxShadow: `0 10px 25px -5px ${project.color}80`
                  }}
                >
                  {project.buttonText}
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
