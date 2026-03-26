import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AgenticAISectionProps {
  scrollContainer?: React.RefObject<HTMLDivElement | null>;
}

const AgenticAISection: React.FC<AgenticAISectionProps> = ({ scrollContainer }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTextRef = useRef<HTMLDivElement>(null);
  const bracketRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !scrollTextRef.current || !bracketRef.current) return;

    const ctx = gsap.context(() => {
      const scrollText = scrollTextRef.current!;
      const bracket = bracketRef.current!;
      
      const getScrollAmount = () => -(scrollText.scrollWidth - window.innerWidth);

      // 1. Master Horizontal Tween
      const horizontalTween = gsap.to(scrollText, {
        x: getScrollAmount,
        ease: "none"
      });

      // 2. Pin and scrub the entire section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        scroller: scrollContainer?.current || window,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount()) + window.innerHeight}`, 
        pin: true,
        animation: horizontalTween,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });

      // 3. Bracket Rotation (Anchored at bottom center)
      gsap.to(bracket, {
        rotation: 1440,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainer?.current || window,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount()) + window.innerHeight}`,
          scrub: 1,
        }
      });

      // 4. Individual Word Animations
      const revealElements = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
      
      revealElements.forEach(el => {
        const animType = el.dataset.anim;
        
        const triggerConfig = {
          trigger: el,
          containerAnimation: horizontalTween,
          scroller: scrollContainer?.current || window,
          start: "left 85%",
          toggleActions: "play none none reverse"
        };

        switch(animType) {
          case "typewriter":
            gsap.fromTo(el, 
              { clipPath: "inset(0 100% 0 0)" },
              { clipPath: "inset(0 0% 0 0)", ease: "none", duration: 1.5, scrollTrigger: triggerConfig }
            );
            break;
          case "blur-in":
            gsap.from(el, { filter: "blur(20px)", opacity: 0, scale: 1.1, duration: 1.2, ease: "power2.out", scrollTrigger: triggerConfig });
            break;
          case "pop-up":
            gsap.from(el, { y: 120, scale: 0.5, opacity: 0, duration: 0.8, ease: "back.out(1.7)", scrollTrigger: triggerConfig });
            break;
          case "rotate-in":
            gsap.from(el, { rotationZ: 45, x: 100, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: triggerConfig });
            break;
          case "slide-up":
            gsap.from(el, { y: 150, opacity: 0, rotationZ: 10, duration: 0.8, ease: "power3.out", scrollTrigger: triggerConfig });
            break;
          case "slide-down":
            gsap.from(el, { y: -150, opacity: 0, rotationZ: -10, duration: 0.8, ease: "power3.out", scrollTrigger: triggerConfig });
            break;
          case "flip-3d":
            gsap.from(el, { rotationX: -90, opacity: 0, transformOrigin: "bottom center", duration: 1.2, ease: "back.out(1.4)", scrollTrigger: triggerConfig });
            break;
          case "scale-elastic":
            gsap.from(el, { scale: 0, opacity: 0, duration: 1.5, ease: "elastic.out(1, 0.4)", scrollTrigger: triggerConfig });
            break;
          case "heavy-drop":
            gsap.from(el, { y: -300, scale: 1.5, opacity: 0, rotationZ: -25, duration: 1, ease: "bounce.out", scrollTrigger: triggerConfig });
            break;
          default:
            gsap.from(el, { opacity: 0, y: 50, scrollTrigger: triggerConfig });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [scrollContainer]);

  return (
    <div 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-white flex items-center"
      style={{ perspective: '1000px' }}
    >
      {/* Horizontal Scroll Text */}
      <div 
        ref={scrollTextRef}
        className="flex items-center whitespace-nowrap pl-[80vw] pr-[20vw] md:pl-[85vw] md:pr-[15vw] lg:pl-[90vw] lg:pr-[10vw] will-change-transform -translate-y-8"
      >
        <h1 className="text-[10vw] md:text-[8vw] font-black uppercase tracking-tighter text-black flex items-center gap-4 md:gap-8 py-10">
          <span className="gsap-reveal text-black inline-block" data-anim="blur-in">Currently</span>
          <span className="gsap-reveal inline-block" data-anim="pop-up">I</span>
          <span className="gsap-reveal inline-block" data-anim="pop-up">am</span>
          <span className="gsap-reveal inline-block" data-anim="pop-up">working</span>
          <span className="gsap-reveal inline-block" data-anim="pop-up">on</span>
          
          {/* Typewriter Effect (Red) - Cursor Removed */}
          <span 
            className="gsap-reveal text-red-600 inline-block relative" 
            data-anim="typewriter"
          >
            AI agents
          </span> 
          
          <span className="gsap-reveal inline-block" data-anim="slide-up">and</span>
          <span className="gsap-reveal inline-block" data-anim="scale-elastic">building</span>
          <span className="gsap-reveal inline-block" data-anim="flip-3d">automation</span>
          <span className="gsap-reveal inline-block" data-anim="slide-down">using</span>
          
          {/* Dramatic Finisher (Solid Green and Blue) */}
          <span 
            className="gsap-reveal text-[#22c55e] inline-block" 
            data-anim="rotate-in"
          >
            N8N
          </span> 
          <span className="gsap-reveal inline-block" data-anim="pop-up">and</span> 
          <span 
            className="gsap-reveal text-[#2563eb] inline-block" 
            data-anim="heavy-drop"
          >
            MCPs
          </span>
        </h1>
      </div>

      {/* Rotating bracket anchored to the viewport center bottom */}
      <div className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center whitespace-nowrap">
        <span 
          ref={bracketRef}
          className="text-black text-6xl md:text-8xl font-mono font-bold inline-block will-change-transform whitespace-nowrap"
        >
          {"</>"}
        </span>
      </div>
    </div>
  );
};

export default AgenticAISection;
