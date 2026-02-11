import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const metrics = [
  { value: '-34%', label: 'False positives' },
  { value: '<80ms', label: 'P99 latency' },
  { value: '99.97%', label: 'Uptime' },
];

export function SpotlightSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top > 0 && rect.top < windowHeight) {
        const entranceProgress = 1 - (rect.top / windowHeight);
        setScrollProgress(Math.min(entranceProgress * 2, 1));
      } else if (rect.top < 0) {
        const exitProgress = Math.min(Math.abs(rect.top) / (windowHeight * 0.5), 1);
        setScrollProgress(-exitProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isExit = scrollProgress < 0;
  const progress = Math.abs(scrollProgress);
  
  const cardTransform = isExit 
    ? `translateX(calc(-50% - ${progress * 18}vw))`
    : `translateX(calc(-50% + ${(1 - progress) * 50}vw))`;
  const cardOpacity = isExit ? Math.max(1 - progress * 1.5, 0) : Math.min(progress * 2, 1);
  const cardScale = isExit ? 1 : 0.97 + progress * 0.03;

  const imageTransform = isExit
    ? `translateX(calc(-50% - ${progress * 10}vw))`
    : `translateX(calc(-50% - ${(1 - progress) * 40}vw))`;
  const imageOpacity = isExit ? Math.max(1 - progress * 1.2, 0.35) : Math.min(progress * 2, 1);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden z-40"
      style={{ background: 'transparent' }}
    >
      <div
        className="glass-card absolute left-1/2 top-1/2 mx-4"
        style={{
          width: 'min(88vw, 1140px)',
          height: 'min(60vh, 560px)',
          zIndex: 1,
          transform: cardTransform + ' translateY(-50%) scale(' + cardScale + ')',
          opacity: cardOpacity,
          transition: isVisible ? 'none' : 'all 0.3s ease-out',
        }}
      >
        <div className="flex h-full">
          {/* Left Column - Image */}
          <div
            className="hidden lg:block absolute left-[25%] top-1/2"
            style={{
              width: '42%',
              height: '86%',
              transform: imageTransform + ' translateY(-50%)',
              opacity: imageOpacity,
              transition: isVisible ? 'none' : 'all 0.3s ease-out',
            }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src="/spotlight.jpg"
                alt="Fraud Detection Platform"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 70%, rgba(7, 10, 18, 0.3) 100%)',
                }}
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 flex flex-col justify-center p-8 lg:p-12 lg:pl-[50%]">
            <span 
              className={`font-mono text-xs tracking-[0.12em] uppercase text-indigo mb-4 transition-all duration-700 ${
                isVisible && scrollProgress > 0.15 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Featured Project
            </span>

            <h2
              className={`font-heading font-semibold text-slate-primary mb-4 transition-all duration-700 delay-100 ${
                isVisible && scrollProgress > 0.2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
            >
              Fraud Detection Platform
            </h2>

            <p 
              className={`text-slate-secondary text-base lg:text-lg mb-8 max-w-md transition-all duration-700 delay-150 ${
                isVisible && scrollProgress > 0.25 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              A real-time classification system that reduced false positives and improved approval speed without sacrificing security.
            </p>

            {/* Metrics */}
            <div className="flex gap-6 lg:gap-10 mb-8">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible && scrollProgress > 0.3 + index * 0.05 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="font-heading font-semibold text-slate-primary text-2xl lg:text-3xl mb-1">
                    {metric.value}
                  </div>
                  <div className="text-slate-secondary text-xs lg:text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <button 
              className={`btn-primary w-fit flex items-center gap-2 transition-all duration-700 delay-500 ${
                isVisible && scrollProgress > 0.5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              onClick={() => alert('Case study coming soon!')}
            >
              Read the case study
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
