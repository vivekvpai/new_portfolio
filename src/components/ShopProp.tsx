import React from "react";
import { motion } from "motion/react";
import TechBubble from "./ui/TechBubble";
import { SHOPPROP_DATA } from "../constants/projects";

const ShopProp: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen w-full bg-[#f4f4f4] relative flex flex-col items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Oversized Background Title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none pt-20">
        <h2 className="text-[15vw] font-black text-black/[0.08] leading-none tracking-tighter uppercase italic whitespace-nowrap">
          {SHOPPROP_DATA.title}
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
              src={SHOPPROP_DATA.webImage}
              alt={`${SHOPPROP_DATA.title} Website`}
              className="w-full h-auto object-contain rounded-[32px] mix-blend-multiply opacity-90 aspect-[16/10]"
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
              src={SHOPPROP_DATA.mobileImage}
              alt={`${SHOPPROP_DATA.title} Mobile App`}
              className="w-full h-auto object-cover rounded-[32px] mix-blend-multiply opacity-90 aspect-[9/19]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Glassmorphic Message Bubbles */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {SHOPPROP_DATA.bubbles.map((bubble, index) => (
            <TechBubble key={index} {...bubble} delay={0.6 + index * 0.2} />
          ))}
        </div>
      </div>

      {/* View Website Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-30 flex justify-center"
      >
        <a
          href={(SHOPPROP_DATA as any).link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-5 bg-[#3D8FF0] text-white rounded-full font-bold text-xl shadow-xl hover:shadow-[#3D8FF0]/30 hover:scale-105 transition-all duration-300 flex items-center gap-4 active:scale-95"
        >
          <span>Explore ShopProp</span>
          <svg
            className="w-6 h-6"
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
      </motion.div>
    </section>
  );
};

export default ShopProp;
