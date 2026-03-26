import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface BlogsSectionProps {
  scrollContainer?: React.RefObject<HTMLDivElement | null>;
}

const blogs = [
  {
    img: "/images/blogs/mfe-architecture.png",
    name: "Orchestrator of nested polyglot micro frontends",
    link: "https://medium.com/@paivivek002/orchestrator-of-nested-polyglot-micro-frontends-6a1600234bae",
    description: "Breaking framework barriers by orchestrating a deep-nested, polyglot Micro-Frontend architecture with Angular and React.",
    color: "#FF4B4B" // Red
  },
  {
    img: "/images/blogs/mcp-llm-super-app.png",
    name: "MCP and LLMs: The Next Super App",
    link: "https://medium.com/@paivivek002/mcp-llms-the-next-super-app-85a226804d77",
    description: "Exploring how Model Context Protocol and Large Language Models are shaping the future of super applications.",
    color: "#54C64D" // Green
  },
  {
    img: "/images/blogs/metric-talks-3rd-webinar.png",
    name: "MetricTalks 3rd Webinar",
    link: "https://metricdust.com/reflect/MetricTalks_3rd_Webinar",
    description: "Insights and key takeaways from the 3rd MetricTalks webinar on modern software engineering practices.",
    color: "#3D8FF0" // Blue
  },
  {
    img: "/images/blogs/generic-cache-mechanism.png",
    name: "Generic Cache Mechanism",
    link: "https://medium.com/@paivivek002/generic-cache-mechanism-for-desired-apis-and-intervals-6aec1379cb1a",
    description: "A deep dive into building a generic caching mechanism for desired APIs and intervals to boost performance.",
    color: "#FF4B4B" // Red
  },
  {
    img: "/images/blogs/microfrontend-perfect-for-saas.png",
    name: "Microfrontend Perfect for SaaS",
    link: "https://metricdust.com/reflect/microfrontend_perfect_for_saas",
    description: "Why microfrontend architecture is the perfect fit for scaling modern SaaS applications.",
    color: "#54C64D" // Green
  },
];

const BlogsSection: React.FC<BlogsSectionProps> = ({ scrollContainer }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current) return;

    const ctx = gsap.context(() => {
      const scrollEl = scrollContainerRef.current!;
      
      const getScrollAmount = () => -(scrollEl.scrollWidth - window.innerWidth);

      // Horizontal Scroll Tween
      const horizontalTween = gsap.to(scrollEl, {
        x: () => getScrollAmount(),
        ease: "none",
        force3D: true
      });

      // Pin and scrub
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

    }, sectionRef);

    return () => ctx.revert();
  }, [scrollContainer]);

  return (
    <section 
      id="blogs"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#f4f4f4] flex items-center"
    >
      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex items-center h-full whitespace-nowrap pl-[10vw] pr-[30vw] will-change-transform z-10"
      >
        {/* Intro Text Panel */}
        <div className="w-[80vw] md:w-[40vw] flex-shrink-0 pr-20 whitespace-normal">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-black mb-6">
            Insights <br/>& Writing
          </h2>
          <p className="text-xl text-black/50 font-medium">
            Scroll right to explore my latest articles, technical deep-dives, and thoughts on software engineering.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex gap-8 md:gap-16 items-center h-full">
          {blogs.map((blog, index) => (
            <a 
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[320px] md:w-[450px] flex-shrink-0 rounded-[32px] bg-white p-4 md:p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-black/5 flex flex-col cursor-pointer whitespace-normal"
            >
              {/* Image Container */}
              <div className="w-full h-[200px] md:h-[260px] rounded-[24px] overflow-hidden relative bg-black/5">
                <img 
                  src={blog.img} 
                  alt={blog.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${blog.name.replace(/\s+/g, '')}/800/600`;
                  }}
                />
              </div>

              {/* Floating Title Overlay */}
              <div className="relative -mt-12 mx-4 md:mx-6 z-10">
                <div 
                  className="rounded-2xl p-5 md:p-6 shadow-xl"
                  style={{ 
                    backgroundColor: blog.color, // Solid color for performance
                    boxShadow: `0 10px 30px -10px ${blog.color}`
                  }}
                >
                  <h3 className="text-lg md:text-xl font-black tracking-tight text-white leading-tight">
                    {blog.name}
                  </h3>
                </div>
              </div>

              {/* Content Container */}
              <div className="px-4 md:px-6 pt-6 pb-2 flex-1 flex flex-col justify-between">
                <p className="text-black/60 font-medium line-clamp-3 mb-8 text-sm md:text-base">
                  {blog.description || "Read more about this topic in the full article."}
                </p>

                {/* Read Article Button */}
                <div className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white w-max hover:bg-black/80 transition-colors duration-300">
                  <span className="font-bold tracking-wide text-sm">Read Article</span>
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
