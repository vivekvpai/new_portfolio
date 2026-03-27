import React from "react";
import { motion } from "motion/react";
import TechBubble from "./ui/TechBubble";
import { HIRECO_DATA } from "../constants/projects";

const Hierarcho: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen w-full bg-[#f4f4f4] relative flex flex-col items-center pt-48 pb-24 overflow-hidden"
    >
      {/* Oversized Background Title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none pt-20">
        <h2 className="text-[18vw] font-black text-black/[0.08] leading-none tracking-tighter uppercase italic">
          {HIRECO_DATA.title}
        </h2>
      </div>

      {/* Central Schematic Area */}
      <div className="relative z-10 w-full max-w-5xl aspect-square md:aspect-video flex items-center justify-center">
        {/* SVG Data Lines (Connecting Laptop to Bubbles) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20"
          viewBox="0 0 1000 600"
        >
          <motion.path
            d="M 500 300 L 250 150"
            stroke="#FF4B4B"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 500 300 L 750 320"
            stroke="#54C64D"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 500 300 L 280 520"
            stroke="#3D8FF0"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
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
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/40 rounded-[40px] p-8 shadow-2xl flex items-center justify-center">
            <img
              src={HIRECO_DATA.image}
              alt={HIRECO_DATA.title}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* View Website Button */}
          <div className="mt-12 flex justify-center">
            <a
              href={(HIRECO_DATA as any).link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF4B4B] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-[#FF4B4B]/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 active:scale-95"
            >
              <span>View Website</span>
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Glassmorphic Message Bubbles */}
        {HIRECO_DATA.bubbles.map((bubble, index) => (
          <TechBubble key={index} {...bubble} delay={0.5 + index * 0.2} />
        ))}
      </div>
    </section>
  );
};

export default Hierarcho;
