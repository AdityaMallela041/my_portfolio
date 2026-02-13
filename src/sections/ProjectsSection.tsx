import { useRef, useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Github, Bot, Brain, Code } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Newsletter Automation',
    category: 'FULL-STACK • AI/ML • 2024-2025',
    description: 'Automated newsletter generation system with AI-powered content fetching and summarization using Llama-3.1 and Tavily API. Features FastAPI backend, PostgreSQL database, JWT authentication, and SendGrid email integration with feedback analytics.',
    highlights: [
      'Automated content generation with Llama-3.1',
      'FastAPI backend with JWT authentication',
      'PostgreSQL for analytics and feedback',
      'SendGrid email integration',
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
    github: 'https://github.com/AdityaMallela041/ai-newsletter',
    gradient: 'from-purple-500 via-pink-500 to-blue-500',
    icon: Bot,
  },
  {
    title: 'MixLang - Code-Switching Detection',
    category: 'NLP • AI/ML • 2024-2025',
    description: 'Transformer-based NLP system for detecting code-switching in multilingual text. Implements advanced language processing using transformer models for identifying language transitions in code-mixed conversations.',
    highlights: [
      'Transformer-based architecture',
      'Multilingual code-switching detection',
      'Multilingual text processing',
      'Advanced NLP techniques',
    ],
    techStack: ['Python', 'PyTorch', 'TensorFlow'],
    github: 'https://github.com/AdityaMallela041/mixlang',
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
    icon: Brain,
  },
  {
    title: 'PyReady',
    category: 'PYTHON • TOOLING • 2025',
    description: 'Deterministic Python project environment checker and governance tool. Performs static, read-only analysis for capability detection, validation, report generation, change tracking, and policy enforcement through declarative YAML policies.',
    highlights: [
      'Deterministic environment analysis',
      'Policy-based governance system',
      'CI/CD integration with exit codes',
      'Zero code execution, static analysis only',
    ],
    techStack: ['Python'],
    github: 'https://github.com/AdityaMallela041/PyReady',
    gradient: 'from-green-500 via-cyan-500 to-blue-500',
    icon: Code,
  },
];

export function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="relative py-20 lg:py-32 z-30"
      style={{ background: 'transparent' }}
    >
      <div
        className={`glass-card mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-98'
        }`}
        style={{
          width: 'min(90vw, 1200px)',
        }}
      >
        <div className="p-8 lg:p-10">
          {/* Header */}
          <div 
            className={`flex items-center justify-between mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2
              className="font-heading font-semibold text-slate-primary"
              style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
            >
              Projects
            </h2>
            <a
              href="https://github.com/AdityaMallela041"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-slate-secondary hover:text-indigo transition-colors text-sm"
            >
              <Github size={18} />
              View All Projects
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative glass-card overflow-hidden transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                {/* Content */}
                <div className="p-6">
                  {/* Icon & Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <project.icon size={24} className="text-white" />
                    </div>
                    <span className="font-mono text-xs tracking-wider text-slate-secondary uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-slate-primary text-lg mb-3 group-hover:text-indigo transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-secondary text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2.5 text-sm text-slate-secondary">
                        <span className="text-indigo mt-0.5 flex-shrink-0">•</span>
                        <span className="line-clamp-1 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2 py-1 rounded-md text-xs bg-white/5 text-slate-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo hover:text-slate-primary transition-colors text-sm font-medium"
                  >
                    View on GitHub
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View All */}
          <a
            href="https://github.com/AdityaMallela041"
            target="_blank"
            rel="noopener noreferrer"
            className={`sm:hidden inline-flex items-center justify-center gap-2 text-indigo hover:text-slate-primary transition-colors mt-6 text-sm font-medium transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Github size={18} />
            View All Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}