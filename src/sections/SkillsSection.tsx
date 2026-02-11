import { useRef, useEffect, useState } from 'react';

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'SQL', 'TypeScript'],
  },
  {
    name: 'ML / DS',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'Pandas', 'NumPy'],
  },
  {
    name: 'MLOps / Infra',
    skills: ['Docker', 'Kubernetes', 'AWS/GCP', 'Terraform', 'CI/CD'],
  },
  {
    name: 'Data',
    skills: ['Spark', 'Airflow', 'BigQuery', 'PostgreSQL'],
  },
];

export function SkillsSection() {
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
    ? `translateY(calc(-50% - ${progress * 16}vh))`
    : `translateY(calc(-50% + ${(1 - progress) * 45}vh))`;
  const cardOpacity = isExit ? Math.max(1 - progress * 1.5, 0) : Math.min(progress * 2, 1);
  const cardScale = isExit ? 1 : 0.97 + progress * 0.03;

  const imageTransform = isExit
    ? `translateX(calc(-50% + ${progress * 10}vw))`
    : `translateX(calc(-50% + ${(1 - progress) * 40}vw))`;
  const imageOpacity = isExit ? Math.max(1 - progress * 1.2, 0.35) : Math.min(progress * 2, 1);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden z-50"
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
          {/* Left Column - Content */}
          <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
            <h2
              className={`font-heading font-semibold text-slate-primary mb-8 transition-all duration-700 ${
                isVisible && scrollProgress > 0.15 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
            >
              Skills & Stack
            </h2>

            <div className="space-y-6">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="font-mono text-xs tracking-[0.12em] uppercase text-slate-secondary mb-3">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const globalIndex = catCategoriesSum(skillCategories, catIndex) + skillIndex;
                      return (
                        <span
                          key={skillIndex}
                          className={`skill-chip transition-all duration-500 ${
                            isVisible && scrollProgress > 0.25 + globalIndex * 0.015 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                          }`}
                          style={{ transitionDelay: `${globalIndex * 30}ms` }}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <p 
              className={`text-slate-secondary text-sm mt-8 max-w-md transition-all duration-700 delay-700 ${
                isVisible && scrollProgress > 0.7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              I choose tools for reliability, reproducibility, and long-term maintainability.
            </p>
          </div>

          {/* Right Column - Image */}
          <div
            className="hidden lg:block absolute right-[5%] top-1/2"
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
                src="/skills.jpg"
                alt="Development Environment"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(270deg, transparent 70%, rgba(7, 10, 18, 0.3) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to calculate sum of previous categories' skills
function catCategoriesSum(categories: typeof skillCategories, upToIndex: number): number {
  return categories.slice(0, upToIndex).reduce((sum, cat) => sum + cat.skills.length, 0);
}
