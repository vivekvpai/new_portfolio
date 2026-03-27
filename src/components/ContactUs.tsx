import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Github } from 'lucide-react';

const ContactUs: React.FC<{ id?: string }> = ({ id = 'contact' }) => {
  const pathVariants = {
    hidden: { opacity: 0, x: 150, rotate: 15, scale: 0.85 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        delay: custom * 0.15,
        duration: 1.2,
        ease: [0.2, 0.9, 0.3, 1.15]
      }
    })
  };

  return (
    <section id={id} className="w-full h-screen bg-[#f4f4f4] relative overflow-hidden font-sans text-black selection:bg-blue-200">
      
      {/* 1. Top Left Header */}
      <header className="absolute top-12 left-12 z-20">
        <div className="flex items-center text-[60px] md:text-[90px] font-bold leading-[0.85] tracking-tighter text-black m-0 p-0">
          <span>CONNECT WITH</span>
        </div>
      </header>

      {/* 2. Top Right Links */}
      <div className="absolute top-12 right-24 md:right-40 z-30 flex flex-col items-end gap-4 md:gap-6">
        <a 
          href="https://github.com/paivivek002" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-black/60 hover:text-black transition-colors group"
        >
          <span className="text-xl md:text-2xl font-bold tracking-tight">GitHub</span>
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
            <Github size={24} strokeWidth={2} />
          </div>
        </a>
        <a 
          href="https://linkedin.com/in/paivivek002" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-black/60 hover:text-[#0A66C2] transition-colors group"
        >
          <span className="text-xl md:text-2xl font-bold tracking-tight">LinkedIn</span>
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] group-hover:text-white transition-all">
            <Linkedin size={24} strokeWidth={2} />
          </div>
        </a>
        <a 
          href="mailto:paivivek002@gmail.com" 
          className="flex items-center gap-4 text-black/60 hover:text-[#FF4B4B] transition-colors group"
        >
          <span className="text-xl md:text-2xl font-bold tracking-tight">Email</span>
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-[#FF4B4B] group-hover:border-[#FF4B4B] group-hover:text-white transition-all">
            <Mail size={24} strokeWidth={2} />
          </div>
        </a>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 z-10 w-[1000px] h-[1000px] pointer-events-none overflow-hidden select-none">
        <div 
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40"
          style={{ background: 'radial-gradient(circle, #3D8FF0 0%, transparent 70%)' }}
        />
        <div 
          className="absolute -top-32 right-[320px] w-[450px] h-[450px] rounded-full blur-[100px] opacity-35"
          style={{ background: 'radial-gradient(circle, #54C64D 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[320px] -right-32 w-[420px] h-[420px] rounded-full blur-[100px] opacity-35"
          style={{ background: 'radial-gradient(circle, #FF4B4B 0%, transparent 70%)' }}
        />
      </div>

      {/* 3. Central Graphic Illustration (SVG) */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center pt-10">
        <svg 
          className="w-full h-full min-w-[1024px]" 
          viewBox="0 0 1440 900" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* The ME Shapes */}
          <g strokeWidth="155" fill="none" strokeLinejoin="round" strokeLinecap="round">
            {/* Red 'M' */}
            <motion.g 
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={pathVariants}
              style={{ transformOrigin: "center", transformBox: "fill-box" }}
            >
              <path 
                d="M 250,820 L 330,280 L 540,600 L 750,280 L 670,820" 
                stroke="#FF4B4B" 
              />
            </motion.g>

            {/* Blue 'E' */}
            <motion.g 
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={pathVariants}
              style={{ transformOrigin: "center", transformBox: "fill-box" }}
            >
              <path 
                d="M 1200,280 L 980,280 L 900,820 L 1120,820" 
                stroke="#3D8FF0" 
              />
              <path 
                d="M 940,550 L 1140,550" 
                stroke="#3D8FF0" 
              />
            </motion.g>
          </g>
        </svg>
      </div>

      {/* 4. Character between M and E */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center pt-10">
        <div className="relative w-full h-full max-w-[1440px] aspect-[1440/900]">
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            src="/images/character_landing.png" 
            alt="Character between M and E" 
            className="absolute left-[55%] -translate-x-1/2 bottom-0 h-[50%] w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

    </section>
  );
};

export default ContactUs;
