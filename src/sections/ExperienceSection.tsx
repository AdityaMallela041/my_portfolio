import { useRef, useEffect, useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'AI Developer Intern',
    organization: 'Swecha',
    duration: 'June 2025 - July 2025',
    location: 'Remote',
    responsibilities: [
      'Completed a 4-week AI internship focused on building and understanding AI-driven solutions',
      'Gained hands-on experience with AI/ML concepts and practical implementation',
      'Worked on guided projects and real-world problem statements in a collaborative environment',
    ],
  },
  {
    role: 'Web Developer',
    organization: 'IETE ISF VBIT',
    duration: 'Sep 2024 - Mar 2025',
    location: 'Hyderabad',
    responsibilities: [
      'Revamped the IETE-ISF forum platform with modern UI/UX and responsive design',
      'Improved navigation and accessibility for 150+ users',
      'Reduced maintenance overhead by 20% through streamlined backend workflows',
    ],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 lg:py-32 z-40"
      style={{ background: 'transparent' }}
    >
      <div
        className={`glass-card mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-98'
        }`}
        style={{
          width: 'min(88vw, 1000px)',
        }}
      >
        <div className="p-8 lg:p-12">
          <h2
            className={`font-heading font-semibold text-slate-primary mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
          >
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 border-l-2 border-indigo/30 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo border-4 border-navy" />

                {/* Content */}
                <div className="pb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading font-semibold text-slate-primary text-lg">
                      {exp.role}
                    </h3>
                    <span className="text-slate-secondary">@</span>
                    <span className="text-indigo font-medium">{exp.organization}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-secondary mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIndex) => (
                      <li 
                        key={rIndex} 
                        className="flex items-start gap-3 text-slate-secondary text-sm"
                      >
                        <span className="text-indigo mt-0.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}