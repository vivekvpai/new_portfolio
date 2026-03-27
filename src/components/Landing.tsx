import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Landing = ({ onKnowMore }: { onKnowMore: () => void }) => {
  // Handle wheel scroll to enter
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      onKnowMore();
    }
  };

  // Handle touch scroll for mobile to enter
  const touchStartY = React.useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    const touchEndY = e.touches[0].clientY;
    if (touchStartY.current - touchEndY > 50) { // Swipe up to enter (scroll down)
      onKnowMore();
    }
  };

  return (
    <div 
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="min-h-screen w-full bg-[#f4f4f4] relative overflow-hidden font-sans text-black selection:bg-blue-200"
    >
      
      {/* 1. Top Left Header */}
      <header className="absolute top-12 left-12 z-20 pointer-events-none">
        <div className="flex items-center text-[90px] md:text-[130px] font-bold leading-[0.85] tracking-tighter text-black m-0 p-0">
          {/* Left Bracket */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black/40 font-mono"
          >
            &lt;
          </motion.span>
          
          {/* Name Container (Expands to push brackets apart) */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            className="flex overflow-hidden"
          >
            {" Vivek V Pai ".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.1, 
                  delay: 1.6 + (index * 0.08) 
                }}
                className="whitespace-pre"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Right Bracket */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-black/40 font-mono"
          >
            /&gt;
          </motion.span>
        </div>
      </header>

      {/* 2. Top Right Navigation Card - Triangular RGB Bubbles (L-Shape Layout) */}
      <div className="absolute top-0 right-0 z-10 w-[1000px] h-[1000px] pointer-events-none overflow-hidden select-none">
        {/* Blue Bubble (Corner) */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40"
          style={{ background: 'radial-gradient(circle, #3D8FF0 0%, transparent 70%)' }}
        />
        {/* Green Bubble (Left of Corner) */}
        <motion.div 
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-32 right-[320px] w-[450px] h-[450px] rounded-full blur-[100px] opacity-35"
          style={{ background: 'radial-gradient(circle, #54C64D 0%, transparent 70%)' }}
        />
        {/* Red Bubble (Below Corner) */}
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[320px] -right-32 w-[420px] h-[420px] rounded-full blur-[100px] opacity-35"
          style={{ background: 'radial-gradient(circle, #FF4B4B 0%, transparent 70%)' }}
        />
      </div>

      {/* Description below card */}
      <div className="absolute top-[480px] right-12 z-20 w-[280px] text-[14px] text-black/60 leading-[1.4] font-normal text-right pointer-events-none">
        <p>Vivek V Pai is a Software Engineer based in Seattle. This portfolio is an exhibition of his creative engineering and design works.</p>
      </div>

      {/* 3. Central Graphic Illustration (SVG) */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center pt-10">
        <svg 
          className="w-full h-full min-w-[1024px]" 
          viewBox="0 0 1440 900" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* The PAI Shapes */}
          <g strokeWidth="155" fill="none" strokeLinejoin="round">
            {/* Red 'P' */}
            <g className="animate-stagger delay-1">
              <path 
                d="M 230,280 L 160,820" 
                stroke="#FF4B4B" 
                strokeLinecap="round"
              />
              <path 
                d="M 230,280 C 580,280 530,600 185,580" 
                stroke="#FF4B4B" 
                strokeLinecap="round"
              />
            </g>

            {/* Green 'A' */}
            <g className="animate-stagger delay-2">
              <path 
                d="M 430,840 L 600,220 L 770,840" 
                stroke="#54C64D" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path 
                d="M 468,700 L 732,700" 
                stroke="#54C64D" 
                strokeLinecap="butt"
              />
            </g>

            {/* Blue 'I' */}
            <g className="animate-stagger delay-3">
              <path 
                d="M 890,310 L 820,810" 
                stroke="#3D8FF0" 
                strokeLinecap="round"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* 4. Bottom Right Text */}
      <div className="absolute bottom-12 right-12 z-20">
        <h2 
          onClick={onKnowMore}
          className="text-[32px] tracking-tight font-bold text-black flex items-center gap-3 cursor-pointer select-none"
        >
          <span>know more</span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <ArrowRight className="w-8 h-8" strokeWidth={2}/>
          </motion.div>
        </h2>
      </div>

      {/* 6. Character between P and A */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center pt-10">
        <div className="relative w-full h-full max-w-[1440px] aspect-[1440/900]">
          <img 
            src="/images/character_landing.png" 
            alt="Character between P and A" 
            className="absolute left-[26%] bottom-0 h-[50%] w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Landing;
