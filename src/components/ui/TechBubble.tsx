import React from 'react';
import { motion } from 'motion/react';

interface TechBubbleProps {
  title: string;
  desc: string;
  color: string;
  pos: string;
  delay: number;
}

const TechBubble: React.FC<TechBubbleProps> = ({ title, desc, color, pos, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`absolute ${pos} z-30 w-72`}
    >
      {/* Floating Animation Wrapper */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }}
        className="relative p-6 rounded-[28px] bg-white/10 backdrop-blur-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col gap-2 group hover:bg-white/20 transition-all pointer-events-auto cursor-default"
      >
        {/* Bubble Tail */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/10 backdrop-blur-3xl border-r border-b border-white/40 rotate-45 z-[-1]" />

        <h3 className="text-lg font-black tracking-tighter uppercase leading-none" style={{ color }}>
          {title}
        </h3>
        
        <p className="text-xs font-bold text-black/50 leading-tight uppercase tracking-tight mt-1">
          {desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TechBubble;
