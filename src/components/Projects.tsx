import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS, LEFT_TECH_STACK, RIGHT_TECH_STACK } from '../constants/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface TechPillProps {
  name: string;
  icon: string;
  delay: number;
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  scale: number;
}

const TechPill: React.FC<TechPillProps> = ({ name, icon, delay, top, left, right, rotate, scale }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: rotate - 20 }}
      whileInView={{ opacity: 1, scale: scale, rotate: rotate }}
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0],
        rotate: [rotate, rotate + 2, rotate - 2, rotate],
      }}
      transition={{
        y: {
          duration: 4 + (delay % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        x: {
          duration: 5 + (delay % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        rotate: {
          duration: 6 + (delay % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        opacity: { duration: 0.5, delay: delay * 0.1 },
        scale: { duration: 0.5, delay: delay * 0.1 }
      }}
      className="absolute flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg z-30"
      style={{ top, left, right }}
    >
      <img src={icon} alt={name} className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
      <span className="text-sm font-bold text-black/80 whitespace-nowrap">{name}</span>
    </motion.div>
  );
};

/** Precomputed heatmap intensities to avoid Math.random() on every render */
const HEATMAP_INTENSITIES = Array.from({ length: 96 }, (_, i) => {
  const options = ['bg-white/10', 'bg-white/20', 'bg-white/40', 'bg-white/60', 'bg-white/80'];
  // Deterministic seeded selection based on index
  return options[(i * 7 + 3) % options.length];
});

const GitHubHeatmap: React.FC = React.memo(() => {
  return (
    <div className="grid grid-cols-12 gap-1.5 w-full">
      {HEATMAP_INTENSITIES.map((intensity, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.005, duration: 0.3 }}
          className={`aspect-square rounded-sm ${intensity}`}
        />
      ))}
    </div>
  );
});

GitHubHeatmap.displayName = 'GitHubHeatmap';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // More aggressive and randomized tilting for a dynamic look
  const rotations = [-12, 8, -5, 12, -8, 6];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -60, 
        rotate: 0, 
        scale: 1.1,
        zIndex: 50,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }}
      className="relative w-[320px] h-[460px] rounded-[32px] shadow-2xl cursor-default overflow-hidden flex flex-col p-8 -ml-20 first:ml-0"
      style={{ backgroundColor: project.color }}
    >
      {/* Top Section: GitHub Heatmap (Occupies more space) */}
      <div className="pt-2 mb-6">
        <GitHubHeatmap />
      </div>

      {/* Middle: Stats */}
      <div className="flex-1 flex flex-col justify-start">
        <div className="flex items-baseline gap-2">
          <span className="text-6xl font-black text-white tracking-tighter">
            {project.projectCount}
          </span>
          <span className="text-sm font-bold text-white/60 uppercase tracking-widest">
            Projects
          </span>
        </div>
        <div className="w-full h-[1px] bg-white/20 mt-4" />
      </div>

      {/* Bottom: Heading */}
      <div className="mt-auto">
        <h3 className="text-3xl font-black text-white tracking-tighter leading-none uppercase">
          {project.title}
        </h3>
      </div>

      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[32px]" />
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-[#f4f4f4] relative overflow-hidden flex flex-col items-center pt-32 pb-24">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-[#FF4B4B]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#3D8FF0]/5 rounded-full blur-[150px]" />
      </div>

      {/* Header Section - Matched with AgenticAI and Journey */}
      <div className="relative z-10 text-center mb-64 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-2 bg-black mx-auto mb-10" />
          <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.85] uppercase">
            PROJECTS
          </h2>
        </motion.div>
      </div>

      {/* Overlapping Cards Container */}
      <div className="relative z-20 flex items-center justify-center mt-auto w-full max-w-7xl px-12">
        <div className="flex items-center">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Character Project Image & Tech Pills - Centered below cards */}
      <div className="relative z-10 mt-2 w-full max-w-7xl px-12 h-[800px] flex items-start justify-center">
        {/* Left Tech Stack - Randomized Positions */}
        {LEFT_TECH_STACK.map((tech, i) => {
          // More scattered positions
          const top = `${10 + (i * 15) % 85}%`;
          const left = `${1 + (i * 11) % 35}%`;
          const rotate = (i * 13) % 20 - 10; // -10 to 10
          const scale = 0.8 + ((i * 7) % 5) * 0.1; // 0.8 to 1.2
          return <TechPill key={tech.name} {...tech} top={top} left={left} delay={i * 0.05} rotate={rotate} scale={scale} />;
        })}

        {/* Character Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="w-full max-w-2xl flex justify-center z-20 pt-4"
        >
          <img 
            src="/images/character_project.png" 
            alt="Character Project" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Right Tech Stack - Randomized Positions */}
        {RIGHT_TECH_STACK.map((tech, i) => {
          // More scattered positions
          const top = `${8 + (i * 17) % 88}%`;
          const right = `${1 + (i * 13) % 38}%`;
          const rotate = (i * 17) % 20 - 10; // -10 to 10
          const scale = 0.8 + ((i * 9) % 5) * 0.1; // 0.8 to 1.2
          return <TechPill key={tech.name} {...tech} top={top} right={right} delay={i * 0.05} rotate={rotate} scale={scale} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
