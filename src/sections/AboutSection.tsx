import { useRef, useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const technicalSkills = [
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Flask', icon: '🌶️' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'Scikit-learn', icon: '📊' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub', icon: '🐙' },
];

const areasOfInterest = [
  'AI/ML Research',
  'LangChain & LLMs',
  'Backend Architecture',
  'NLP & Data Science',
  'Cloud Computing',
  'API Development',
  'Hackathons',
];

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9F71D2C11482A42B35B7363EDDC0AD38FA90407DF02795234AD4003C0210E4A2',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=13FF72C9DBC46EA21132CC40BE9D1090D08FB38E50AE96EED7F50E6B928666F0',
  },
  {
    name: 'Zscaler Zero Trust Associate (ZTCA)',
    url: 'http://verify.skilljar.com/c/gr8w2gagrhmj',
  },
  {
    name: 'ServiceNow Certified System Administrator (CSA)',
    url: 'https://www.credly.com/badges/4e2bb386-a19f-4349-91c1-b1f5e01c25a9/public_url',
  },
  {
    name: 'ServiceNow Certified Application Developer (CAD)',
    url: 'https://www.credly.com/badges/faea24aa-1c18-404a-8c6e-bda0c08b7bdf/public_url',
  },
];

export function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 z-[60]"
      style={{ background: 'transparent' }}
    >
      <div
        className={`glass-card mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-98'
        }`}
        style={{
          width: 'min(88vw, 1100px)',
        }}
      >
        <div className="p-8 lg:p-12">
          <h2
            className={`font-heading font-semibold text-slate-primary mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
          >
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Bio */}
            <div className="space-y-4">
              <p 
                className={`text-slate-secondary text-base lg:text-lg leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                I am a B.Tech Computer Science (AI & ML) student focused on building practical, 
                end-to-end AI systems rather than isolated models. My work spans applied machine 
                learning, NLP, and backend engineering, with an emphasis on turning AI concepts 
                into usable, production-oriented applications.
              </p>

              <p 
                className={`text-slate-secondary text-base lg:text-lg leading-relaxed transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                I have experience developing AI-powered platforms, automation pipelines, and 
                ML-driven tools that integrate data processing, model inference, and real-world 
                delivery. Alongside applied work, I have explored transformer-based NLP systems 
                and reproducible ML experimentation in academic and project-based settings.
              </p>

              <div 
                className={`pt-4 transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="text-slate-primary font-medium mb-2">Current Aim:</p>
                <p className="text-slate-secondary text-base leading-relaxed">
                  To grow as an AI/ML engineer working on applied machine learning 
                  and intelligent systems, with increasing focus on scalable AI applications and 
                  real-world deployment.
                </p>
              </div>
            </div>

            {/* Right Column - Skills & Certs */}
            <div className="space-y-8">
              {/* Technical Skills */}
              <div 
                className={`transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <h3 className="font-mono text-xs tracking-[0.12em] uppercase text-slate-secondary mb-4">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="skill-chip flex items-center gap-2"
                      title={skill.name}
                    >
                      <span>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Areas of Interest */}
              <div 
                className={`transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <h3 className="font-mono text-xs tracking-[0.12em] uppercase text-slate-secondary mb-4">
                  Areas of Interest
                </h3>
                <div className="flex flex-wrap gap-2">
                  {areasOfInterest.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg text-sm bg-indigo/10 text-indigo border border-indigo/20"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div 
                className={`transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <h3 className="font-mono text-xs tracking-[0.12em] uppercase text-slate-secondary mb-4">
                  Certifications
                </h3>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-secondary hover:text-indigo transition-colors text-sm group"
                    >
                      <ExternalLink size={14} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:underline underline-offset-2">{cert.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
