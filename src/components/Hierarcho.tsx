import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, LayoutGrid } from 'lucide-react';

const TechBubble: React.FC<{ title: string; desc: string; color: string; pos: string; delay: number }> = ({ title, desc, color, pos, delay }) => {
  const isLeft = pos.includes('left');
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`absolute ${pos} z-30 w-72 p-6 rounded-[28px] bg-white/10 backdrop-blur-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col gap-2 group hover:bg-white/20 transition-all cursor-default`}
    >
      {/* Floating Animation Wrapper */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }}
        className="relative"
      >
        {/* Bubble Tail */}
        <div className={`absolute -bottom-4 ${isLeft ? 'left-8' : 'right-8'} w-6 h-6 bg-white/10 backdrop-blur-3xl border-r border-b border-white/40 rotate-45 z-[-1]`} />

        {/* RGB Accent Indicator */}
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
          <div className="w-8 h-[2px] rounded-full opacity-30" style={{ backgroundColor: color }} />
        </div>
        
        <h3 className="text-lg font-black text-black tracking-tighter uppercase leading-none">
          {title}
        </h3>
        
        <p className="text-xs font-bold text-black/50 leading-tight uppercase tracking-tight">
          {desc}
        </p>

        {/* Subtle Glass Reflection */}
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

const Hierarcho: React.FC = () => {
  const bubbles = [
    { title: "INCOMING DATA", desc: "Real-time synchronization protocol active. Monitoring multi-node data streams for consistency.", color: "#FF4B4B", pos: "top-[10%] left-[-15%]" },
    { title: "SYSTEM ANALYSIS", desc: "Deep-nested property search completed. Hierarchical relationships mapped and indexed.", color: "#54C64D", pos: "top-[45%] right-[-20%]" },
    { title: "RENDER STATUS", desc: "Spatial 3D visualization engine operational. High-fidelity hierarchy rendering in progress.", color: "#3D8FF0", pos: "bottom-[5%] left-[-10%]" }
  ];

  return (
    <section id="hierarcho" className="min-h-screen w-full bg-[#f4f4f4] relative flex flex-col items-center py-48 overflow-hidden">
      {/* Background RGB Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-[#FF4B4B]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#3D8FF0]/5 rounded-full blur-[150px]" />
      </div>

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
            d="M 500 300 L 200 150" stroke="#FF4B4B" strokeWidth="2" fill="none" strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 500 300 L 800 320" stroke="#54C64D" strokeWidth="2" fill="none" strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 500 300 L 250 520" stroke="#3D8FF0" strokeWidth="2" fill="none" strokeDasharray="10 10"
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
          {/* RGB Blueprint Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4B4B]/30 via-[#54C64D]/30 to-[#3D8FF0]/30 blur-[120px] rounded-full scale-125 animate-pulse" />
          
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
