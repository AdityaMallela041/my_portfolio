import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-driven exit animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1) as section leaves viewport
      if (rect.top < 0) {
        const progress = Math.min(Math.abs(rect.top) / (windowHeight * 0.5), 1);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1oWLHoxTCiO1GBDBsobBkVuIiCWqIIsM5/view?usp=sharing', '_blank');
  };

  // Calculate exit transforms based on scroll progress
  const cardTransform = scrollProgress > 0 
    ? `translateX(calc(-50% - ${scrollProgress * 18}vw)) translateY(-50%)` 
    : 'translateX(-50%) translateY(-50%)';
  const cardOpacity = Math.max(1 - scrollProgress * 1.5, 0);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden z-10"
      style={{ background: 'transparent' }}
    >
      {/* Accent glow behind card */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-500"
        style={{
          left: '50%',
          top: '40%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(79, 109, 255, 0.15) 0%, transparent 60%)',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          opacity: cardOpacity,
        }}
      />

      {/* Glass Card */}
      <div
        className={`glass-card absolute left-1/2 top-[52%] mx-4 transition-all duration-300 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 translate-y-6'
        }`}
        style={{
          width: 'min(92vw, 1100px)',
          height: 'min(40vh, 360px)',
          zIndex: 1,
          transform: cardTransform,
          opacity: cardOpacity,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center p-8 lg:p-12">
          {/* Tagline - Single Line */}
          <p 
            className={`font-mono text-sm tracking-[0.08em] text-indigo mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            SOFTWARE ENGINEER | AI / ML Developer | Applied Machine Learning
          </p>

          {/* Name */}
          <h1
            className={`font-heading font-bold text-slate-primary leading-[0.95] tracking-[-0.02em] mb-8 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            MSV Aditya Phani Kumar
          </h1>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <button 
              onClick={handleScrollToAbout}
              className="btn-primary flex items-center gap-2"
            >
              Explore My Work
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={handleDownloadResume}
              className="btn-secondary flex items-center gap-2"
            >
              Download Resume
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
