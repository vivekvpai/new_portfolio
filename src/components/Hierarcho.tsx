import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, LayoutGrid } from 'lucide-react';

const TechBubble: React.FC<{ title: string; desc: string; color: string; pos: string; delay: number }> = ({ title, desc, color, pos, delay }) => {
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
        className="relative p-6 rounded-[28px] bg-white/10 backdrop-blur-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col gap-2 group hover:bg-white/20 transition-all cursor-default"
      >
        {/* Bubble Tail */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/10 backdrop-blur-3xl border-r border-b border-white/40 rotate-45 z-[-1]" />

        <h3 className="text-lg font-black tracking-tighter uppercase leading-none" style={{ color: color }}>
          {title}
        </h3>
        
        <p className="text-xs font-bold text-black/50 leading-tight uppercase tracking-tight mt-1">
          {desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Hierarcho: React.FC = () => {
  const bubbles = [
    { title: "INCOMING DATA", desc: "Real-time synchronization protocol active. Monitoring multi-node data streams for consistency.", color: "#FF4B4B", pos: "top-[10%] left-[-5%]" },
    { title: "SYSTEM ANALYSIS", desc: "Deep-nested property search completed. Hierarchical relationships mapped and indexed.", color: "#54C64D", pos: "top-[45%] right-[-5%]" },
    { title: "RENDER STATUS", desc: "Spatial 3D visualization engine operational. High-fidelity hierarchy rendering in progress.", color: "#3D8FF0", pos: "bottom-[5%] left-[-2%]" }
  ];

  return (
    <section id="hierarcho" className="min-h-screen w-full bg-[#f4f4f4] relative flex flex-col items-center pt-48 pb-24 overflow-hidden">
      {/* Oversized Background Title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none pt-20">
        <h2 className="text-[22vw] font-black text-black/[0.08] leading-none tracking-tighter uppercase italic">
          HIREKO.AI
        </h2>
      </div>

      {/* Central Schematic Area */}
      <div className="relative z-10 w-full max-w-5xl aspect-square md:aspect-video flex items-center justify-center">
        
        {/* SVG Data Lines (Connecting Laptop to Bubbles) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" viewBox="0 0 1000 600">
          <motion.path 
            d="M 500 300 L 250 150" stroke="#FF4B4B" strokeWidth="2" fill="none" strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 500 300 L 750 320" stroke="#54C64D" strokeWidth="2" fill="none" strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 500 300 L 280 520" stroke="#3D8FF0" strokeWidth="2" fill="none" strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Central Laptop Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-full max-w-2xl"
        >
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/40 rounded-[40px] p-4 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200" 
              alt="Hierarcho Core" 
              className="w-full h-auto object-contain rounded-[32px] mix-blend-multiply opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Glassmorphic Message Bubbles */}
        {bubbles.map((bubble, index) => (
          <TechBubble key={index} {...bubble} delay={0.5 + index * 0.2} />
        ))}
      </div>

    </section>
  );
};

export default Hierarcho;
