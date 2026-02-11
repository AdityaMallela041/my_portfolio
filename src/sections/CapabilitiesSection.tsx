import { useRef, useEffect, useState } from 'react';
import { Brain, Database, Cloud, Lightbulb, ArrowRight } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'ML Systems & Model Engineering',
    description: 'Training, fine-tuning, and deploying models that scale.',
  },
  {
    icon: Database,
    title: 'Data Pipelines & Feature Stores',
    description: 'Reliable ETL, versioning, and reproducible workflows.',
  },
  {
    icon: Cloud,
    title: 'MLOps & Cloud Infrastructure',
    description: 'CI/CD for ML, monitoring, and cost-efficient serving.',
  },
  {
    icon: Lightbulb,
    title: 'AI Product Prototyping',
    description: 'End-to-end prototypes from idea to deployed demo.',
  },
];

export function CapabilitiesSection() {
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
      { threshold: 0.3 }
    );

    observer.observe(section);

    // Scroll-driven animation
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Entrance phase
      if (rect.top > 0 && rect.top < windowHeight) {
        const entranceProgress = 1 - (rect.top / windowHeight);
        setScrollProgress(Math.min(entranceProgress * 2, 1));
      } 
      // Exit phase
      else if (rect.top < 0) {
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

  // Calculate transforms
  const isExit = scrollProgress < 0;
  const progress = Math.abs(scrollProgress);
  
  const cardTransform = isExit 
    ? `translateY(calc(-50% - ${progress * 18}vh))`
    : `translateY(calc(-50% + ${(1 - progress) * 40}vh))`;
  const cardOpacity = isExit ? Math.max(1 - progress * 1.5, 0) : Math.min(progress * 2, 1);
  const cardScale = isExit ? 1 : 0.96 + progress * 0.04;

  const imageTransform = isExit
    ? `translateX(calc(-50% - ${progress * 12}vw))`
    : `translateX(calc(-50% - ${(1 - progress) * 40}vw))`;
  const imageOpacity = isExit ? Math.max(1 - progress * 1.2, 0.3) : Math.min(progress * 2, 1);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden z-20"
      style={{ background: 'transparent' }}
    >
      <div
        className="glass-card absolute left-1/2 top-1/2 mx-4"
        style={{
          width: 'min(88vw, 1120px)',
          height: 'min(60vh, 560px)',
          zIndex: 1,
          transform: cardTransform + ' translateX(-50%) scale(' + cardScale + ')',
          opacity: cardOpacity,
          transition: isVisible ? 'none' : 'all 0.3s ease-out',
        }}
      >
        <div className="flex h-full">
          {/* Left Column - Image */}
          <div
            className="hidden lg:block absolute left-[21%] top-1/2"
            style={{
              width: '38%',
              height: '86%',
              transform: imageTransform + ' translateY(-50%)',
              opacity: imageOpacity,
              transition: isVisible ? 'none' : 'all 0.3s ease-out',
            }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src="/capabilities.jpg"
                alt="Data Visualization"
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
          <div className="flex-1 flex flex-col justify-center p-8 lg:p-12 lg:pl-[48%]">
            <h2
              className={`font-heading font-semibold text-slate-primary mb-8 transition-all duration-700 ${
                isVisible && scrollProgress > 0.2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
            >
              What I Do
            </h2>

            <div className="space-y-5">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 group transition-all duration-700 ${
                    isVisible && scrollProgress > 0.3 + index * 0.05 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-indigo/20 transition-colors">
                    <cap.icon size={20} className="text-indigo" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-slate-primary text-base lg:text-lg mb-1">
                      {cap.title}
                    </h3>
                    <p className="text-slate-secondary text-sm">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#work"
              className={`inline-flex items-center gap-2 text-indigo hover:text-slate-primary transition-colors mt-8 text-sm font-medium ${
                isVisible && scrollProgress > 0.5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See project examples
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
