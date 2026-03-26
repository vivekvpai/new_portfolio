import React from 'react';
import { motion } from 'motion/react';

const educationData = [
  {
    step: "01",
    level: "School",
    institution: "High School Diploma",
    year: "2014 - 2016",
    color: "#FF4B4B", // Red
    desc: "Built a strong foundation in core subjects with a focus on science and mathematics, participating in various technical clubs."
  },
  {
    step: "02",
    level: "College",
    institution: "Pre-University Education",
    year: "2016 - 2018",
    color: "#54C64D", // Green
    desc: "Advanced coursework in Physics, Chemistry, and Mathematics. Developed early programming skills and participated in hackathons."
  },
  {
    step: "03",
    level: "Engineering College",
    institution: "Bachelor of Technology",
    year: "2018 - 2022",
    color: "#3D8FF0", // Blue
    desc: "Majored in Computer Science. Specialized in software engineering, data structures, and full-stack web development."
  },
  {
    step: "04",
    level: "Masters",
    institution: "Master of Science",
    year: "2023 - 2025",
    color: "#FF4B4B", // Red
    desc: "Advanced research and coursework in Artificial Intelligence, Machine Learning, and scalable distributed systems."
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="w-full bg-[#f4f4f4] relative pt-12 pb-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-[#3D8FF0]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 right-0 w-[600px] h-[600px] bg-[#FF4B4B]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 relative z-10">
        
        {/* Left Sticky Column */}
        <div className="w-full lg:w-2/5 relative">
          <div className="lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-[80px] md:text-[120px] font-black leading-[0.85] tracking-tighter uppercase text-black">
                EDU<br />CATION
              </h2>
              <div className="w-20 h-2 bg-black mt-8 mb-6" />
              <p className="text-xl font-bold text-black/50 leading-relaxed max-w-sm">
                My academic journey, foundational learning experiences, and the stepping stones of my career.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Scrolling Timeline */}
        <div className="w-full lg:w-3/5 relative">
          {/* The continuous vertical line */}
          <div className="absolute left-[11px] top-8 bottom-8 w-[2px] bg-black/10 rounded-full" />

          <div className="flex flex-col gap-16">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-0 top-10 w-6 h-6 rounded-full border-4 border-[#f4f4f4] shadow-sm z-10 transition-transform duration-300 hover:scale-150"
                  style={{ backgroundColor: item.color }}
                />

                {/* Glassmorphic Card */}
                <div 
                  className="bg-white/40 backdrop-blur-xl rounded-[32px] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                  style={{
                    boxShadow: `0 20px 40px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.6)`
                  }}
                >
                  {/* Hover Gradient Background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 100% 100%, ${item.color}, transparent 50%)` }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <span 
                        className="text-6xl md:text-8xl font-black tracking-tighter opacity-20 transition-opacity duration-500 group-hover:opacity-40" 
                        style={{ color: item.color }}
                      >
                        {item.step}
                      </span>
                      <span className="px-5 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase bg-white/80 text-black/80 shadow-sm border border-white">
                        {item.year}
                      </span>
                    </div>

                    <h3 
                      className="text-3xl md:text-4xl font-black tracking-tight uppercase mb-2" 
                      style={{ color: item.color }}
                    >
                      {item.level}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-bold text-black/80 mb-4">
                      {item.institution}
                    </h4>
                    <p className="text-base md:text-lg font-medium text-black/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
