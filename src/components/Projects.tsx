"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaCode, FaRobot, FaBrain } from "react-icons/fa";
import { SiPython, SiFastapi, SiPostgresql, SiReact, SiPytorch, SiTensorflow } from "react-icons/si";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "AI-Powered Newsletter Automation",
      category: "FULL-STACK • AI/ML • 2024-2025",
      description:
        "Automated newsletter generation system with AI-powered content fetching and summarization using Llama-3.1 and Tavily API. Features FastAPI backend, PostgreSQL database, JWT authentication, and SendGrid email integration with feedback analytics.",
      highlights: [
        "Automated content generation with Llama-3.1",
        "FastAPI backend with JWT authentication",
        "PostgreSQL for analytics and feedback",
        "SendGrid email integration",
      ],
      tech: [
        { name: "Python", icon: SiPython },
        { name: "FastAPI", icon: SiFastapi },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "React", icon: SiReact },
      ],
      github: "https://github.com/AdityaMallela041/ai-newsletter",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      icon: FaRobot,
    },
    {
      id: 2,
      title: "MixLang - Code-Switching Detection",
      category: "NLP • AI/ML • 2024-2025",
      description:
        "Transformer-based NLP system for detecting code-switching in multilingual text. Implements advanced language processing using transformer models for identifying language transitions in code-mixed conversations.",
      highlights: [
        "Transformer-based architecture",
        "Multilingual code-switching detection",
        "Multilingual text processing",
        "Advanced NLP techniques",
      ],
      tech: [
        { name: "Python", icon: SiPython },
        { name: "PyTorch", icon: SiPytorch },
        { name: "TensorFlow", icon: SiTensorflow },
      ],
      github: "https://github.com/AdityaMallela041/mixlang",
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      icon: FaBrain,
    },
    {
      id: 3,
      title: "CitizenAI Platform",
      category: "AI/ML • NLP • 2024",
      description:
        "Civic engagement platform with complaint logging, automated workflows, and AI-powered dashboards. Implements NLP-based summarization using NLTK and LangChain for intelligent citizen service management.",
      highlights: [
        "NLP-based text summarization",
        "NLTK & LangChain integration",
        "Automated workflow management",
        "AI-powered dashboards",
      ],
      tech: [
        { name: "Python", icon: SiPython },
        { name: "FastAPI", icon: SiFastapi },
      ],
      github: "https://github.com/AdityaMallela041/citizenai",
      gradient: "from-green-400 via-cyan-500 to-blue-500",
      icon: FaCode,
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-16 pb-4 md:pb-6 bg-primary-darker relative"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent-cyan text-sm md:text-base mb-3 uppercase tracking-wider">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my work in AI/ML, Full-stack Development, and NLP solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-primary-navy rounded-xl overflow-hidden border border-accent-cyan/20 hover:border-accent-cyan/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Gradient Header with Icon */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <motion.div
                    className="text-white text-5xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon />
                  </motion.div>
                </div>
                {/* Animated background effect */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-full h-full"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        background: `radial-gradient(circle at ${30 + i * 20}% ${40 + i * 15}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Content - Flex grow to push button to bottom */}
              <div className="p-5 space-y-3 flex flex-col flex-grow">
                <div className="flex-grow">
                  <p className="text-accent-green text-xs mb-2 font-semibold uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent-cyan transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="text-accent-cyan flex-shrink-0 mt-0.5">▸</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack and Button - Always at bottom */}
                <div className="pt-3 border-t border-accent-cyan/10 space-y-3">
                  <div className="flex gap-2.5">
                    {project.tech.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="text-xl text-gray-400 hover:text-accent-cyan transition-colors cursor-pointer"
                        title={tech.name}
                      >
                        <tech.icon />
                      </motion.div>
                    ))}
                  </div>

                  {/* GitHub Link - Aligned at bottom */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-accent-cyan/10 hover:bg-accent-cyan text-gray-300 hover:text-primary-dark px-4 py-2.5 rounded-lg font-semibold text-sm transition-all border border-accent-cyan/30 hover:border-accent-cyan"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="text-lg" />
                    View on GitHub
                  </motion.a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center pt-8"
        >
          <p className="text-gray-400 mb-4 text-sm">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/AdityaMallela041"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-navy px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan hover:text-primary-dark transition-all border border-accent-cyan/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl" />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
