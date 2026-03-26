import React from 'react';
import { motion } from 'motion/react';

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
        className="relative p-6 rounded-[28px] bg-white/10 backdrop-blur-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col gap-2 group hover:bg-white/20 transition-all pointer-events-auto"
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

const ShopProp: React.FC = () => {
  const bubbles = [
    // Overlapping the laptop (website)
    { title: "WEB PLATFORM", desc: "High-performance e-commerce storefront with optimized conversion funnels.", color: "#FF4B4B", pos: "top-[15%] left-[45%]" },
    // Overlapping the mobile app
    { title: "NATIVE APP", desc: "Seamless mobile experience with real-time inventory synchronization.", color: "#54C64D", pos: "top-[45%] right-[15%]" },
    // Overlapping the laptop (website) again
    { title: "PAYMENT GATEWAY", desc: "Secure, multi-currency transaction processing and fraud prevention.", color: "#3D8FF0", pos: "bottom-[15%] left-[35%]" }
  ];

  return (
    <section id="shopprop" className="min-h-screen w-full bg-[#f4f4f4] relative flex flex-col items-center pt-24 pb-12 overflow-hidden">
      {/* Oversized Background Title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none pt-20">
        <h2 className="text-[15vw] font-black text-black/[0.08] leading-none tracking-tighter uppercase italic whitespace-nowrap">
          SHOP PROP
        </h2>
      </div>

      {/* Central Display Area */}
      <div className="relative z-10 w-full max-w-7xl h-[800px] mt-20 flex items-center">
        
        {/* Left: Laptop / Website Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 w-[65%] z-10"
        >
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/40 rounded-[40px] p-4 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
              alt="Shop Prop Website" 
              className="w-full h-auto object-cover rounded-[32px] mix-blend-multiply opacity-90 aspect-[16/10]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Right: Mobile App Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 w-[28%] z-20"
        >
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/40 rounded-[40px] p-3 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
              alt="Shop Prop Mobile App" 
              className="w-full h-auto object-cover rounded-[32px] mix-blend-multiply opacity-90 aspect-[9/19]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Glassmorphic Message Bubbles */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {bubbles.map((bubble, index) => (
            <TechBubble key={index} {...bubble} delay={0.6 + index * 0.2} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopProp;
